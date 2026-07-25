const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./authGuard-CEzcrBkK.js","./authService-CgfoSPdf.js","./firebase-BzP43VG7.js","./login-BtABpxCq.js","./LaboratorioKernel-DQR0aCHt.js","./AsistentePruebas-9ENxU2k9.js","./metadatosFichasMetodologicas-BbzfSE5K.js","./CalculadoraDosGrupos-CVTtMBIw.js","./jstat-DiDocX-r.js","./exportacionesCalculadoras-DbEW2ER5.js","./CalculadoraDosMuestrasRelacionadas-yNAWtDgq.js","./estadisticaDosMuestrasRelacionadas-C0D8qKdR.js","./CalculadoraTresOMasGrupos-GSLRL4og.js","./CalculadoraTresOMasMedicionesRelacionadas-DNJ9KK3H.js","./CalculadoraRelacionVariables-BAf1RnoK.js","./CalculadoraAsociacionCategorica-CdWphlxR.js","./CalculadoraEstadisticaDescriptiva-BPPMJi58.js","./CalculadoraFiabilidadCuestionarios-DoZVsIdf.js","./CalculadoraEvaluacionEducativa-B-Hw4Qf8.js","./CalculadoraTamanoMuestraPotencia-DLJx5UHY.js","./BibliotecaMetodologica-BzzsJJUi.js","./CalculadoraRegresionCompleta-CoGrGeF8.js","./CalculadoraRegresionLogistica-BEavYu0l.js","./CalculadoraRegresionConteo-X6Bj8ApH.js"])))=>i.map(i=>d[i]);
(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const ze=""+new URL("ElKernel-BvHOWfRq.webp",import.meta.url).href;function mt(){return`
        <div class="flex w-full items-center justify-between gap-4">
            <a href="#/home" class="flex min-w-0 items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100" aria-label="Ir a la portada de El Kernel">
                <img class="h-12 w-12 shrink-0 rounded-xl object-contain md:h-14 md:w-14" src="${ze}" alt="Logo del Grupo de Investigación El Kernel" title="El Kernel" />
                <span class="min-w-0">
                    <span class="block truncate text-xl font-black text-slate-950 md:text-2xl xl:text-3xl">El Kernel</span>
                    <span class="hidden text-xs font-semibold text-slate-500 sm:block">Investigación y servicios científicos</span>
                </span>
            </a>
            <button
                type="button"
                data-action="open-menu"
                aria-label="Abrir menú de navegación"
                aria-expanded="false"
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-950 shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 lg:hidden"
            >
                <i aria-hidden="true" class="bx bx-menu text-3xl"></i>
            </button>
        </div>
    `}function ye(e,a,t,i=""){return`
        <li class="${i}">
            <button
                type="button"
                data-route="${e}"
                class="flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 lg:w-auto lg:justify-center lg:px-2 lg:py-2 lg:text-sm xl:px-3 xl:text-base 2xl:text-lg"
            >
                <span>${a}</span>
                <i aria-hidden="true" class="bx ${t} shrink-0 text-2xl lg:text-xl"></i>
            </button>
        </li>
    `}function be(e,a,t){return`
        <li>
            <button
                type="button"
                data-route="${e}"
                class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold text-slate-700 transition-colors hover:bg-[#0f5b5d] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 2xl:text-base"
            >
                <i aria-hidden="true" class="bx ${t} shrink-0 text-xl"></i>
                <span>${a}</span>
            </button>
        </li>
    `}function wa({id:e,etiqueta:a,icono:t,elementos:i}){return`
        <li data-submenu class="relative min-w-0">
            <button
                type="button"
                data-action="toggle-submenu"
                aria-expanded="false"
                aria-controls="${e}"
                class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 lg:w-auto lg:px-2 lg:py-2 lg:text-sm xl:px-3 xl:text-base 2xl:text-lg"
            >
                <span class="flex items-center gap-2">
                    <i aria-hidden="true" class="bx ${t} shrink-0 text-2xl lg:text-xl"></i>
                    <span>${a}</span>
                </span>
                <i data-submenu-caret aria-hidden="true" class="bx bx-caret-down shrink-0 text-xl transition-transform"></i>
            </button>

            <ul
                id="${e}"
                data-submenu-panel
                class="relative z-[260] mt-2 hidden w-full flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-2 text-slate-800 shadow-2xl lg:absolute lg:left-0 lg:top-full lg:z-[260] lg:mt-2 lg:w-72 lg:min-w-72"
            >
                ${i.join("")}
            </ul>
        </li>
    `}function bt(){return`
        <li class="mt-2 lg:mt-0 lg:ml-1">
            <button
                type="button"
                data-route="diagnosticoServicios"
                class="flex w-full items-center justify-between gap-3 rounded-xl bg-[#d5a54a] px-4 py-3 text-left text-base font-black text-[#06141a] shadow-md transition hover:bg-[#efc86f] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 lg:w-auto lg:justify-center lg:px-4 lg:py-2.5 lg:text-sm xl:text-base"
            >
                <span>Solicitar diagnóstico</span>
                <i aria-hidden="true" class="bx bx-right-arrow-alt shrink-0 text-2xl"></i>
            </button>
        </li>
    `}function gt(){return`
        <div class="mb-5 flex w-full items-center justify-between border-b border-slate-200 px-3 pb-4 lg:hidden">
            <div>
                <p class="text-2xl font-black text-slate-950">El Kernel</p>
                <p class="mt-1 text-xs font-semibold text-slate-500">Investigación y servicios científicos</p>
            </div>
            <button type="button" data-action="close-navBar" aria-label="Cerrar navegación" class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                <i aria-hidden="true" class="bx bx-x text-3xl"></i>
            </button>
        </div>

        <ul class="relative z-[230] flex min-h-full w-full flex-col gap-1 p-3 text-black lg:min-h-0 lg:flex-row lg:items-center lg:justify-end lg:gap-0.5 lg:p-0 xl:gap-1">
            ${ye("home","Portada","bx-home")}
            ${ye("servicios","Servicios","bx-grid-alt")}
            ${ye("laboratorioKernel","Laboratorio","bx-bar-chart-alt-2")}

            ${wa({id:"submenu-nuestro-trabajo",etiqueta:"Investigación",icono:"bx-briefcase-alt-2",elementos:[be("lineas","Líneas de investigación","bx-git-branch"),be("proyectos","Proyectos","bx-bulb"),be("publicaciones","Publicaciones","bx-book-open"),be("herramientas","Herramientas","bx-wrench")]})}

            ${wa({id:"submenu-nosotros",etiqueta:"Nosotros",icono:"bx-group",elementos:[be("quienesSomos","Quiénes somos","bx-info-circle"),be("equipment","Equipo","bx-group")]})}

            ${ye("noticias","Noticias","bx-news","lg:hidden 2xl:block")}
            ${ye("contacto","Contacto","bx-envelope","lg:hidden xl:block")}
            ${bt()}
        </ul>
    `}function xt(){const e=new Date().getFullYear();return`
        <div class="border-b border-white/10 bg-[#071820]">
            <div class="mx-auto grid max-w-[1600px] grid-cols-1 gap-9 px-5 py-10 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-10">
                <section class="text-white" aria-labelledby="titulo-footer-kernel">
                    <div class="flex items-center gap-4">
                        <img class="h-16 w-16 rounded-2xl bg-white p-1.5 object-contain shadow-lg" src="${ze}" alt="Logo del Grupo de Investigación El Kernel" loading="lazy" />
                        <div>
                            <h2 id="titulo-footer-kernel" class="text-xl font-black">Grupo de Investigación El Kernel</h2>
                            <p class="mt-1 text-sm font-semibold text-[#efc86f]">Rigor matemático para investigar, enseñar y decidir mejor.</p>
                        </div>
                    </div>
                    <p class="mt-5 max-w-md text-sm leading-relaxed text-slate-300">Matemática aplicada y computacional, estadística, ciencia de datos, educación, investigación e innovación al servicio de universidades, instituciones públicas, empresas y equipos científicos.</p>
                    <a href="#/diagnosticoServicios" class="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#d5a54a] px-5 py-3 font-black text-[#071820] shadow-md transition hover:bg-[#efc86f]">Solicitar diagnóstico <span aria-hidden="true">→</span></a>
                </section>

                <nav aria-label="Servicios y plataformas">
                    <h2 class="text-sm font-black uppercase tracking-[0.18em] text-[#efc86f]">Servicios</h2>
                    <ul class="mt-4 space-y-3 text-sm font-semibold text-slate-300">
                        <li><a href="#/servicios" class="hover:text-white">Catálogo de 20 servicios</a></li>
                        <li><a href="#/diagnosticoServicios" class="hover:text-white">Diagnóstico inicial</a></li>
                        <li><a href="#/laboratorioKernel" class="hover:text-white">Laboratorio Inteligente</a></li>
                        <li><a href="#/herramientas" class="hover:text-white">Herramientas científicas</a></li>
                    </ul>
                </nav>

                <nav aria-label="Investigación e institución">
                    <h2 class="text-sm font-black uppercase tracking-[0.18em] text-[#efc86f]">El grupo</h2>
                    <ul class="mt-4 space-y-3 text-sm font-semibold text-slate-300">
                        <li><a href="#/quienesSomos" class="hover:text-white">Quiénes somos</a></li>
                        <li><a href="#/equipment" class="hover:text-white">Equipo</a></li>
                        <li><a href="#/lineas" class="hover:text-white">Líneas de investigación</a></li>
                        <li><a href="#/proyectos" class="hover:text-white">Proyectos</a></li>
                        <li><a href="#/publicaciones" class="hover:text-white">Publicaciones</a></li>
                    </ul>
                </nav>

                <section class="text-white" aria-labelledby="titulo-contacto-footer">
                    <h2 id="titulo-contacto-footer" class="text-sm font-black uppercase tracking-[0.18em] text-[#efc86f]">Contacto y principios</h2>
                    <a href="mailto:mleonardos@unapec.edu.do" class="mt-4 block break-all text-base font-black hover:text-emerald-200">mleonardos@unapec.edu.do</a>
                    <p class="mt-2 text-sm text-slate-300">República Dominicana</p>
                    <div class="mt-5 flex flex-wrap gap-2">
                        ${["Confidencialidad","Integridad académica","Protección de datos","Reproducibilidad"].map(a=>`<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">${a}</span>`).join("")}
                    </div>
                    <nav class="mt-6" aria-label="Instituciones vinculadas">
                        <ul class="flex flex-wrap gap-3">
                            <li><a class="text-sm font-black text-emerald-200 hover:text-white" href="https://www.isfodosu.edu.do/" target="_blank" rel="noopener noreferrer">ISFODOSU</a></li>
                            <li><a class="text-sm font-black text-emerald-200 hover:text-white" href="https://uasd.edu.do/" target="_blank" rel="noopener noreferrer">UASD</a></li>
                            <li><a class="text-sm font-black text-emerald-200 hover:text-white" href="https://unapec.edu.do/" target="_blank" rel="noopener noreferrer">UNAPEC</a></li>
                        </ul>
                    </nav>
                </section>
            </div>
        </div>
        <div class="bg-[#041014] px-5 py-5 text-xs text-slate-400 md:px-8 md:text-sm">
            <div class="mx-auto flex max-w-[1600px] flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p>© ${e} Grupo de Investigación El Kernel — Todos los derechos reservados.</p>
                <div class="flex flex-col gap-1 md:items-end">
                    <p>Los alcances, responsables, aliados, tiempos y tarifas se definen después del diagnóstico inicial.</p>
                    <a href="./THIRD_PARTY_NOTICES.md" target="_blank" rel="noopener noreferrer" class="w-fit underline decoration-slate-600 underline-offset-4 transition hover:text-slate-200">Licencias y créditos</a>
                </div>
            </div>
        </div>
    `}function ft(e){if(!e||e.dataset.submenusInicializados==="true")return;const a=[...e.querySelectorAll("[data-submenu]")],t=window.matchMedia("(min-width: 1024px)");function i(s){return{disparador:s.querySelector(":scope > [data-action='toggle-submenu']"),panel:s.querySelector(":scope > [data-submenu-panel]"),indicador:s.querySelector(":scope > [data-action='toggle-submenu'] [data-submenu-caret]")}}function o(s,n){const{disparador:d,panel:b,indicador:p}=i(s);!d||!b||(d.setAttribute("aria-expanded",String(n)),b.classList.toggle("hidden",!n),b.classList.toggle("flex",n),p?.classList.toggle("rotate-180",n))}function r(s=null){a.forEach(n=>{n!==s&&o(n,!1)})}a.forEach(s=>{const{disparador:n,panel:d}=i(s);!n||!d||(n.addEventListener("click",b=>{b.preventDefault(),b.stopPropagation();const p=n.getAttribute("aria-expanded")!=="true";r(s),o(s,p)}),s.addEventListener("mouseenter",()=>{t.matches&&(r(s),o(s,!0))}),s.addEventListener("mouseleave",()=>{t.matches&&o(s,!1)}),d.addEventListener("click",b=>{b.target.closest("[data-route], [data-home-section]")&&o(s,!1)}))}),e.addEventListener("click",s=>{s.target.closest("[data-route], [data-home-section]")&&r()}),document.addEventListener("click",s=>{e.contains(s.target)||r()}),document.addEventListener("keydown",s=>{if(s.key!=="Escape")return;const n=e.querySelector("[data-action='toggle-submenu'][aria-expanded='true']");r(),n?.focus()}),t.addEventListener("change",()=>r()),e.dataset.submenusInicializados="true"}const vt="[data-nav-overlay]",Ua="(min-width: 1024px)",Ba=["invisible","pointer-events-none"],ht=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(",");let Ue=null,Be=[],ra="",re=null,na=!1;function Ve(){return window.matchMedia(Ua).matches}function ua(e){return e?._disparadorMenu||document.querySelector('[data-action="open-menu"]')}function Va(){document.querySelector(vt)?.remove()}function yt(e){return[...e.querySelectorAll(ht)].filter(a=>a instanceof HTMLElement&&a.getAttribute("aria-hidden")!=="true")}function wt(){Be=[document.querySelector("#header"),document.querySelector("#main"),document.querySelector("#footer")].filter(Boolean).map(a=>({elemento:a,teniaInert:a.hasAttribute("inert")})),Be.forEach(({elemento:a})=>{a.setAttribute("inert","")})}function kt(){Be.forEach(({elemento:e,teniaInert:a})=>{a||e.removeAttribute("inert")}),Be=[]}function At(){Ue?.abort(),Ue=null}function _a(e){e?.classList.remove(...Ba),e?.setAttribute("aria-expanded","false")}function Et(e){e?.classList.add(...Ba),e?.setAttribute("aria-expanded","true")}function Ga(){na&&(document.body.style.overflow=ra,ra="",kt(),na=!1),At(),Va(),re=null}function ka(e){if(!e)return;re===e?pe(e,{restaurarFoco:!1}):Ga();const a=ua(e);_a(a),e.classList.remove("block"),e.classList.add("hidden"),Ve()?e.setAttribute("aria-hidden","false"):e.setAttribute("aria-hidden","true")}function pe(e,{restaurarFoco:a=!0}={}){if(!e)return;const t=re===e;e.classList.remove("block"),e.classList.add("hidden"),Ga();const i=ua(e);_a(i),e.setAttribute("aria-hidden",Ve()?"false":"true"),a&&t&&i instanceof HTMLElement&&i.isConnected&&!Ve()&&window.requestAnimationFrame(()=>i.focus())}function Ct(e,a){if(!e||Ve())return;re&&re!==e&&pe(re,{restaurarFoco:!1}),e._disparadorMenu=a||ua(e),re=e,e.classList.remove("hidden"),e.classList.add("block"),e.setAttribute("aria-hidden","false"),ra=document.body.style.overflow,document.body.style.overflow="hidden",na=!0,Et(e._disparadorMenu),wt(),Va();const t=document.createElement("div");t.dataset.navOverlay="true",t.className="fixed inset-0 z-[190] bg-slate-950/55 backdrop-blur-[2px] lg:hidden",t.addEventListener("click",()=>pe(e),{once:!0}),document.body.appendChild(t),Ue=new AbortController,document.addEventListener("keydown",i=>{if(re!==e)return;if(i.key==="Escape"){i.preventDefault(),pe(e);return}if(i.key!=="Tab")return;const o=yt(e);if(!o.length){i.preventDefault();return}const r=o[0],s=o.at(-1);i.shiftKey&&document.activeElement===r?(i.preventDefault(),s.focus()):!i.shiftKey&&document.activeElement===s&&(i.preventDefault(),r.focus())},{signal:Ue.signal}),window.requestAnimationFrame(()=>{e.querySelector('[data-action="close-navBar"]')?.focus()})}function St(e,a){if(!e||!a)return;e.setAttribute("aria-expanded","false"),e.setAttribute("aria-controls","navBar"),a._disparadorMenu=e,ka(a),e.addEventListener("click",()=>Ct(a,e)),window.matchMedia(Ua).addEventListener("change",()=>{ka(a)}),window.addEventListener("hashchange",()=>{pe(a,{restaurarFoco:!1})})}function $t(e){if(!e)return;const a=e.querySelector('[data-action="close-navBar"]');a&&a.addEventListener("click",()=>pe(e))}const Mt="modulepreload",jt=function(e,a){return new URL(e,a).href},Aa={},R=function(a,t,i){let o=Promise.resolve();if(t&&t.length>0){let b=function(p){return Promise.all(p.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const s=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),d=n?.nonce||n?.getAttribute("nonce");o=b(t.map(p=>{if(p=jt(p,i),p in Aa)return;Aa[p]=!0;const u=p.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(i)for(let w=s.length-1;w>=0;w--){const A=s[w];if(A.href===p&&(!u||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Mt,u||(h.as="script"),h.crossOrigin="",h.href=p,d&&h.setAttribute("nonce",d),document.head.appendChild(h),u)return new Promise((w,A)=>{h.addEventListener("load",w),h.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${p}`)))})}))}function r(s){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s}return o.then(s=>{for(const n of s||[])n.status==="rejected"&&r(n.reason);return a().catch(r)})},Xe=""+new URL("sep-Cwhy6xJt.webp",import.meta.url).href,We=""+new URL("nat-DLA0z3s9.webp",import.meta.url).href,Ka=""+new URL("rad-DPyGQI76.webp",import.meta.url).href,pa=""+new URL("ant-CaQJkcIO.webp",import.meta.url).href,Ha=""+new URL("mar-DTryRO3A.webp",import.meta.url).href,Ye=""+new URL("marc-zOfB8o2m.webp",import.meta.url).href,je=""+new URL("jos-B-AHSXzJ.webp",import.meta.url).href,oe=[{img:Xe,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:We,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:Ka,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:pa,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:Ha,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:Ye,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:je,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}],ne=[{id:1,img:Xe,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:pa,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:We,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:Ye,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:je,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}],_e=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}],Y=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}],zt=Object.freeze([Object.freeze({id:"estadistica-descriptiva",titulo:"Estadística descriptiva",descripcion:"Media, mediana, variabilidad, cuartiles, asimetría, valores atípicos y gráficos exploratorios.",icono:"bx-bar-chart-alt-2",fondoIcono:"bg-[#e8f3f1]",colorIcono:"text-[#0f5b5d]",bordeIcono:"border-[#bdd8d2]",ruta:"calculadoraEstadisticaDescriptiva"}),Object.freeze({id:"comparacion-grupos",titulo:"Comparación de grupos",descripcion:"Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.",icono:"bx-group",fondoIcono:"bg-[#fbf4df]",colorIcono:"text-[#7a5711]",bordeIcono:"border-[#e9d69b]",ruta:"comparacionGrupos"}),Object.freeze({id:"correlacion-asociacion",titulo:"Correlación y asociación",descripcion:"Pearson, Spearman, Kendall y medidas de asociación para variables cuantitativas y categóricas.",icono:"bx-line-chart",fondoIcono:"bg-slate-100",colorIcono:"text-slate-800",bordeIcono:"border-slate-300",ruta:"correlacionAsociacion"}),Object.freeze({id:"cuestionarios-fiabilidad",titulo:"Cuestionarios y fiabilidad",descripcion:"Alfa de Cronbach, omega de McDonald, recodificación, análisis de ítems y diagnósticos.",icono:"bx-list-check",fondoIcono:"bg-[#fbf4df]",colorIcono:"text-[#7a5711]",bordeIcono:"border-[#e9d69b]",ruta:"calculadoraFiabilidadCuestionarios"}),Object.freeze({id:"evaluacion-educativa",titulo:"Evaluación educativa",descripcion:"Dificultad, discriminación, punto-biserial, KR-20, distractores y análisis de puntuaciones.",icono:"bx-edit-alt",fondoIcono:"bg-[#e8f3f1]",colorIcono:"text-[#0f5b5d]",bordeIcono:"border-[#bdd8d2]",ruta:"calculadoraEvaluacionEducativa"}),Object.freeze({id:"tamano-muestra",titulo:"Tamaño de muestra",descripcion:"Tamaño mínimo, potencia, pérdidas, población finita, efecto de diseño y análisis de sensibilidad.",icono:"bx-ruler",fondoIcono:"bg-slate-100",colorIcono:"text-slate-800",bordeIcono:"border-slate-300",ruta:"calculadoraTamanoMuestraPotencia"}),Object.freeze({id:"regresion",titulo:"Regresión",descripcion:"Modelos lineales, múltiples, logísticos y de conteo con inferencia, diagnóstico e interpretación guiada.",icono:"bx-trending-up",fondoIcono:"bg-[#e8f3f1]",colorIcono:"text-[#0f5b5d]",bordeIcono:"border-[#bdd8d2]",ruta:"regresionModelos"}),Object.freeze({id:"asistente-pruebas",titulo:"¿Qué prueba debo utilizar?",descripcion:"Asistente guiado para seleccionar el procedimiento más adecuado según el objetivo y el diseño.",icono:"bx-help-circle",fondoIcono:"bg-[#fbf4df]",colorIcono:"text-[#7a5711]",bordeIcono:"border-[#e9d69b]",ruta:"asistentePruebas"}),Object.freeze({id:"biblioteca-metodologica",titulo:"Biblioteca metodológica",descripcion:"Fichas buscables con supuestos, hipótesis, tamaños del efecto, reporte, alternativas y errores frecuentes.",icono:"bx-library",fondoIcono:"bg-slate-100",colorIcono:"text-slate-800",bordeIcono:"border-slate-300",ruta:"bibliotecaMetodologica"})]),we=Object.freeze({titulo:"Catálogo institucional de servicios profesionales y académicos",subtitulo:"Matemática aplicada y computacional | Estadística | Ciencia de datos | Educación | Innovación",lema:"Rigor matemático para investigar, enseñar y decidir mejor.",introduccion:"En Grupo El Kernel convertimos problemas complejos en soluciones verificables mediante matemática aplicada, computación científica, estadística, ciencia de datos y educación. Trabajamos con universidades, centros educativos, instituciones públicas, empresas y equipos de investigación, desde el diagnóstico y el diseño hasta la implementación, validación y transferencia de capacidades.",notaAlcance:"Cada solicitud se delimita antes de iniciar. Se validan el responsable técnico, la capacidad disponible, los aliados requeridos, los entregables, los tiempos, las tarifas y cualquier habilitación profesional o regulatoria aplicable."}),la=Object.freeze([{id:"todos",nombre:"Todos los servicios",rango:"1–20"},{id:"investigacion",nombre:"Investigación, tesis y producción científica",rango:"1–3"},{id:"matematica-datos",nombre:"Matemática aplicada, computación, datos y optimización",rango:"4–8"},{id:"riesgo-finanzas",nombre:"Riesgo, finanzas, economía y políticas públicas",rango:"9–11"},{id:"educacion",nombre:"Educación, posgrado y fortalecimiento académico",rango:"12–16"},{id:"tecnologia-transferencia",nombre:"Tecnología, soluciones sectoriales y transferencia",rango:"17–20"}]),Lt=Object.freeze([{titulo:"Rigor científico",descripcion:"Métodos explícitos, supuestos documentados, validación y revisión de calidad."},{titulo:"Soluciones a la medida",descripcion:"Cada intervención se adapta al problema, los datos, el sector y las capacidades del cliente."},{titulo:"Reproducibilidad",descripcion:"Código, datos, procedimientos y resultados organizados para poder verificarse y actualizarse."},{titulo:"Transferencia de capacidades",descripcion:"El servicio incluye formación, documentación y apropiación por parte del equipo usuario."},{titulo:"Interdisciplinariedad",descripcion:"La matemática se conecta con educación, finanzas, actuaría, economía, ciencia, tecnología e industria."},{titulo:"Confidencialidad y ética",descripcion:"Los proyectos pueden ejecutarse bajo acuerdos de confidencialidad y reglas de integridad académica."}]),Ja=Object.freeze(["Universidades, institutos superiores, centros de investigación y escuelas de posgrado.","Centros educativos de secundaria, redes escolares, distritos y organismos de formación docente.","Ministerios, ayuntamientos, entidades reguladoras, observatorios y organismos públicos.","Aseguradoras, administradoras de fondos, bancos, cooperativas, fintech y organizaciones financieras.","Empresas de servicios, industria, logística, energía, tecnología, consultoría y organizaciones sin fines de lucro.","Investigadores, docentes, estudiantes de posgrado, equipos técnicos y comunidades profesionales."]),It=Object.freeze([{numero:1,titulo:"Confidencialidad",descripcion:"acuerdos de confidencialidad, control de acceso, custodia y devolución o eliminación segura de información."},{numero:2,titulo:"Integridad académica",descripcion:"asesoría que fortalece el trabajo del autor sin suplantarlo, fabricar resultados ni encubrir plagio."},{numero:3,titulo:"Protección de datos",descripcion:"minimización, anonimización, documentación de permisos y uso proporcional de información sensible."},{numero:4,titulo:"Reproducibilidad",descripcion:"procedimientos, datos, versiones, código, parámetros y decisiones suficientemente documentados."},{numero:5,titulo:"Validación y control de calidad",descripcion:"revisión técnica, pruebas, sensibilidad, comparación y trazabilidad de cambios."},{numero:6,titulo:"Uso responsable de inteligencia artificial",descripcion:"supervisión humana, verificación, explicabilidad, seguridad y gestión de sesgos."},{numero:7,titulo:"Transferencia de capacidades",descripcion:"manuales, talleres, sesiones de entrega, acompañamiento y materiales reutilizables."},{numero:8,titulo:"Interdisciplinariedad",descripcion:"incorporación de expertos sectoriales cuando el problema requiera conocimiento clínico, jurídico, ingenieril, ambiental u otro."},{numero:9,titulo:"Accesibilidad e inclusión",descripcion:"materiales y procesos comprensibles para diversos perfiles y condiciones de aprendizaje."},{numero:10,titulo:"Cumplimiento profesional",descripcion:"dictámenes, firmas o certificaciones reguladas solo por profesionales con la habilitación correspondiente."}]),Pt=Object.freeze([{titulo:"Diagnóstico breve",descripcion:"evaluación inicial con hallazgos, prioridades y hoja de ruta."},{titulo:"Consultoría por producto",descripcion:"entrega definida: modelo, informe, programa, tablero, protocolo, software o plan."},{titulo:"Proyecto integral",descripcion:"trabajo por fases desde el diagnóstico hasta la implementación y transferencia."},{titulo:"Acompañamiento periódico",descripcion:"bolsa de horas o iguala para consultas, revisión, análisis y seguimiento."},{titulo:"Formación y talleres",descripcion:"cursos abiertos o cerrados, presenciales, virtuales o híbridos."},{titulo:"Co-desarrollo",descripcion:"equipo mixto con personal del cliente para construir y apropiarse de la solución."},{titulo:"Revisión experta independiente",descripcion:"dictamen técnico, validación de modelos, auditoría metodológica o evaluación externa."},{titulo:"Alianza institucional",descripcion:"programas, observatorios, laboratorios o agendas de largo plazo con gobernanza compartida."}]),Ea=Object.freeze([{numero:1,titulo:"Exploración",descripcion:"reunión inicial, contexto, necesidad, usuarios y decisión que debe apoyarse."},{numero:2,titulo:"Alcance",descripcion:"objetivos, preguntas, datos, entregables, exclusiones, cronograma y responsabilidades."},{numero:3,titulo:"Plan técnico",descripcion:"métodos, equipo, validación, riesgos, gestión de datos y criterios de aceptación."},{numero:4,titulo:"Ejecución",descripcion:"análisis, modelización, desarrollo, formación o diseño con entregas parciales."},{numero:5,titulo:"Validación",descripcion:"pruebas, revisión experta, sensibilidad, retroalimentación y correcciones."},{numero:6,titulo:"Entrega y transferencia",descripcion:"productos finales, documentación, capacitación y repositorios acordados."},{numero:7,titulo:"Seguimiento",descripcion:"medición de uso, resultados, mantenimiento, actualización o nueva fase."}]),Ca=Object.freeze([{numero:1,titulo:"Proyecto de investigación listo para postulación",descripcion:"Diagnóstico del problema, revisión de evidencia, formulación, metodología, cronograma, riesgos, indicadores, presupuesto conceptual y documento de convocatoria."},{numero:2,titulo:"Tesis con rigor metodológico y computacional",descripcion:"Ruta de trabajo, matriz de coherencia, diseño, análisis estadístico o matemático, revisión de código, interpretación, estructura, defensa y artículo derivado."},{numero:3,titulo:"Diseño integral de maestría o posgrado",descripcion:"Estudio de viabilidad, benchmarking, perfil, competencias, malla, sílabos, investigación, profesorado, reglamentos, indicadores y expediente técnico."},{numero:4,titulo:"Feria científica STEM institucional",descripcion:"Plan maestro, categorías, reglamento, rúbricas, banco de proyectos, formación de mentores y jurados, acompañamiento, evento y evaluación."},{numero:5,titulo:"Diplomado a la medida",descripcion:"Diagnóstico, diseño curricular, módulos, materiales, facilitadores, evaluación, certificación y reporte de resultados."},{numero:6,titulo:"Modelo actuarial o financiero con tablero",descripcion:"Preparación de datos, formulación, estimación, validación, escenarios, stress testing, visualización, manual técnico y transferencia."},{numero:7,titulo:"Solución de optimización y analítica",descripcion:"Mapeo del proceso, modelo de decisión, datos, algoritmo, piloto, comparación de escenarios, tablero y plan de implementación."},{numero:8,titulo:"Laboratorio u observatorio desde cero",descripcion:"Misión, líneas, gobernanza, procesos, tecnología, indicadores, portafolio, plan de lanzamiento, pilotos y acompañamiento inicial."}]),Dt=Object.freeze([{numero:1,id:"investigacion-y-proyectos",categoria:"investigacion",categoriaNombre:"Investigación, tesis y producción científica",titulo:"Investigación científica y gestión de I+D+i",tituloCorto:"Investigación y proyectos",resumen:"Formulamos, evaluamos y acompañamos proyectos de I+D+i, agendas, convocatorias, consorcios y sistemas de seguimiento.",descripcion:"Acompañamiento integral para transformar ideas y necesidades institucionales en proyectos rigurosos, financiables, ejecutables y evaluables.",subservicios:["Diagnóstico de capacidades de investigación: evaluación de líneas, talento, infraestructura, producción científica, brechas y oportunidades de colaboración","Formulación de problemas y preguntas: delimitación del objeto de estudio, preguntas, hipótesis, objetivos, variables y contribución esperada","Estados del arte y mapas de evidencia: búsquedas estructuradas, revisiones de alcance, análisis bibliométricos y detección de vacíos de conocimiento","Protocolos y planes metodológicos: diseño de fases, métodos, fuentes, instrumentos, cronogramas, indicadores, riesgos y estrategias de validación","Propuestas para fondos y convocatorias: redacción técnica, teoría de cambio, presupuesto conceptual, plan de trabajo, impacto, sostenibilidad y matriz de resultados","Agendas, líneas y portafolios de investigación: priorización temática y organización de proyectos de corto, mediano y largo plazo","Monitoreo y evaluación de proyectos: tableros de avance, hitos, indicadores, control de calidad, gestión de riesgos y evaluación de resultados","Redes, alianzas y consorcios: estructuración de equipos interdisciplinarios, roles, gobernanza, coordinación y acuerdos de colaboración","Planes de datos y reproducibilidad: organización de datos, diccionarios, versiones, scripts, trazabilidad, respaldo y documentación técnica","Evaluación científica externa: revisión por expertos de proyectos, productos, centros, líneas o programas de investigación"],entregables:"diagnósticos, protocolos, propuestas de financiamiento, matrices de marco lógico, agendas de investigación, informes de seguimiento y evaluaciones técnicas.",icono:"bx-grid-alt"},{numero:2,id:"tesis-e-investigacion-academica",categoria:"investigacion",categoriaNombre:"Investigación, tesis y producción científica",titulo:"Asesoría de tesis y trabajos de investigación",tituloCorto:"Tesis e investigación académica",resumen:"Orientamos tesis y trabajos científicos con rigor metodológico, matemático, estadístico y computacional, respetando la autoría.",descripcion:"Orientación ética y especializada para tesis de grado, maestría y doctorado, así como trabajos finales, monografías y proyectos de investigación aplicada.",subservicios:["Selección y delimitación del tema: conversión de un interés general en un problema viable, relevante y abordable","Coherencia entre problema, objetivos e hipótesis: revisión de alineación lógica, alcance y factibilidad","Diseño metodológico: elección justificada de enfoques cuantitativos, cualitativos, mixtos, teóricos, computacionales o experimentales","Muestreo e instrumentos: tamaño muestral, planes de selección, construcción, pilotaje, validez y confiabilidad","Modelización matemática y análisis estadístico: selección de modelos, supuestos, estimación, contraste, sensibilidad e interpretación","Programación, simulación y depuración: orientación y revisión de código en Python, R, MATLAB, Julia, Mathematica u otros entornos pertinentes","Interpretación y discusión de resultados: conexión de hallazgos con objetivos, literatura, limitaciones e implicaciones","Estructura y redacción académica: organización de capítulos, claridad argumental, consistencia terminológica, tablas, figuras y anexos","Preparación de defensa: guion, diapositivas, preguntas probables, simulación de sustentación y mejora de la comunicación oral","Conversión de tesis en publicación: selección de resultados publicables y adaptación a artículo, capítulo, ponencia o informe técnico"],entregables:"hojas de ruta, matrices de coherencia, protocolos, scripts comentados, informes de resultados, planes de defensa y manuscritos derivados. La asesoría no sustituye la autoría ni la responsabilidad académica del tesista.",icono:"bx-book-open"},{numero:3,id:"publicacion-cientifica",categoria:"investigacion",categoriaNombre:"Investigación, tesis y producción científica",titulo:"Publicación, edición y comunicación científica",tituloCorto:"Publicación científica",resumen:"Fortalecemos artículos, libros, informes, LaTeX, tablas, figuras, bibliografía y respuestas a revisores.",descripcion:"Servicios para elevar la calidad técnica, expositiva y editorial de productos científicos, sin alterar la autoría ni ocultar conflictos de interés.",subservicios:["Arquitectura de manuscritos: organización de artículos, capítulos, libros, notas técnicas, reportes y documentos de trabajo","Selección de revista o editorial: análisis de alcance, indexación, audiencia, políticas, tiempos, costos y señales de calidad","Edición científica y matemática: claridad, precisión, consistencia de símbolos, notación, definiciones, teoremas, algoritmos y demostraciones","Tablas, figuras y visualizaciones: rediseño para legibilidad, coherencia gráfica, comparabilidad y cumplimiento editorial","Maquetación en LaTeX y Word: plantillas, estilos, referencias cruzadas, ecuaciones, bibliografía y preparación de archivos finales","Gestión bibliográfica: depuración de referencias, normalización de estilos, DOI, bases de datos y control de correspondencia entre citas y lista final","Respuesta a revisores: matrices de cambios, cartas de respuesta y revisión de consistencia entre observaciones y modificaciones","Integridad y ética de publicación: autoría, originalidad, declaración de datos, conflictos, uso responsable de herramientas digitales y buenas prácticas","Revisión técnica bilingüe: control conceptual y terminológico en español e inglés, con coordinación de traducción especializada cuando proceda","Memorias y productos de eventos: edición de resúmenes, actas, proceedings, posters, presentaciones y colecciones temáticas"],entregables:"manuscritos editados, plantillas, cartas a revisores, gráficos publicables, bibliografías depuradas, posters, presentaciones y memorias.",icono:"bx-edit-alt"}]),Rt=Object.freeze([{numero:4,id:"modelizacion-y-simulacion",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Modelización matemática y simulación",tituloCorto:"Modelización y simulación",resumen:"Construimos modelos deterministas y estocásticos, ecuaciones diferenciales, escenarios y análisis de sensibilidad.",descripcion:"Construcción de representaciones matemáticas para comprender sistemas, comparar escenarios, estimar parámetros y apoyar decisiones.",subservicios:["Modelos deterministas: formulación de relaciones estructurales para fenómenos físicos, sociales, económicos, educativos o empresariales","Modelos estocásticos: incorporación explícita de incertidumbre, aleatoriedad, riesgo y variabilidad","Ecuaciones diferenciales ordinarias: modelos dinámicos continuos, sistemas acoplados, estabilidad, calibración y simulación","Ecuaciones diferenciales parciales: difusión, transporte, ondas, reacción-difusión y otros procesos espacio-temporales","Sistemas dinámicos y no lineales: equilibrios, bifurcaciones, estabilidad local, sensibilidad y comportamiento cualitativo","Problemas inversos y estimación de parámetros: identificación de parámetros a partir de observaciones y evaluación de identificabilidad","Análisis de sensibilidad e incertidumbre: cuantificación del efecto de supuestos, parámetros, datos y escenarios","Simulación Monte Carlo: propagación de incertidumbre, estimación de distribuciones y evaluación probabilística de resultados","Simulación de escenarios: comparación de políticas, estrategias, condiciones iniciales y eventos extremos","Calibración y validación: contraste del modelo con datos, métricas de ajuste, validación cruzada y análisis de robustez"],entregables:"modelos conceptuales y matemáticos, ecuaciones, supuestos, códigos de simulación, análisis de sensibilidad, escenarios y reportes de validación.",icono:"bx-atom"},{numero:5,id:"matematica-computacional",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Análisis numérico y matemática computacional",tituloCorto:"Matemática computacional",resumen:"Diseñamos y analizamos métodos numéricos, algoritmos iterativos, álgebra lineal, EDO, EDP y pruebas de rendimiento.",descripcion:"Diseño, análisis e implementación de métodos numéricos eficientes, estables y verificables para problemas científicos y tecnológicos.",subservicios:["Ecuaciones y sistemas no lineales: selección, diseño y comparación de métodos iterativos para raíces simples o múltiples","Métodos iterativos de alto orden: análisis de convergencia, eficiencia, estabilidad y experimentación computacional","Álgebra lineal numérica: sistemas lineales, factorizaciones, autovalores, condicionamiento, matrices dispersas y gran escala","Análisis matricial: propiedades espectrales, perturbaciones, normas, sensibilidad y estructuras especiales","Integración y diferenciación numérica: cuadraturas, aproximación de derivadas, interpolación y control de error","Resolución numérica de EDO y EDP: diferencias finitas, elementos finitos, métodos espectrales y esquemas adaptativos","Convergencia, estabilidad y error: demostraciones, estimaciones a priori y a posteriori, consistencia y robustez","Computación dispersa y alta dimensionalidad: reducción de memoria, precondicionamiento, paralelización y estrategias de escalamiento","Benchmarking de algoritmos: protocolos reproducibles, perfiles de rendimiento, análisis estadístico y comparación justa","Prototipos de computación científica: implementaciones documentadas para validar ideas, métodos y resultados"],entregables:"algoritmos, pruebas de convergencia, códigos, bancos de prueba, perfiles de rendimiento, documentación técnica y artículos metodológicos.",icono:"bx-calculator"},{numero:6,id:"optimizacion",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Optimización e investigación de operaciones",tituloCorto:"Optimización",resumen:"Resolvemos problemas de asignación, logística, planificación, portafolios, procesos y decisiones bajo restricciones.",descripcion:"Soluciones matemáticas para asignar recursos, reducir costos, mejorar rendimiento y elegir alternativas bajo restricciones.",subservicios:["Optimización lineal y no lineal: formulación de funciones objetivo, restricciones, condiciones de optimalidad y solución computacional","Optimización con y sin restricciones: métodos de Newton, cuasi-Newton, gradiente, penalización, barreras y estrategias híbridas","Optimización entera y combinatoria: decisiones discretas, selección, asignación, cobertura, empaquetamiento y diseño de redes","Optimización multiobjetivo: frentes de Pareto, ponderación, preferencias y análisis de compromisos","Optimización estocástica y robusta: decisiones bajo incertidumbre, escenarios y protección frente a variaciones","Ruteo, logística y programación: rutas, horarios, turnos, secuencias, transporte y distribución","Asignación de recursos: personal, presupuesto, aulas, equipos, inventarios, capacidad y prioridades","Optimización de portafolios y activos-pasivos: retorno, riesgo, liquidez, duración, restricciones y escenarios","Optimización de procesos y parámetros: calibración, diseño, control, experimentos y mejora del desempeño","Selección de solver y estrategia: comparación de algoritmos, ajuste de hiperparámetros, escalabilidad y validación de soluciones"],entregables:"modelos de decisión, formulaciones matemáticas, prototipos, soluciones computacionales, análisis de escenarios y tableros de recomendación.",icono:"bx-trending-up"},{numero:7,id:"estadistica-aplicada",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Estadística aplicada y metodología de la investigación",tituloCorto:"Estadística aplicada",resumen:"Diseñamos estudios, muestras e instrumentos; analizamos datos y entregamos informes reproducibles y comprensibles.",descripcion:"Apoyo integral para diseñar estudios, producir datos confiables y convertirlos en evidencia interpretada correctamente.",subservicios:["Diseño de estudios: planes observacionales, experimentales, cuasiexperimentales, longitudinales, transversales y mixtos","Muestreo y potencia estadística: marcos muestrales, tamaños de muestra, precisión, efecto mínimo detectable y estrategias de selección","Diseño y validación de instrumentos: escalas, cuestionarios, rúbricas, validez de contenido y constructo, confiabilidad y análisis de ítems","Calidad y preparación de datos: depuración, codificación, datos faltantes, atípicos, consistencia y diccionarios de variables","Análisis descriptivo y exploratorio: resúmenes, visualizaciones, asociaciones, patrones, segmentaciones y perfiles","Regresión y análisis multivariado: modelos lineales y generalizados, componentes, factores, clasificación, conglomerados y modelos mixtos","Series de tiempo y pronósticos: tendencia, estacionalidad, intervención, volatilidad y evaluación predictiva","Supervivencia y tiempo hasta evento: curvas, riesgos, censura, modelos proporcionales y análisis de duración","Métodos bayesianos y espaciales: inferencia con información previa, modelos jerárquicos y análisis georreferenciado","Informes y transferencia estadística: scripts reproducibles, interpretación no técnica, talleres y acompañamiento a equipos"],entregables:"planes de análisis, bases depuradas, scripts, tablas, gráficos, informes estadísticos, anexos metodológicos y sesiones de capacitación.",icono:"bx-bar-chart-alt-2"},{numero:8,id:"ciencia-de-datos-e-ia",categoria:"matematica-datos",categoriaNombre:"Matemática aplicada, computación, datos y optimización",titulo:"Ciencia de datos e inteligencia artificial",tituloCorto:"Ciencia de datos e IA",resumen:"Desarrollamos modelos predictivos, tableros, automatizaciones, aprendizaje automático y soluciones de inteligencia artificial responsable.",descripcion:"Diseño de soluciones basadas en datos para predicción, clasificación, segmentación, automatización y apoyo a la decisión.",subservicios:["Diagnóstico de madurez de datos: evaluación de fuentes, calidad, disponibilidad, procesos, capacidades y casos de uso prioritarios","Ingeniería y canalización de datos: integración, transformación, documentación y automatización de flujos analíticos","Tableros e inteligencia de negocio: indicadores, visualización interactiva, alertas y seguimiento de desempeño","Aprendizaje automático predictivo: regresión, clasificación, segmentación, recomendación y selección de variables","Aprendizaje profundo: redes neuronales para datos tabulares, imágenes, señales, secuencias y problemas de alta complejidad","Procesamiento de lenguaje natural: clasificación de textos, extracción de información, análisis temático y asistencia documental","Visión por computadora: clasificación, detección, segmentación y análisis de imágenes en proyectos pertinentes","Pronóstico, anomalías y fraude: detección temprana de patrones atípicos, riesgos, fallos o comportamientos sospechosos","Explicabilidad, equidad y validación: interpretación de modelos, sesgos, estabilidad, métricas y control de generalización","Despliegue y monitoreo de modelos: prototipos operativos, seguimiento de desempeño, actualización y transferencia al equipo usuario"],entregables:"auditorías de datos, modelos, notebooks, APIs o prototipos, tableros, documentación, métricas de validación y planes de operación.",icono:"bx-brain"}]),qt=Object.freeze([{numero:9,id:"actuaria-y-riesgo",categoria:"riesgo-finanzas",categoriaNombre:"Riesgo, finanzas, economía y políticas públicas",titulo:"Consultoría actuarial y gestión cuantitativa del riesgo",tituloCorto:"Actuaría y riesgo",resumen:"Analizamos mortalidad, siniestros, primas, reservas, pensiones, reaseguro, solvencia y activos-pasivos.",descripcion:"Modelos y análisis para seguros, pensiones, salud, beneficios y administración de riesgos biométricos y financieros.",subservicios:["Mortalidad, supervivencia y longevidad: construcción, comparación, graduación y proyección de tablas y curvas","Anualidades y factores actuariales: valoración bajo tasas, edades, contingencias y supuestos alternativos","Frecuencia y severidad de siniestros: modelos de conteo, distribuciones de pérdidas, colas y dependencia","Primas y reservas: modelos prospectivos y retrospectivos, sensibilidad y suficiencia bajo escenarios","Pensiones y beneficios: proyecciones de obligaciones, flujos, reemplazo, sostenibilidad y riesgo de longevidad","Capital, solvencia y pruebas de estrés: escenarios adversos, suficiencia de capital y mapas cuantitativos de riesgo","Reaseguro y retención: capas, deducibles, límites, impacto en volatilidad y evaluación de alternativas","Gestión de activos y pasivos: duración, inmunización, liquidez, brechas y escenarios de tasas","Estudios de experiencia y segmentación: comparación observado-esperado, credibilidad, perfiles y actualización de supuestos","Validación de modelos actuariales: revisión independiente de metodología, datos, código, supuestos, resultados y gobernanza"],entregables:"bases actuariales, curvas y tablas, modelos de pérdidas, proyecciones, stress tests, tableros de riesgo e informes de validación. Los dictámenes o firmas reguladas se emitirán solo mediante profesionales legalmente habilitados.",icono:"bx-check-shield"},{numero:10,id:"finanzas-y-econometria",categoria:"riesgo-finanzas",categoriaNombre:"Riesgo, finanzas, economía y políticas públicas",titulo:"Finanzas cuantitativas, econometría y analítica económica",tituloCorto:"Finanzas y econometría",resumen:"Construimos pronósticos, modelos de riesgo, scoring, portafolios, valoración y tableros económicos.",descripcion:"Herramientas para valorar, pronosticar y gestionar decisiones financieras, crediticias, macroeconómicas y empresariales.",subservicios:["Modelos econométricos: estimación causal o predictiva con datos transversales, panel, series de tiempo y variables instrumentales","Pronóstico macroeconómico y financiero: inflación, actividad, tasas, liquidez, demanda, ingresos y otros indicadores","Transmisión monetaria y precios: análisis de tasas, tipo de cambio, combustibles, costos y cadenas de propagación","Portafolios y medición de riesgo: retorno, volatilidad, correlación, diversificación, VaR, pérdida esperada y escenarios","Riesgo de crédito y scoring: probabilidad de incumplimiento, segmentación, pérdida esperada y monitoreo de cartera","Valoración y fijación de precios: flujos descontados, instrumentos, proyectos, productos y análisis de sensibilidad","Riesgo de mercado, liquidez y operación: métricas, límites, alertas, escenarios y mapas de exposición","Analítica para fintech, cooperativas y microfinanzas: segmentación, cobranza, inclusión, propensión y sostenibilidad","Pruebas de estrés y simulación financiera: choques de tasas, inflación, morosidad, tipo de cambio y condiciones macro","Tableros e inteligencia económica: sistemas de indicadores para seguimiento, comparación y decisión ejecutiva"],entregables:"modelos econométricos y financieros, pronósticos, matrices de riesgo, escenarios, tableros e informes ejecutivos con anexos técnicos.",icono:"bx-line-chart"},{numero:11,id:"politicas-publicas",categoria:"riesgo-finanzas",categoriaNombre:"Riesgo, finanzas, economía y políticas públicas",titulo:"Analítica para políticas públicas y desarrollo",tituloCorto:"Políticas públicas",resumen:"Creamos indicadores, evaluaciones de impacto, mapas, simulaciones y evidencia para decisiones públicas.",descripcion:"Aplicación de modelos, estadística y ciencia de datos para diseñar, focalizar, evaluar y comunicar políticas y programas.",subservicios:["Indicadores sociales y económicos: diseño, cálculo, validación, desagregación y seguimiento","Pobreza, desigualdad y distribución: índices, curvas, descomposición, concentración y análisis territorial","Evaluación de impacto: diseños experimentales y cuasiexperimentales, contrafactuales, costo-efectividad y sensibilidad","Planificación de servicios públicos: demanda, cobertura, capacidad, brechas y asignación de recursos","Análisis de precios y cadenas de transmisión: combustibles, alimentos, transporte, tarifas y repercusiones sectoriales","Analítica espacial y territorial: mapas, clusters, accesibilidad, desigualdades geográficas y priorización","Educación, empleo y protección social: trayectorias, resultados, vulnerabilidad, transición y focalización","Riesgo climático y de desastres: escenarios, exposición, vulnerabilidad y apoyo cuantitativo a la resiliencia","Simulación de políticas: comparación de alternativas, beneficiarios, costos, resultados y efectos distributivos","Notas de política y datos abiertos: síntesis ejecutiva, visualizaciones, tableros y productos para comunicación pública"],entregables:"índices, mapas, bases armonizadas, evaluaciones de impacto, simuladores, tableros, notas de política e informes de escenarios.",icono:"bx-grid-alt"}]),Tt=Object.freeze([Object.freeze({numero:12,id:"posgrados-y-maestrias",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Diseño de posgrados, maestrías y programas académicos",tituloCorto:"Posgrados y maestrías",resumen:"Diseñamos o rediseñamos programas, competencias, mallas, sílabos, reglamentos e indicadores de calidad.",descripcion:"Diseño o rediseño de ofertas formativas con pertinencia, rigor, coherencia curricular, viabilidad operativa y orientación a resultados.",subservicios:Object.freeze(["Estudios de necesidad y viabilidad: demanda, población objetivo, entorno profesional, recursos, sostenibilidad y diferenciación","Benchmarking nacional e internacional: comparación de planes, créditos, competencias, modalidades, investigación y tendencias","Perfil de ingreso, egreso y competencias: resultados de aprendizaje medibles y alineados con el campo profesional y científico","Malla y arquitectura curricular: secuencias, prerrequisitos, créditos, balance teórico-práctico e integración investigativa","Diseño de asignaturas y sílabos: propósitos, contenidos, estrategias, actividades, evaluación, bibliografía y recursos","Líneas de investigación y vinculación: articulación de proyectos, tesis, seminarios, prácticas y necesidades del entorno","Perfil y desarrollo del profesorado: requisitos, matriz docente, plan de capacitación y comunidades académicas","Normativas y procesos académicos: admisión, permanencia, tutoría, evaluación, tesis, graduación y aseguramiento de calidad","Diseño virtual, híbrido o presencial: experiencias, interacción, laboratorios, recursos y evaluación coherentes con la modalidad","Expediente de aprobación y mejora: documentación, evidencias, indicadores, evaluación periódica y apoyo a procesos de acreditación"]),entregables:"estudios de viabilidad, perfiles, mapas curriculares, sílabos, reglamentos, matrices docentes, expedientes técnicos y planes de evaluación.",icono:"bx-book-open"}),Object.freeze({numero:13,id:"diplomados-y-formacion-continua",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Diplomados, certificaciones y educación continua",tituloCorto:"Diplomados y formación continua",resumen:"Ofrecemos programas a la medida en estadística, investigación, matemática computacional, datos, finanzas, actuaría y STEM.",descripcion:"Programas modulares, actualizados y adaptables para universidades, empresas, colegios profesionales, instituciones públicas y centros educativos.",subservicios:Object.freeze(["Diseño integral de diplomados: diagnóstico, competencias, malla, módulos, evaluación, recursos, facilitadores y certificación","Estadística aplicada a la investigación: desde fundamentos y diseño hasta modelos multivariados y reportes reproducibles","Metodología, escritura y publicación científica: protocolos, análisis, redacción, LaTeX, visualización y respuesta editorial","Matemática computacional y métodos numéricos: programación científica, simulación, álgebra numérica, EDO, EDP y control de error","Optimización e investigación de operaciones: modelado, solvers, logística, planificación, métodos exactos y heurísticos","Ciencia de datos e inteligencia artificial: Python o R, aprendizaje automático, redes neuronales, visualización y validación","Finanzas cuantitativas y analítica actuarial: riesgo, series de tiempo, pérdidas, mortalidad, reservas, portafolios y stress testing","STEM y formación docente: aprendizaje basado en proyectos, modelización, ferias, evaluación y tecnología educativa","Herramientas para comunicación científica: LaTeX, Word avanzado, gestores bibliográficos, posters, presentaciones y repositorios","Capacitación a la medida: programas cerrados por sector, rol, nivel, problema y conjunto de datos institucional"]),entregables:"diseño curricular, materiales, guías, ejercicios, datasets, evaluaciones, rúbricas, sesiones formativas y reporte de resultados.",icono:"bx-group"}),Object.freeze({numero:14,id:"ferias-y-proyectos-stem",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Proyectos STEM, ferias científicas y cultura de innovación",tituloCorto:"Ferias y proyectos STEM",resumen:"Diseñamos ferias, clubes, campamentos, retos, bancos de proyectos, rúbricas y formación de mentores.",descripcion:"Creación de experiencias científicas que articulen matemática, ciencias, tecnología, ingeniería, datos y comunicación.",subservicios:Object.freeze(["Diseño de ferias científicas institucionales: propósito, alcance, calendario, categorías, roles, recursos, seguridad y comunicación","Reglamentos, rúbricas y criterios: estándares transparentes para originalidad, método, evidencia, prototipo, impacto y exposición","Formación de mentores y jurados: acompañamiento ético, evaluación consistente, retroalimentación y manejo de conflictos","Banco de proyectos STEM: ideas escalables por nivel educativo, tiempo, recursos y área temática","Aprendizaje basado en proyectos e indagación: secuencias que parten de problemas reales y culminan en productos verificables","Clubes, campamentos y semilleros: programas extracurriculares de matemática, ciencia, programación, datos y modelización","Olimpiadas, datatones y retos: competencias de resolución de problemas, modelización, análisis de datos y comunicación","Prototipado y simulación: uso de herramientas digitales, sensores, programación o modelado, con alianzas técnicas cuando sea necesario","Exhibición y divulgación: posters, pitches, demostraciones, guiones, stands y comunicación para públicos no especializados","Evaluación de impacto y continuidad: indicadores de participación, aprendizaje, equidad, calidad y seguimiento de proyectos destacados"]),entregables:"plan maestro de feria, reglamento, rúbricas, banco de proyectos, formación de mentores, materiales de difusión y evaluación de impacto.",icono:"bx-brain"}),Object.freeze({numero:15,id:"desarrollo-docente",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Formación, asesoría metodológica y diseño curricular para docentes",tituloCorto:"Desarrollo docente y diseño curricular",resumen:"Acompañamos a docentes e instituciones en didáctica, evaluación y tecnología; además diseñamos maestrías, posgrados y programas de asignaturas de educación superior.",descripcion:"Desarrollo profesional y acompañamiento curricular para docentes de secundaria y educación superior. El servicio integra formación, asesoría metodológica, diseño o rediseño de maestrías y posgrados, elaboración de programas de asignaturas y sílabos universitarios, evaluación del aprendizaje y mejora continua de la práctica docente.",subservicios:Object.freeze(["Diagnóstico de prácticas y necesidades: observación, encuestas, resultados de aprendizaje, recursos, brechas de desempeño y prioridades institucionales","Diseño y rediseño de maestrías y posgrados: apoyo a equipos académicos en perfiles, competencias, mallas, créditos, modalidad, investigación, evaluación y viabilidad","Diseño de programas de asignaturas de nivel superior: resultados de aprendizaje, contenidos, secuencias, metodologías, actividades, evaluación, bibliografía y recursos","Alineación curricular por competencias: articulación entre perfil de egreso, competencias, resultados, evidencias, rúbricas, créditos y criterios de aprobación","Metodología universitaria para áreas cuantitativas: diseño de clases, laboratorios, proyectos y evaluación en cálculo, álgebra, estadística, métodos numéricos y disciplinas afines","Didáctica de la matemática y las ciencias: razonamiento, representaciones, resolución de problemas, modelización, conexiones conceptuales y comunicación científica","Secuencias, unidades y aprendizaje basado en problemas o proyectos: situaciones auténticas, trabajo colaborativo, productos verificables, reflexión y transferencia","Evaluación del aprendizaje: bancos de ítems, rúbricas, pruebas diagnósticas, evaluación formativa, análisis de resultados y planes de cierre de brechas","Tecnología educativa, software y programación: CAS, simuladores, hojas de cálculo, Python, R, visualización y recursos para modalidades presenciales, híbridas o virtuales","Acompañamiento docente y mejora continua: observación de aula, coaching, retroalimentación, comunidades de práctica, inclusión, accesibilidad y planes de desarrollo profesoral"]),entregables:"diagnósticos, planes de desarrollo docente, estudios y expedientes curriculares, propuestas de maestrías o posgrados, mapas de competencias, programas de asignaturas y sílabos universitarios, unidades didácticas, rúbricas, bancos de evaluación, talleres, informes de observación y planes de mejora.",icono:"bx-check-shield"}),Object.freeze({numero:16,id:"inteligencia-academica",categoria:"educacion",categoriaNombre:"Educación, posgrado y fortalecimiento académico",titulo:"Evaluación, calidad e inteligencia académica",tituloCorto:"Inteligencia académica",resumen:"Evaluamos programas y resultados; diseñamos indicadores, alertas de deserción, tableros y planes de mejora.",descripcion:"Uso de evidencia para mejorar programas, docencia, permanencia estudiantil, investigación y gestión institucional.",subservicios:Object.freeze(["Evaluación de programas académicos: pertinencia, coherencia, resultados, recursos, eficiencia, satisfacción e impacto","Medición de resultados de aprendizaje: mapas de evidencias, instrumentos, estándares, análisis y planes de cierre de brechas","Retención, deserción y alerta temprana: modelos de riesgo, perfiles, factores asociados y estrategias de intervención","Tableros e indicadores académicos: matrícula, rendimiento, aprobación, titulación, docencia, investigación y vinculación","Encuestas y sistemas de retroalimentación: diseño, muestreo, análisis, segmentación y comunicación de hallazgos","Planificación de oferta y carga: secciones, horarios, aulas, demanda, capacidad y asignación docente","Desarrollo y evaluación del profesorado: necesidades, trayectorias, desempeño, capacitación e impacto","Analítica de investigación: producción, colaboración, visibilidad, líneas, proyectos, financiamiento e impacto","Evidencias para acreditación: matrices, trazabilidad, indicadores, repositorios y control de consistencia","Planes de mejora continua: prioridades, responsables, metas, indicadores, seguimiento y evaluación"]),entregables:"modelos de indicadores, tableros, instrumentos, informes de evaluación, sistemas de alerta y planes de mejora.",icono:"bx-bar-chart-alt-2"})]),Ot=Object.freeze([{numero:17,id:"software-cientifico",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Software científico, automatización y herramientas computacionales",tituloCorto:"Software científico",resumen:"Construimos prototipos, simuladores, paquetes, notebooks, aplicaciones analíticas y reportes automatizados.",descripcion:"Desarrollo de soluciones técnicas que convierten métodos matemáticos y analíticos en herramientas utilizables y transferibles.",subservicios:["Prototipos en lenguajes científicos: Python, R, Julia, MATLAB, Mathematica u otros, según el problema y el entorno","Calculadoras y simuladores: herramientas para escenarios, docencia, finanzas, riesgo, estadística y modelización","Tableros y aplicaciones analíticas: interfaces para explorar datos, indicadores, predicciones y recomendaciones","Bibliotecas, paquetes y APIs: encapsulamiento de algoritmos, documentación y reutilización en otros sistemas","Software de simulación: implementación de modelos dinámicos, estocásticos, numéricos o de optimización","Automatización de reportes: generación repetible de tablas, gráficos, diagnósticos y documentos","Notebooks reproducibles: integración de texto, ecuaciones, código, resultados y documentación","Optimización y refactorización de código: rendimiento, memoria, estabilidad, legibilidad, vectorización y pruebas","Documentación, pruebas y control de versiones: manuales, casos de prueba, repositorios y trazabilidad","Transferencia y mantenimiento: capacitación, entrega de código, protocolos de actualización y soporte acordado"],entregables:"código fuente, paquetes, notebooks, prototipos, tableros, manuales, pruebas, repositorios y sesiones de transferencia.",icono:"bx-calculator"},{numero:18,id:"soluciones-sectoriales",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Soluciones cuantitativas para empresas, industria y sector público",tituloCorto:"Soluciones sectoriales",resumen:"Aplicamos modelos y datos a demanda, inventarios, logística, calidad, mantenimiento, energía y gestión pública.",descripcion:"Aplicación de matemática, estadística y computación a problemas operativos, productivos, comerciales y de gestión.",subservicios:["Diagnóstico de procesos y datos: identificación de cuellos de botella, decisiones, fuentes, calidad y oportunidades analíticas","Pronóstico de demanda e inventarios: modelos, estacionalidad, incertidumbre, niveles de servicio y políticas de reposición","Logística y cadena de suministro: rutas, localización, distribución, capacidad, tiempos y costos","Optimización de producción y servicios: mezcla, secuenciación, turnos, capacidad, productividad y restricciones","Control estadístico de calidad: variación, cartas de control, capacidad, muestreo y mejora de procesos","Mantenimiento y confiabilidad: fallos, vida útil, disponibilidad, mantenimiento preventivo y priorización","Energía, ambiente y sostenibilidad: consumo, eficiencia, emisiones, escenarios y optimización de recursos","Aplicaciones sectoriales interdisciplinarias: agricultura, clima, salud, transporte u otras áreas junto con especialistas del dominio","Sistemas de apoyo a decisiones: integración de reglas, modelos, escenarios, indicadores y recomendaciones","Pruebas de concepto: pilotos controlados para demostrar viabilidad, valor, riesgos y requisitos de escalamiento"],entregables:"diagnósticos, modelos de proceso, pronósticos, soluciones de optimización, pilotos, tableros y planes de implementación.",icono:"bx-trending-up"},{numero:19,id:"eventos-y-transferencia",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Eventos científicos, redes y transferencia de conocimiento",tituloCorto:"Eventos y transferencia",resumen:"Organizamos congresos, escuelas, talleres, datatones, redes y productos de divulgación científica.",descripcion:"Diseño de espacios de intercambio, formación, colaboración y difusión que conecten academia, educación, empresa, Estado y sociedad.",subservicios:["Congresos, simposios y seminarios: concepto, programa, comités, convocatoria, revisión, logística académica y evaluación","Escuelas de verano e invierno: rutas intensivas de formación para estudiantes, docentes y profesionales","Talleres de investigación: problemas abiertos, métodos, datos, escritura, replicación y desarrollo de proyectos","Webinars, conferencias y clases magistrales: contenidos especializados para públicos académicos, profesionales o generales","Datatones, hackatones y competencias: retos, datos, reglas, mentoría, evaluación y productos","Memorias, actas y productos editoriales: resúmenes, proceedings, repositorios, números especiales y materiales de difusión","Redes nacionales e internacionales: identificación de aliados, agenda común, proyectos, movilidad y coautoría","Mesas universidad-empresa-Estado: traducción de necesidades en retos, proyectos y mecanismos de cooperación","Divulgación y alfabetización científica: contenidos, charlas, infografías, recursos y actividades para públicos diversos","Planes de transferencia e impacto: usuarios, adopción, propiedad intelectual, capacitación, indicadores y sostenibilidad"],entregables:"programas académicos, convocatorias, rúbricas, memorias, repositorios, materiales de divulgación, alianzas y planes de transferencia.",icono:"bx-group"},{numero:20,id:"laboratorios-y-observatorios",categoria:"tecnologia-transferencia",categoriaNombre:"Tecnología, soluciones sectoriales y transferencia",titulo:"Creación de laboratorios, observatorios y unidades de investigación",tituloCorto:"Laboratorios y observatorios",resumen:"Diseñamos unidades de investigación, laboratorios de datos, matemática computacional, STEM y observatorios sectoriales.",descripcion:"Diseño institucional de estructuras permanentes para producir conocimiento, prestar servicios, formar talento y sostener proyectos.",subservicios:["Oficinas de investigación y proyectos: procesos, cartera, convocatorias, seguimiento, ética, datos y apoyo a investigadores","Laboratorios de matemática computacional: líneas, infraestructura, software, proyectos, formación y servicios","Laboratorios de datos e inteligencia artificial: gobernanza, casos de uso, capacidades, plataformas y portafolio","Observatorios actuariales y financieros: indicadores, bases, metodologías, reportes, alertas y análisis de riesgo","Laboratorios de educación matemática y STEM: innovación didáctica, pilotaje, recursos, formación y evaluación","Observatorios sectoriales: educación, precios, empleo, productividad, desigualdad, ciencia, tecnología u otros temas","Gobernanza y modelo operativo: misión, estructura, roles, comités, procesos, alianzas y sostenibilidad","Infraestructura y ecosistema tecnológico: equipos, software, repositorios, seguridad, respaldo y acceso","Portafolio e indicadores de desempeño: servicios, proyectos, productos, usuarios, calidad, impacto y financiamiento","Puesta en marcha y evaluación: plan de lanzamiento, capacitación, pilotos, comunicación, seguimiento y mejora"],entregables:"modelos de gobernanza, manuales, mapas de procesos, portafolios, requerimientos tecnológicos, indicadores y planes de puesta en marcha.",icono:"bx-library"}]),ce=Object.freeze([...Dt,...Rt,...qt,...Tt,...Ot]),Sa=Object.freeze({"bx-bar-chart-alt-2":`
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
    `});function z(e,a="text-2xl"){const t=Sa[e]||Sa["bx-grid-alt"];return`
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.9"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="${a} h-[1em] w-[1em] shrink-0"
        >
            ${t}
        </svg>
    `}const Nt=""+new URL("isfodosu-campus-Dxbx_r-n.webp",import.meta.url).href,Ft=""+new URL("uasd-campus-B6v1rNpv.webp",import.meta.url).href,Ut=""+new URL("unapec-campus-DqZO-eEo.webp",import.meta.url).href,Bt=5e3,X=Object.freeze([Object.freeze({id:"isfodosu",sigla:"ISFODOSU",nombre:"Instituto Superior de Formación Docente Salomé Ureña",descripcion:"Formación docente, educación matemática e investigación educativa.",imagen:Nt,enlace:"https://www.isfodosu.edu.do/",alt:"Fachada del Instituto Superior de Formación Docente Salomé Ureña",ancho:1260,alto:790,posicion:"50% 46%"}),Object.freeze({id:"uasd",sigla:"UASD",nombre:"Universidad Autónoma de Santo Domingo",descripcion:"Ciencias básicas, optimización, matemática aplicada y colaboración interdisciplinaria.",imagen:Ft,enlace:"https://uasd.edu.do/",alt:"Edificio y estatua en el campus de la Universidad Autónoma de Santo Domingo",ancho:1758,alto:1284,posicion:"50% 42%"}),Object.freeze({id:"unapec",sigla:"UNAPEC",nombre:"Universidad APEC",descripcion:"Matemática aplicada, computación científica, docencia y proyectos de investigación.",imagen:Ut,enlace:"https://unapec.edu.do/",alt:"Entrada principal del campus de Universidad APEC",ancho:608,alto:342,posicion:"50% 50%"})]),ke=Object.freeze({anterior:`
        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"></path>
        </svg>
    `,siguiente:`
        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
        </svg>
    `,pausa:`
        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
            <path d="M7 5.75A1.75 1.75 0 0 1 8.75 4h.5A1.75 1.75 0 0 1 11 5.75v12.5A1.75 1.75 0 0 1 9.25 20h-.5A1.75 1.75 0 0 1 7 18.25V5.75Zm6 0A1.75 1.75 0 0 1 14.75 4h.5A1.75 1.75 0 0 1 17 5.75v12.5A1.75 1.75 0 0 1 15.25 20h-.5A1.75 1.75 0 0 1 13 18.25V5.75Z"></path>
        </svg>
    `,reproducir:`
        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
            <path d="M8.4 5.1a1.5 1.5 0 0 1 2.25-1.3l9 5.2a1.5 1.5 0 0 1 0 2.6l-9 5.2a1.5 1.5 0 0 1-2.25-1.3V5.1Z"></path>
        </svg>
    `,externo:`
        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 4h5v5"></path>
            <path d="m10 14 10-10"></path>
            <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5"></path>
        </svg>
    `});function le(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Vt(e,a){const t=a===0;return`
        <button
            type="button"
            role="tab"
            id="pestana-institucion-${le(e.id)}"
            aria-controls="panel-institucion-portada"
            aria-selected="${t}"
            aria-label="Mostrar ${le(e.nombre)}"
            tabindex="${t?"0":"-1"}"
            data-universidad-control
            data-indice="${a}"
            class="flex min-h-11 min-w-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-center text-xs font-black tracking-wide text-slate-600 transition duration-300 hover:border-[#0f5b5d]/40 hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 aria-selected:border-[#0f5b5d] aria-selected:bg-[#0f5b5d] aria-selected:text-white aria-selected:shadow-md sm:text-sm"
        >
            ${le(e.sigla)}
        </button>
    `}function _t(){const e=X[0],a=document.createElement("div");a.className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_22px_60px_-36px_rgba(7,24,32,0.42)]",a.setAttribute("role","region"),a.setAttribute("aria-label","Instituciones vinculadas al Grupo El Kernel"),a.setAttribute("aria-roledescription","carrusel"),a.innerHTML=`
        <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_minmax(19rem,0.88fr)]">
            <figure
                id="panel-institucion-portada"
                role="tabpanel"
                tabindex="0"
                aria-labelledby="pestana-institucion-${e.id}"
                data-universidad-escenario
                class="relative aspect-[3/2] min-h-[18rem] overflow-hidden bg-slate-900 outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#efc86f]/70 sm:min-h-[22rem] lg:aspect-auto lg:min-h-[31rem]"
            >
                <img
                    data-universidad-imagen-capa
                    data-institucion-id="${e.id}"
                    src="${e.imagen}"
                    alt="${le(e.alt)}"
                    width="${e.ancho}"
                    height="${e.alto}"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 motion-reduce:transition-none"
                    style="object-position: ${e.posicion}"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                />
                <img
                    data-universidad-imagen-capa
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 motion-reduce:transition-none"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                />

                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071820]/35 via-transparent to-[#071820]/20" aria-hidden="true"></div>

                <div class="absolute inset-x-3 top-3 z-10 flex items-start justify-between gap-2 sm:inset-x-4 sm:top-4">
                    <span class="rounded-full border border-white/25 bg-[#071820]/75 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-md sm:text-xs">
                        <span class="sm:hidden">Campus</span>
                        <span class="hidden sm:inline">Fotografía institucional</span>
                    </span>

                    <div class="flex items-center gap-2">
                        <span data-universidad-contador class="flex h-11 min-w-14 items-center justify-center rounded-full border border-white/25 bg-[#071820]/75 px-3 text-xs font-black text-white shadow-lg backdrop-blur-md">
                            01 / 03
                        </span>
                        <button
                            type="button"
                            data-action="universidad-anterior"
                            aria-label="Mostrar la institución anterior"
                            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071820]/75 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-[#071820] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#efc86f]/70"
                        >
                            ${ke.anterior}
                        </button>
                        <button
                            type="button"
                            data-action="universidad-siguiente"
                            aria-label="Mostrar la institución siguiente"
                            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071820]/75 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-[#071820] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#efc86f]/70"
                        >
                            ${ke.siguiente}
                        </button>
                    </div>
                </div>
            </figure>

            <div class="flex min-h-full flex-col p-5 sm:p-6 lg:p-8">
                <div class="flex-1">
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#805615]">Institución vinculada</p>
                    <p data-universidad-sigla class="mt-5 text-4xl font-black leading-none tracking-tight text-[#0f5b5d] sm:text-5xl">
                        ${le(e.sigla)}
                    </p>
                    <h3 data-universidad-nombre class="mt-3 text-xl font-black leading-tight text-slate-950 sm:text-2xl">
                        ${le(e.nombre)}
                    </h3>
                    <p data-universidad-descripcion class="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                        ${le(e.descripcion)}
                    </p>
                    <a
                        data-universidad-enlace
                        href="${e.enlace}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visitar el sitio institucional de ${le(e.sigla)}"
                        class="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#071820] px-4 py-2.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100"
                    >
                        Visitar institución
                        ${ke.externo}
                    </a>
                </div>

                <div class="mt-8 border-t border-slate-200 pt-5">
                    <div role="tablist" aria-label="Seleccionar institución" class="grid grid-cols-3 gap-2">
                        ${X.map(Vt).join("")}
                    </div>

                    <div class="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <button
                            type="button"
                            data-action="pausar-rotacion"
                            aria-pressed="false"
                            class="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-black text-slate-700 transition hover:border-[#0f5b5d]/30 hover:bg-emerald-50 hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 sm:self-auto"
                        >
                            <span data-universidad-icono-pausa>${ke.pausa}</span>
                            <span data-universidad-icono-reproducir class="hidden">${ke.reproducir}</span>
                            <span data-universidad-texto-rotacion>Pausar rotación</span>
                        </button>

                        <div class="min-w-0 flex-1 sm:max-w-32" aria-hidden="true">
                            <div class="h-1.5 overflow-hidden rounded-full bg-slate-200">
                                <div data-universidad-progreso class="h-full w-1/3 rounded-full bg-[#d5a54a] transition-[width] duration-500 motion-reduce:transition-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p data-universidad-estado class="sr-only" aria-live="polite" aria-atomic="true"></p>
    `;const t=[...a.querySelectorAll("[data-universidad-imagen-capa]")],i=a.querySelector("[data-universidad-sigla]"),o=a.querySelector("[data-universidad-nombre]"),r=a.querySelector("[data-universidad-descripcion]"),s=a.querySelector("[data-universidad-enlace]"),n=a.querySelector("[data-universidad-contador]"),d=a.querySelector("[data-universidad-estado]"),b=a.querySelector("[data-universidad-escenario]"),p=a.querySelector("[data-universidad-progreso]"),u=[...a.querySelectorAll("[data-universidad-control]")],f=a.querySelector("[data-action='universidad-anterior']"),h=a.querySelector("[data-action='universidad-siguiente']"),w=a.querySelector("[data-action='pausar-rotacion']"),A=a.querySelector("[data-universidad-icono-pausa]"),y=a.querySelector("[data-universidad-icono-reproducir]"),g=a.querySelector("[data-universidad-texto-rotacion]"),E=window.matchMedia("(prefers-reduced-motion: reduce)"),C=new AbortController,l={signal:C.signal};let m=0,c=0,x=0,v=null,k=null,D=null,M=!1,q=!1,P=!1,T=!1,Z=!1,B=!E.matches,H=typeof window.IntersectionObserver!="function";function me(j){return(j%X.length+X.length)%X.length}function ut(j){const S=t[c];if(S?.dataset.institucionId===j.id)return;const Q=c===0?1:0,F=t[Q],he=++x;let ha=!1;function ya(){ha||he!==x||!F.naturalWidth||(ha=!0,S.alt="",F.alt=j.alt,F.classList.remove("opacity-0"),F.classList.add("opacity-100"),S.classList.remove("opacity-100"),S.classList.add("opacity-0"),c=Q)}F.onload=ya,F.onerror=()=>{he===x&&F.removeAttribute("src")},F.alt="",F.width=j.ancho,F.height=j.alto,F.style.objectPosition=j.posicion,F.dataset.institucionId=j.id,F.src=j.imagen,F.complete&&F.naturalWidth&&window.requestAnimationFrame(ya)}function xa(){k!==null&&window.clearTimeout(k),H&&(k=window.setTimeout(()=>{const j=X[me(m+1)],S=new Image;S.decoding="async",S.src=j.imagen,k=null},700))}function ea(j=!1){const S=X[m];ut(S),i.textContent=S.sigla,o.textContent=S.nombre,r.textContent=S.descripcion,s.href=S.enlace,s.setAttribute("aria-label",`Visitar el sitio institucional de ${S.sigla}`),n.textContent=`${String(m+1).padStart(2,"0")} / ${String(X.length).padStart(2,"0")}`,b.setAttribute("aria-labelledby",`pestana-institucion-${S.id}`),p.style.width=`${(m+1)/X.length*100}%`,u.forEach((Q,F)=>{const he=F===m;Q.setAttribute("aria-selected",String(he)),Q.tabIndex=he?0:-1}),j&&(d.textContent=`${S.sigla}: ${S.nombre}`),xa()}function ee(){v!==null&&(window.clearInterval(v),v=null)}function pt(){return B&&H&&!document.hidden&&!q&&!P&&!T&&a.isConnected}function J(){ee(),pt()&&(v=window.setInterval(()=>{m=me(m+1),ea(!1)},Bt))}function aa(){const j=!B;w.setAttribute("aria-pressed",String(j)),w.setAttribute("aria-label",j?"Reanudar la rotación automática":"Pausar la rotación automática"),A.classList.toggle("hidden",j),y.classList.toggle("hidden",!j),g.textContent=j?"Reanudar rotación":"Pausar rotación"}function te(j,S=!0,Q=!1){m=me(j),ea(S),Q&&u[m]?.focus(),J()}f?.addEventListener("click",()=>te(m-1),l),h?.addEventListener("click",()=>te(m+1),l),w?.addEventListener("click",()=>{Z=!0,B=!B,aa(),B?(d.textContent="Rotación automática reanudada.",J()):(d.textContent="Rotación automática pausada.",ee())},l),u.forEach(j=>{j.addEventListener("click",()=>te(Number(j.dataset.indice)),l),j.addEventListener("keydown",S=>{S.key==="ArrowLeft"?(S.preventDefault(),te(m-1,!0,!0)):S.key==="ArrowRight"?(S.preventDefault(),te(m+1,!0,!0)):S.key==="Home"?(S.preventDefault(),te(0,!0,!0)):S.key==="End"&&(S.preventDefault(),te(X.length-1,!0,!0))},l)}),a.addEventListener("mouseenter",()=>{q=!0,ee()},l),a.addEventListener("mouseleave",()=>{q=!1,J()},l),a.addEventListener("focusin",()=>{P=!0,ee()},l),a.addEventListener("focusout",j=>{P=a.contains(j.relatedTarget),P||J()},l),b?.addEventListener("touchstart",j=>{D=j.changedTouches[0]?.clientX??null,T=!0,ee()},{...l,passive:!0}),b?.addEventListener("touchend",j=>{const S=j.changedTouches[0]?.clientX??null;if(T=!1,D!==null&&S!==null){const Q=S-D;Math.abs(Q)>45?te(m+(Q<0?1:-1)):J()}D=null},{...l,passive:!0}),b?.addEventListener("touchcancel",()=>{D=null,T=!1,J()},l),document.addEventListener("visibilitychange",()=>{document.hidden?ee():J()},l),E.addEventListener("change",()=>{Z||(B=!E.matches,aa()),B?J():ee()},l);const fa=typeof window.IntersectionObserver=="function"?new IntersectionObserver(j=>{H=j.some(S=>S.isIntersecting&&S.intersectionRatio>=.15),H?(xa(),J()):ee()},{threshold:[0,.15,.5]}):null;fa?.observe(a);const va=new MutationObserver(()=>{if(a.isConnected){M||(M=!0,J());return}M&&(ee(),k!==null&&window.clearTimeout(k),C.abort(),fa?.disconnect(),va.disconnect())});return va.observe(document.body,{childList:!0,subtree:!0}),ea(!1),aa(),a}function Ie(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Pe(e,a,t=""){return`
        <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center"${t?` title="${Ie(t)}" aria-label="${Ie(`${e} ${a}. ${t}.`)}"`:""}>
            <p class="text-2xl font-black text-white md:text-3xl">${Ie(e)}</p>
            <p class="mt-1 text-xs font-semibold leading-tight text-slate-300">${Ie(a)}</p>
        </div>
    `}function Gt({integrantes:e,servicios:a,lineas:t,publicaciones:i}){const o=document.createElement("section");return o.className="mx-4 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg sm:mx-6 lg:mx-8 xl:mx-10",o.setAttribute("aria-labelledby","titulo-confianza-portada"),o.innerHTML=`
        <header class="p-5 md:p-7">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#805615]">Vinculación institucional</p>
            <h2 id="titulo-confianza-portada" class="mt-2 max-w-4xl text-2xl font-black leading-tight text-slate-950 md:text-3xl">
                Instituciones presentes en nuestra trayectoria científica
            </h2>
            <p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                Estas instituciones forman parte de la trayectoria, las afiliaciones y los proyectos de nuestros investigadores.
            </p>
        </header>

        <div class="grid grid-cols-1 border-t border-slate-200 xl:grid-cols-[minmax(0,1.45fr)_minmax(19rem,0.55fr)]">
            <div data-carrusel-institucional class="min-w-0 p-5 md:p-7"></div>

            <aside class="bg-[#071820] p-5 text-white md:p-7" aria-label="Indicadores y principios de confianza">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#d7a955]">Capacidad institucional</p>
                <div class="mt-4 grid grid-cols-2 gap-3">
                    ${Pe(e,"Integrantes","Miembros nacionales e internacionales del Grupo El Kernel")}
                    ${Pe(a,"Áreas de servicio")}
                    ${Pe(t,"Líneas de investigación")}
                    ${Pe(i,"Artículos científicos acumulados","Producción de los 9 integrantes a lo largo de sus trayectorias académicas")}
                </div>
                <div class="mt-5 flex flex-wrap gap-2" aria-label="Principios de trabajo">
                    ${["Confidencialidad","Reproducibilidad","Transferencia"].map(r=>`
                        <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-200">${r}</span>
                    `).join("")}
                </div>
            </aside>
        </div>
    `,o.querySelector("[data-carrusel-institucional]")?.replaceWith(_t()),o}const Kt="kernel-services-filter",Ht=Object.freeze([Object.freeze({titulo:"Investigación y producción científica",descripcion:"Proyectos de I+D+i, tesis, publicación, edición y comunicación científica.",icono:"bx-book-open",categoria:"investigacion"}),Object.freeze({titulo:"Estadística y metodología",descripcion:"Diseño de estudios, muestreo, instrumentos, análisis e informes reproducibles.",icono:"bx-bar-chart-alt-2",categoria:"matematica-datos"}),Object.freeze({titulo:"Matemática computacional y optimización",descripcion:"Modelización, simulación, métodos numéricos, algoritmos y decisiones bajo restricciones.",icono:"bx-atom",categoria:"matematica-datos"}),Object.freeze({titulo:"Ciencia de datos, IA y software científico",descripcion:"Modelos predictivos, tableros, automatización, prototipos y transferencia tecnológica.",icono:"bx-grid-alt",categoria:"tecnologia-transferencia"}),Object.freeze({titulo:"Educación, posgrado y diseño curricular",descripcion:"Maestrías, programas académicos, sílabos, formación docente, evaluación y calidad.",icono:"bx-group",categoria:"educacion"}),Object.freeze({titulo:"Riesgo, finanzas y soluciones sectoriales",descripcion:"Actuaría, econometría, políticas públicas, logística, industria y apoyo a decisiones.",icono:"bx-trending-up",categoria:"riesgo-finanzas"})]),Jt=Object.freeze([1,7,12,15]);function ve(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Qt(e){const a=la.find(t=>t.id===e.categoria);return`
        <a
            href="#/servicios"
            data-resumen-filtro="${ve(e.categoria)}"
            class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f5b5d]/30 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 md:p-6"
        >
            <span class="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-[#0f5b5d] transition-transform group-hover:scale-110">
                ${z(e.icono,"text-3xl")}
            </span>
            <h3 class="mt-5 text-xl font-black leading-tight text-slate-950">${ve(e.titulo)}</h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">${ve(e.descripcion)}</p>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f5b5d]">
                Explorar ${ve(a?.rango||"servicios")}
                ${z("bx-right-arrow-alt","text-xl")}
            </span>
        </a>
    `}function Xt(e){return`
        <article class="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:p-6">
            <div class="flex items-start justify-between gap-4">
                <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d5a54a]/30 bg-[#d5a54a]/10 text-[#efc86f]">
                    ${z(e.icono,"text-2xl")}
                </span>
                <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black text-slate-300">${String(e.numero).padStart(2,"0")}</span>
            </div>
            <h3 class="mt-5 text-xl font-black leading-tight text-white">${ve(e.tituloCorto)}</h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-300">${ve(e.resumen)}</p>
            <a href="#/servicios" class="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#efc86f] hover:text-white">
                Ver alcance y entregables
                ${z("bx-right-arrow-alt","text-xl")}
            </a>
        </article>
    `}function Wt(){const e=document.createElement("section");e.id="servicios-portada",e.className="mx-4 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-lg sm:mx-6 lg:mx-8 xl:mx-10",e.setAttribute("aria-labelledby","titulo-servicios-portada");const a=Jt.map(t=>ce.find(i=>i.numero===t)).filter(Boolean);return e.innerHTML=`
        <div class="px-5 py-10 md:px-8 md:py-14 xl:px-10">
            <div class="grid grid-cols-1 gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                    <p class="text-sm font-black uppercase tracking-[0.18em] text-[#805615]">Servicios profesionales y académicos</p>
                    <h2 id="titulo-servicios-portada" class="mt-3 max-w-4xl text-3xl font-black leading-tight text-slate-950 md:text-5xl">Capacidades organizadas para resolver necesidades concretas</h2>
                    <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">La portada presenta las capacidades principales. El catálogo completo reúne 20 áreas con alcance técnico, componentes, entregables, modalidades y principios de trabajo.</p>
                </div>
                <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
                    <a href="#/servicios" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-5 py-3.5 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0a4648] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                        Ver los 20 servicios
                        ${z("bx-right-arrow-alt","text-xl")}
                    </a>
                    <a href="#/diagnosticoServicios" class="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c38d36] bg-white px-5 py-3.5 font-black text-[#805615] transition hover:bg-amber-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-100">
                        Solicitar diagnóstico
                        ${z("bx-check-shield","text-xl")}
                    </a>
                </div>
            </div>

            <div class="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                ${Ht.map(Qt).join("")}
            </div>
        </div>

        <div class="bg-[#071820] px-5 py-10 text-white md:px-8 md:py-12 xl:px-10">
            <div class="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Servicios destacados</p>
                    <h2 class="mt-2 text-2xl font-black md:text-4xl">Cuatro puertas de entrada al catálogo</h2>
                </div>
                <p class="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">Cada solicitud se delimita antes de iniciar; el alcance, responsables, aliados, entregables, calendario y tarifa se definen después del diagnóstico.</p>
            </div>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                ${a.map(Xt).join("")}
            </div>
        </div>
    `,e.addEventListener("click",t=>{const i=t.target.closest("[data-resumen-filtro]");if(!(!i||!e.contains(i)))try{window.sessionStorage.setItem(Kt,i.dataset.resumenFiltro||"todos")}catch(o){console.warn("[Kernel] No fue posible conservar el filtro del catálogo.",o)}}),e}const Qa=Object.freeze([Object.freeze({numero:"01",titulo:"Diagnóstico",descripcion:"Comprendemos la necesidad, el contexto, los usuarios, los datos y la decisión que debe apoyarse."}),Object.freeze({numero:"02",titulo:"Alcance y plan técnico",descripcion:"Definimos objetivos, productos, métodos, responsabilidades, riesgos, calendario y criterios de aceptación."}),Object.freeze({numero:"03",titulo:"Ejecución por fases",descripcion:"Desarrollamos el análisis, diseño, modelización, formación o solución con entregas parciales verificables."}),Object.freeze({numero:"04",titulo:"Validación",descripcion:"Aplicamos pruebas, revisión experta, sensibilidad, control de calidad y retroalimentación documentada."}),Object.freeze({numero:"05",titulo:"Entrega y transferencia",descripcion:"Entregamos productos, documentación, capacitación y una ruta de seguimiento o actualización."})]),Yt=Object.freeze([Object.freeze({tipo:"Universidad y posgrado",titulo:"Diseño integral de una maestría y sus programas de asignatura",problema:"Una institución necesita crear o rediseñar una oferta de posgrado con coherencia curricular y viabilidad.",intervencion:"Estudio de necesidad, benchmarking, perfil, competencias, malla, sílabos, reglamentos, indicadores y expediente técnico.",producto:"Propuesta curricular completa y plan de evaluación para aprobación institucional.",icono:"bx-book-open"}),Object.freeze({tipo:"Investigación aplicada",titulo:"Diseño metodológico y plan estadístico para un estudio",problema:"Un equipo requiere justificar muestra, instrumentos, variables y procedimientos de análisis.",intervencion:"Matriz de coherencia, muestreo, potencia, validación de instrumentos, plan analítico y criterios de reporte.",producto:"Protocolo reproducible, memoria de cálculo y orientaciones para interpretar resultados.",icono:"bx-bar-chart-alt-2"}),Object.freeze({tipo:"Empresa o institución pública",titulo:"Optimización de recursos y tablero de decisión",problema:"La organización necesita reducir costos, asignar recursos o comparar escenarios bajo restricciones.",intervencion:"Mapeo del proceso, formulación matemática, algoritmo, piloto, análisis de sensibilidad y validación con usuarios.",producto:"Modelo de decisión, prototipo computacional, tablero y plan de implementación.",icono:"bx-trending-up"})]);function ue(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Zt(e,a){return`
        <li class="relative flex gap-4 pb-7 last:pb-0">
            ${a<Qa.length-1?'<span class="absolute left-5 top-10 h-[calc(100%-1rem)] w-px bg-emerald-200" aria-hidden="true"></span>':""}
            <span class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f5b5d] text-xs font-black text-white shadow-md">${e.numero}</span>
            <div class="pt-0.5">
                <h3 class="text-lg font-black text-slate-950">${ue(e.titulo)}</h3>
                <p class="mt-1 text-sm leading-relaxed text-slate-600 md:text-base">${ue(e.descripcion)}</p>
            </div>
        </li>
    `}function ei(e){return`
        <article class="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div class="flex items-center justify-between gap-4">
                <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-[#9a671d] ring-1 ring-amber-200">
                    ${z(e.icono,"text-2xl")}
                </span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">Ejemplo ilustrativo</span>
            </div>
            <p class="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#0f5b5d]">${ue(e.tipo)}</p>
            <h3 class="mt-2 text-xl font-black leading-tight text-slate-950">${ue(e.titulo)}</h3>
            <dl class="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                    <dt class="font-black text-slate-950">Necesidad</dt>
                    <dd class="mt-1 text-slate-600">${ue(e.problema)}</dd>
                </div>
                <div>
                    <dt class="font-black text-slate-950">Intervención posible</dt>
                    <dd class="mt-1 text-slate-600">${ue(e.intervencion)}</dd>
                </div>
                <div>
                    <dt class="font-black text-slate-950">Producto esperado</dt>
                    <dd class="mt-1 text-slate-600">${ue(e.producto)}</dd>
                </div>
            </dl>
        </article>
    `}function ai(){const e=document.createElement("section");return e.className="mx-4 grid grid-cols-1 gap-6 sm:mx-6 lg:mx-8 xl:mx-10 2xl:grid-cols-[0.72fr_1.28fr]",e.setAttribute("aria-label","Proceso de trabajo y ejemplos de aplicación"),e.innerHTML=`
        <article class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#805615]">Cómo trabajamos</p>
            <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">De la necesidad a una solución verificable</h2>
            <p class="mt-4 leading-relaxed text-slate-600">El proceso completo tiene siete etapas en el catálogo; en la portada se resume en cinco momentos que facilitan la comprensión y la contratación.</p>
            <ol class="mt-7">
                ${Qa.map(Zt).join("")}
            </ol>
            <a href="#/diagnosticoServicios" class="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-5 py-3.5 font-black text-white shadow-md hover:bg-[#0a4648] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                Iniciar diagnóstico
                ${z("bx-right-arrow-alt","text-xl")}
            </a>
        </article>

        <div>
            <div class="mb-6">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#805615]">Aplicaciones demostrativas</p>
                <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Ejemplos de cómo puede estructurarse un proyecto</h2>
                <p class="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">Estos escenarios son ilustrativos y no se presentan como casos de clientes. Su propósito es mostrar la relación entre necesidad, intervención y producto verificable.</p>
            </div>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 2xl:grid-cols-1 3xl:grid-cols-3">
                ${Yt.map(ei).join("")}
            </div>
        </div>
    `,e}function W(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ti(e){const a=String(e?.DOI||e?.doi||"").trim().toLowerCase();return a||[e?.year||"",e?.title||e?.journal||e?.tile||"",e?.contenido||e?.articleTitle||""].join("-").trim().toLowerCase()}function ii(){const e=new Set;return ne.forEach(a=>{(a.publicaciones||[]).forEach(t=>{const i=ti(t);i&&e.add(i)})}),e.size}function ge(e,a,t){return`
        <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div class="flex items-start gap-3">
                <span class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d8a64f]/25 bg-[#d8a64f]/10 text-[#f0c76f]">
                    ${z(t,"text-xl")}
                </span>
                <div>
                    <h3 class="font-black text-white">${W(e)}</h3>
                    <p class="mt-1 text-sm leading-relaxed text-slate-300">${W(a)}</p>
                </div>
            </div>
        </article>
    `}function oi(e,a){return`
        <article class="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl md:p-6">
            <div class="flex items-center justify-between gap-4">
                <span class="flex h-11 min-w-11 items-center justify-center rounded-xl bg-emerald-50 px-3 text-sm font-black text-[#0f5b5d] ring-1 ring-emerald-200">${String(a+1).padStart(2,"0")}</span>
                <span class="text-xs font-black uppercase tracking-widest text-slate-600">Línea de investigación</span>
            </div>
            <h3 class="mt-5 text-xl font-black leading-tight text-slate-950">${W(String(e.title||"").trim())}</h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">${W(e.desarrollo)}</p>
        </article>
    `}function si(e){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-wrap gap-2">
                <span class="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-900">${W(e.convocatoria)}</span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">${W(e.institucion)}</span>
            </div>
            <h3 class="mt-4 text-xl font-black leading-tight text-slate-950">${W(e.title)}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">${W(e.enfoque)}</p>
            <p class="mt-4 text-xs font-black uppercase tracking-widest text-[#0f5b5d]">${W(e.estado)}</p>
        </article>
    `}function ri(){return zt.map(e=>`
        <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-100">
            <span class="text-[#efc86f]">${z(e.icono,"text-base")}</span>
            ${W(e.titulo)}
        </span>
    `).join("")}function ni(){return`
        <section class="mx-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:mx-6 md:p-8 lg:mx-8 xl:mx-10" aria-labelledby="titulo-actividad-portada">
            <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#805615]">Comunidad digital</p>
                    <h2 id="titulo-actividad-portada" class="mt-2 text-2xl font-black text-slate-950 md:text-3xl">Actividad del sitio</h2>
                </div>
                <p id="analytics-actualizado" class="text-sm text-slate-500">Cargando estadísticas…</p>
            </div>
            <div class="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                ${[["analytics-total","Visitantes totales"],["analytics-hoy","Visitantes hoy"],["analytics-semana","Últimos 7 días"],["analytics-mes","Últimos 30 días"]].map(([a,t])=>`
                    <article class="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                        <p id="${a}" class="text-2xl font-black text-slate-950 md:text-3xl">—</p>
                        <p class="mt-1 text-xs font-semibold text-slate-500 md:text-sm">${t}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `}function li(){const e=ii(),a=document.createElement("section");return a.className="w-full space-y-10 bg-white pb-10 font-sans",a.innerHTML=`
        <header class="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#06141a] text-white">
            <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"></div>
            <div class="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#b37a2a]/15 blur-3xl"></div>

            <div class="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1600px] grid-cols-1 gap-10 px-5 py-10 md:px-8 md:py-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-center xl:px-12">
                <div>
                    <div class="flex items-center gap-4">
                        <div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white p-2 shadow-xl md:h-24 md:w-24">
                            <img src="${ze}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" loading="eager" />
                        </div>
                        <div>
                            <p class="text-xs font-black uppercase tracking-[0.24em] text-[#efc86f] md:text-sm">Grupo de Investigación El Kernel</p>
                            <p class="mt-1 text-lg font-bold text-slate-200">Matemática aplicada, computación científica y educación</p>
                            <p class="mt-1 text-sm text-slate-400">República Dominicana</p>
                        </div>
                    </div>

                    <p class="mt-8 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-100">Servicios científicos y académicos con orientación práctica</p>
                    <h1 class="mt-5 max-w-5xl text-4xl font-black leading-[1.03] text-white md:text-6xl 2xl:text-7xl">Soluciones cuantitativas para investigar, enseñar y decidir mejor</h1>
                    <p class="mt-6 max-w-3xl text-base leading-relaxed text-slate-200 md:text-xl">Convertimos problemas complejos en soluciones verificables mediante matemática aplicada, estadística, ciencia de datos, computación científica, investigación y educación.</p>

                    <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a href="#/diagnosticoServicios" class="inline-flex items-center justify-center gap-3 rounded-xl bg-[#d5a54a] px-6 py-4 font-black text-[#06141a] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#efc86f] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200">
                            ${z("bx-check-shield","text-2xl")}
                            Solicitar diagnóstico
                        </a>
                        <a href="#/servicios" class="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
                            ${z("bx-grid-alt","text-2xl")}
                            Explorar servicios
                        </a>
                        <a href="#/laboratorioKernel" class="inline-flex items-center justify-center gap-2 px-3 py-4 font-black text-emerald-200 hover:text-white">
                            Laboratorio Inteligente
                            ${z("bx-right-arrow-alt","text-xl")}
                        </a>
                    </div>

                    <div class="mt-8 flex flex-wrap gap-2" aria-label="Principios de confianza">
                        ${["Confidencialidad","Reproducibilidad","Validación","Transferencia de capacidades"].map(i=>`
                            <span class="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200">${i}</span>
                        `).join("")}
                    </div>
                </div>

                <aside class="rounded-[2rem] border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-md md:p-7" aria-label="Capacidades principales del grupo">
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Qué podemos resolver</p>
                    <h2 class="mt-2 text-3xl font-black leading-tight text-white">De la investigación a la implementación y la transferencia</h2>
                    <div class="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                        ${ge("Investigación y tesis","Formulación, metodología, análisis y producción científica.","bx-book-open")}
                        ${ge("Estadística y datos","Diseño de estudios, instrumentos, modelos y tableros.","bx-bar-chart-alt-2")}
                        ${ge("Matemática computacional","Modelización, métodos numéricos, simulación y optimización.","bx-atom")}
                        ${ge("Educación y currículo","Maestrías, programas de asignatura, evaluación y formación docente.","bx-group")}
                        ${ge("Software científico","Prototipos, calculadoras, automatización y herramientas reproducibles.","bx-grid-alt")}
                        ${ge("Riesgo y decisiones","Actuaría, finanzas, políticas públicas y soluciones sectoriales.","bx-trending-up")}
                    </div>
                    <div class="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5">
                        <p class="font-black text-emerald-100">Una solicitud, un alcance verificable</p>
                        <p class="mt-2 text-sm leading-relaxed text-slate-300">El responsable técnico, los aliados, los entregables, el calendario y la tarifa se determinan después del diagnóstico inicial.</p>
                    </div>
                </aside>
            </div>
        </header>

        <div data-franja-institucional></div>
        <div data-resumen-servicios></div>
        <div data-proceso-aplicaciones></div>

        <section class="mx-4 overflow-hidden rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl sm:mx-6 md:px-10 md:py-12 lg:mx-8 xl:mx-10" aria-labelledby="titulo-laboratorio-portada">
            <div class="grid grid-cols-1 gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:items-center">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Plataforma científica del grupo</p>
                    <h2 id="titulo-laboratorio-portada" class="mt-3 text-3xl font-black leading-tight md:text-5xl">Laboratorio Inteligente de Investigación</h2>
                    <p class="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">Herramientas para aprender, seleccionar y aplicar procedimientos estadísticos con asistentes guiados, calculadoras, interpretación metodológica y biblioteca integrada.</p>
                    <a href="#/laboratorioKernel" class="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-black text-[#071820] shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50">
                        Acceder al laboratorio
                        ${z("bx-right-arrow-alt","text-2xl")}
                    </a>
                </div>
                <div class="flex flex-wrap gap-3">${ri()}</div>
            </div>
        </section>

        <section class="mx-4 sm:mx-6 lg:mx-8 xl:mx-10" aria-labelledby="titulo-lineas-portada">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="text-sm font-black uppercase tracking-[0.18em] text-[#805615]">Base científica</p>
                    <h2 id="titulo-lineas-portada" class="mt-2 text-3xl font-black text-slate-950 md:text-5xl">Líneas de investigación destacadas</h2>
                    <p class="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">La portada muestra una selección; la página de investigación conserva las nueve líneas completas.</p>
                </div>
                <a href="#/lineas" class="inline-flex items-center gap-2 font-black text-[#0f5b5d] hover:text-[#083f40]">Explorar las nueve líneas ${z("bx-right-arrow-alt","text-xl")}</a>
            </div>
            <div class="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                ${Y.slice(0,3).map(oi).join("")}
            </div>
        </section>

        <section class="mx-4 grid grid-cols-1 gap-6 sm:mx-6 lg:mx-8 xl:mx-10 2xl:grid-cols-[1.1fr_0.9fr]" aria-label="Proyectos, equipo y producción científica">
            <div>
                <div class="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#805615]">Proyección científica</p>
                        <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Propuestas de investigación</h2>
                    </div>
                    <a href="#/proyectos" class="hidden font-black text-[#0f5b5d] hover:text-[#083f40] sm:inline-flex sm:items-center sm:gap-2">Ver proyectos ${z("bx-right-arrow-alt","text-xl")}</a>
                </div>
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">${_e.slice(0,2).map(si).join("")}</div>
            </div>

            <aside class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#805615]">Equipo especializado</p>
                <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Conocimiento académico conectado con problemas reales</h2>
                <p class="mt-4 leading-relaxed text-slate-600">El grupo reúne experiencia en métodos numéricos, EDPs, optimización, álgebra, estadística, educación matemática, diseño curricular y desarrollo de herramientas científicas.</p>
                <div class="mt-6 grid grid-cols-2 gap-3">
                    <div class="rounded-2xl bg-white p-4 ring-1 ring-slate-200"><p class="text-3xl font-black text-[#0f5b5d]">${oe.length}</p><p class="mt-1 text-sm font-semibold text-slate-600">Integrantes principales</p></div>
                    <div class="rounded-2xl bg-white p-4 ring-1 ring-slate-200"><p class="text-3xl font-black text-[#0f5b5d]">${e}</p><p class="mt-1 text-sm font-semibold text-slate-600">Publicaciones registradas</p></div>
                </div>
                <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href="#/equipment" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-5 py-3.5 font-black text-white hover:bg-[#0a4648]">Conocer al equipo ${z("bx-right-arrow-alt","text-xl")}</a>
                    <a href="#/publicaciones" class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-black text-slate-800 hover:border-[#0f5b5d] hover:text-[#0f5b5d]">Ver publicaciones</a>
                </div>
            </aside>
        </section>

        ${ni()}

        <section class="mx-4 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f5b5d] to-[#071820] px-6 py-10 text-white shadow-2xl sm:mx-6 md:px-10 md:py-12 lg:mx-8 xl:mx-10" aria-labelledby="titulo-cta-portada">
            <div class="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Siguiente paso</p>
                    <h2 id="titulo-cta-portada" class="mt-2 text-3xl font-black leading-tight md:text-5xl">Conversemos sobre la necesidad antes de definir la solución</h2>
                    <p class="mt-4 max-w-3xl text-base leading-relaxed text-emerald-50 md:text-lg">El formulario inicial organiza el problema, el sector, los datos disponibles, el plazo, el presupuesto estimado y el producto esperado.</p>
                </div>
                <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <a href="#/diagnosticoServicios" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d5a54a] px-6 py-4 font-black text-[#071820] shadow-lg hover:bg-[#efc86f]">Solicitar diagnóstico ${z("bx-right-arrow-alt","text-xl")}</a>
                    <a href="mailto:mleonardos@unapec.edu.do" class="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white hover:bg-white/20">mleonardos@unapec.edu.do</a>
                </div>
            </div>
        </section>
    `,a.querySelector("[data-franja-institucional]")?.replaceWith(Gt({integrantes:oe.length,servicios:ce.length,lineas:Y.length,publicaciones:e})),a.querySelector("[data-resumen-servicios]")?.replaceWith(Wt()),a.querySelector("[data-proceso-aplicaciones]")?.replaceWith(ai()),a}const ci="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function di(){try{const e=await fetch(ci,{method:"GET",cache:"no-store"});if(!e.ok)throw new Error(`La API de Analytics respondió con estado ${e.status}`);const a=await e.json();if(!a.ok||!a.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(a.visitantes.total)||0,hoy:Number(a.visitantes.hoy)||0,ultimos7Dias:Number(a.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(a.visitantes.ultimos30Dias)||0,actualizadoEn:a.actualizadoEn||null}}catch(e){return console.error("No fue posible obtener las estadísticas de Analytics:",e),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}const ui=["w-full","min-w-0","max-w-none","max-w-7xl","tabletBig:max-w-6xl","xl:max-w-7xl","2xl:max-w-500","3xl:max-w-none","m-auto","m-0","p-0","p-2","mt-0","mt-8","md:mt-12","pt-0"],pi=["max-w-7xl","tabletBig:max-w-6xl","xl:max-w-7xl","2xl:max-w-500","3xl:max-w-none"];function Xa(e="default"){const a=document.getElementById("main");if(a){if(a.classList.remove(...ui),a.classList.add("w-full","min-w-0"),e==="full"){a.classList.add("max-w-none","m-0","p-0","mt-0","pt-0");return}a.classList.add(...pi,"p-2","mt-8","md:mt-12"),e==="left"?a.classList.add("m-0"):a.classList.add("m-auto")}}const L=Object.freeze({integrantes:9,articulosAcumulados:572,articulosAcumuladosTexto:"572+",etiquetaArticulos:"Artículos científicos acumulados",descripcionArticulos:"Producción de los 9 integrantes a lo largo de sus trayectorias académicas",notaArticulos:"Cota mínima basada en artículos de revista declarados en perfiles institucionales y registros científicos verificados. La suma representa la producción individual acumulada; las coautorías compartidas pueden formar parte de más de una trayectoria.",participacionesProyectosAprobados:58,participacionesProyectosAprobadosTexto:"58",etiquetaProyectos:"Participaciones en proyectos de I+D+i",descripcionProyectos:"58 registros acumulados: 24 en el perfil de Alicia Cordero y 34 en el de Juan Ramón Torregrosa",proyectosDestacados:10,proyectosNoMostrados:48,propuestasPendientes:2,notaProyectos:"La suma de 58 corresponde a participaciones registradas en ambos perfiles y puede incluir proyectos compartidos u otras modalidades de actividad; no equivale necesariamente a 58 proyectos competitivos únicos. Se muestran diez proyectos aprobados destacados."}),de=Object.freeze({registrosAlicia:24,registrosJuanRamon:34,participacionesAcumuladas:58,proyectosDestacados:10,registrosNoMostrados:48,propuestasPendientes:2,nota:"El total de 58 corresponde a la suma de los registros de proyectos en los perfiles de Alicia Cordero Barbero (24) y Juan Ramón Torregrosa Sánchez (34). Puede incluir proyectos compartidos y, por tanto, no equivale necesariamente a 58 títulos únicos."}),Se=[{id:101,categoria:"aprobado",title:"Procesos iterativos en la resolución de problemas no lineales: convergencia, estabilidad y aplicabilidad",estado:"Proyecto competitivo financiado",convocatoria:"PAID-11-24",codigo:"PAID-11-24",tipo:"I+D+i competitiva",institucion:"Universitat Politècnica de València",entidadFinanciadora:"Universitat Politècnica de València",fechaInicio:"1 de enero de 2025",duracion:"11 meses y 30 días",cuantia:"15.000 €",responsable:"Alicia Cordero Barbero y Juan Ramón Torregrosa Sánchez",participacion:"Ambos figuran en la línea de IP/Co-IP y con grado de contribución investigador/a.",enfoque:"Convergencia, estabilidad y aplicabilidad de procesos iterativos para problemas no lineales",contenido:"Proyecto orientado al diseño y análisis de procesos iterativos para resolver problemas no lineales, con énfasis en convergencia, estabilidad y aplicabilidad computacional.",contexto:"La iniciativa refuerza directamente la línea central del Grupo El Kernel en métodos iterativos, sistemas no lineales y computación científica.",impacto:["Diseño y análisis de métodos iterativos.","Estudio de convergencia y estabilidad.","Aplicación a problemas no lineales."],equipo:["Dra. Alicia Cordero Barbero","Dr. Juan Ramón Torregrosa Sánchez"],etiquetas:["Métodos iterativos","Sistemas no lineales","Convergencia","Estabilidad"],fuente:"CVN 2026 de Alicia Cordero Barbero y Juan Ramón Torregrosa Sánchez",fuenteUrl:"https://www.upv.es/ficha-personal/acordero"},{id:102,categoria:"aprobado",title:"Perovskite Spiking Neurons for Intelligent Networks",estado:"Proyecto europeo financiado",convocatoria:"Unión Europea · 101097688",codigo:"101097688",tipo:"I+D+i europea competitiva",institucion:"Universitat Politècnica de València",entidadFinanciadora:"Comisión de las Comunidades Europeas",fechaInicio:"1 de junio de 2024",duracion:"4 años, 3 meses y 29 días",cuantia:"2.232.750 €",responsable:"Juan Antonio Bisquert Mascarell",participacion:"Participación registrada en los CVN de Alicia Cordero y Juan Ramón Torregrosa.",enfoque:"Neuronas de disparo basadas en perovskitas y redes inteligentes",contenido:"Proyecto europeo dedicado al desarrollo de dispositivos y modelos de neuronas de disparo basados en perovskitas para redes inteligentes y computación neuromórfica.",contexto:"Su incorporación muestra capacidad de colaboración interdisciplinaria entre matemática aplicada, modelización, materiales avanzados y redes inteligentes.",impacto:["Computación neuromórfica.","Modelización de redes inteligentes.","Colaboración europea interdisciplinaria."],equipo:["Dra. Alicia Cordero Barbero","Dr. Juan Ramón Torregrosa Sánchez"],etiquetas:["Unión Europea","Perovskitas","Redes inteligentes","Modelización"],fuente:"CVN 2026 de Alicia Cordero Barbero y Juan Ramón Torregrosa Sánchez",fuenteUrl:"https://www.upv.es/ficha-personal/jrtorre"},{id:103,categoria:"aprobado",title:"Mejora de la Eficiencia en la Resolución de problemas no LINeales (MERLIN)",estado:"Proyecto competitivo financiado",convocatoria:"PAID-06-23",codigo:"PAID-06-23",tipo:"I+D+i competitiva",institucion:"Universitat Politècnica de València",entidadFinanciadora:"Universitat Politècnica de València",fechaInicio:"1 de enero de 2024",duracion:"1 año, 11 meses y 30 días",cuantia:"6.000 €",responsable:"Francisco Israel Chicharro López",participacion:"Participación registrada en los CVN de Alicia Cordero y Juan Ramón Torregrosa.",enfoque:"Eficiencia de algoritmos para la resolución de problemas no lineales",contenido:"Proyecto centrado en mejorar la eficiencia de los procedimientos numéricos utilizados para resolver problemas no lineales.",contexto:"La temática conecta de manera directa con el diseño de métodos de alto orden, el análisis de coste computacional y la comparación de algoritmos.",impacto:["Mejora de eficiencia computacional.","Resolución de ecuaciones y sistemas no lineales.","Evaluación comparativa de algoritmos."],equipo:["Dra. Alicia Cordero Barbero","Dr. Juan Ramón Torregrosa Sánchez"],etiquetas:["MERLIN","Eficiencia","Problemas no lineales","Análisis numérico"],fuente:"CVN 2026 de Alicia Cordero Barbero y Juan Ramón Torregrosa Sánchez",fuenteUrl:"https://www.upv.es/ficha-personal/acordero"},{id:104,categoria:"aprobado",title:"Procesos iterativos multidimensionales de altas prestaciones para resolver ecuaciones vectoriales y matriciales no lineales",estado:"Proyecto competitivo aprobado",convocatoria:"PAID-01-20-17",codigo:"PAID-01-20-17",tipo:"I+D+i competitiva",institucion:"Universitat Politècnica de València",entidadFinanciadora:"Universitat Politècnica de València",fechaInicio:"1 de marzo de 2021",duracion:"3 años, 11 meses y 27 días",cuantia:"Sin cuantía monetaria consignada (0 € en el CVN)",responsable:"Juan Ramón Torregrosa Sánchez",participacion:"Juan Ramón figura como IP y Alicia como participante registrada; grado de contribución investigador/a.",enfoque:"Procesos multidimensionales de altas prestaciones para ecuaciones vectoriales y matriciales",contenido:"Proyecto destinado al diseño de procesos iterativos multidimensionales eficientes para ecuaciones vectoriales y matriciales no lineales.",contexto:"Aporta experiencia en algoritmos de alto rendimiento, análisis matricial y resolución de sistemas de gran dimensión.",impacto:["Métodos multidimensionales de altas prestaciones.","Ecuaciones vectoriales no lineales.","Ecuaciones matriciales y análisis computacional."],equipo:["Dra. Alicia Cordero Barbero","Dr. Juan Ramón Torregrosa Sánchez"],etiquetas:["Alto rendimiento","Ecuaciones vectoriales","Ecuaciones matriciales","Métodos iterativos"],fuente:"CVN 2026 de Alicia Cordero Barbero y Juan Ramón Torregrosa Sánchez",fuenteUrl:"https://www.upv.es/ficha-personal/jrtorre"},{id:105,categoria:"aprobado",title:"Resolución de ecuaciones y sistemas no lineales mediante técnicas iterativas: análisis dinámico y aplicaciones",estado:"Proyecto competitivo financiado",convocatoria:"PROMETEO/2016/089",codigo:"PROMETEO/2016/089",tipo:"I+D+i competitiva autonómica",institucion:"Universitat Politècnica de València",entidadFinanciadora:"Generalitat Valenciana",fechaInicio:"1 de enero de 2016",duracion:"3 años, 11 meses y 30 días",cuantia:"146.884 €",responsable:"Juan Ramón Torregrosa Sánchez",participacion:"Juan Ramón figura como investigador principal y con grado de contribución investigador/a.",enfoque:"Técnicas iterativas, análisis dinámico y aplicaciones de ecuaciones y sistemas no lineales",contenido:"Proyecto competitivo dedicado al diseño de métodos iterativos eficientes, incluidos métodos libres de derivadas, procesos con y sin memoria, funciones peso y tratamiento de raíces múltiples.",contexto:"La ficha oficial destaca aplicaciones en optimización, problemas con singularidades, sistemas no lineales y situaciones con matrices jacobianas singulares o mal condicionadas.",impacto:["Métodos con y sin memoria.","Funciones peso y aceleración del orden de convergencia.","Análisis dinámico y aplicaciones a sistemas no lineales."],equipo:["Dr. Juan Ramón Torregrosa Sánchez"],etiquetas:["PROMETEO","Análisis dinámico","Métodos sin derivadas","Funciones peso"],fuente:"CVN 2026 de Juan Ramón Torregrosa Sánchez y ficha oficial Explora UPV",fuenteUrl:"https://aplicat.upv.es/exploraupv/ficha-proyecto/proyecto/20160393"},{id:106,categoria:"aprobado",title:"Improving PLC Programming through a New Graphical, Object-Oriented and Brand-Independent Programming Framework",estado:"Proyecto europeo financiado",convocatoria:"Comisión Europea · 243484",codigo:"243484",tipo:"I+D+i europea competitiva",institucion:"Universitat Politècnica de València",entidadFinanciadora:"Comisión de las Comunidades Europeas",fechaInicio:"1 de septiembre de 2010",duracion:"2 años, 11 meses y 30 días",cuantia:"771.441,80 €",responsable:"Manuel Pineda Sánchez",participacion:"Participación de Juan Ramón Torregrosa registrada en su CVN.",enfoque:"Programación gráfica, orientada a objetos e independiente de marca para controladores PLC",contenido:"Proyecto europeo orientado a mejorar la programación de controladores lógicos programables mediante un marco gráfico, orientado a objetos e independiente del fabricante.",contexto:"Evidencia experiencia en transferencia de métodos matemáticos y computacionales hacia automatización industrial y desarrollo de software técnico.",impacto:["Automatización y control industrial.","Programación orientada a objetos.","Interoperabilidad independiente de marca."],equipo:["Dr. Juan Ramón Torregrosa Sánchez"],etiquetas:["Unión Europea","PLC","Automatización","Software industrial"],fuente:"CVN 2026 de Juan Ramón Torregrosa Sánchez",fuenteUrl:"https://www.upv.es/ficha-personal/jrtorre"},{id:107,categoria:"aprobado",title:"Filtraciones en sistemas dinámicos y foliaciones. Aplicaciones",estado:"Proyecto competitivo financiado",convocatoria:"Ministerio de Educación y Ciencia",codigo:"Código no consignado en el fragmento CVN",tipo:"I+D+i competitiva nacional",institucion:"Universitat de València",entidadFinanciadora:"Ministerio de Educación y Ciencia",fechaInicio:"13 de diciembre de 2004",duracion:"3 años",cuantia:"24.840 €",responsable:"José Martínez Alfaro",participacion:"Participación de Alicia Cordero registrada en su CVN.",enfoque:"Sistemas dinámicos, filtraciones, foliaciones y aplicaciones",contenido:"Proyecto de investigación sobre filtraciones en sistemas dinámicos y foliaciones, con orientación hacia sus aplicaciones matemáticas.",contexto:"Refleja la base de Alicia Cordero en sistemas dinámicos y geometría, antecedente de sus trabajos posteriores en dinámica de métodos iterativos.",impacto:["Sistemas dinámicos.","Foliaciones y estructuras geométricas.","Fundamentos para análisis dinámico posterior."],equipo:["Dra. Alicia Cordero Barbero"],etiquetas:["Sistemas dinámicos","Foliaciones","Geometría","Aplicaciones"],fuente:"CVN 2026 de Alicia Cordero Barbero",fuenteUrl:"https://www.upv.es/ficha-personal/acordero"},{id:108,categoria:"aprobado",title:"Flujos NMS en variedades tridimensionales",estado:"Proyecto competitivo financiado",convocatoria:"Ministerio de Ciencia y Tecnología",codigo:"Código no consignado en el fragmento CVN",tipo:"I+D+i competitiva nacional",institucion:"Universitat de València",entidadFinanciadora:"Ministerio de Ciencia y Tecnología",fechaInicio:"28 de diciembre de 2001",duracion:"2 años, 11 meses y 30 días",cuantia:"9.766 €",responsable:"José Martínez Alfaro",participacion:"Participación de Alicia Cordero registrada en su CVN.",enfoque:"Flujos NMS y dinámica en variedades tridimensionales",contenido:"Proyecto centrado en el estudio de flujos NMS en variedades tridimensionales y sus propiedades dinámicas y topológicas.",contexto:"Contribuye a la trayectoria fundacional de Alicia Cordero en sistemas dinámicos y topología de variedades.",impacto:["Dinámica en variedades tridimensionales.","Flujos no singulares de tipo Morse-Smale.","Análisis topológico y geométrico."],equipo:["Dra. Alicia Cordero Barbero"],etiquetas:["Flujos NMS","Variedades 3D","Sistemas dinámicos","Topología"],fuente:"CVN 2026 de Alicia Cordero Barbero",fuenteUrl:"https://www.upv.es/ficha-personal/acordero"},{id:109,categoria:"aprobado",title:"Dinámica asociada a órbitas periódicas anudadas",estado:"Proyecto competitivo financiado",convocatoria:"Ministerio de Educación y Cultura",codigo:"No consignado en el CVN",tipo:"I+D+i competitiva nacional",institucion:"Entidad de realización consignada en el CVN institucional",entidadFinanciadora:"Ministerio de Educación y Cultura",fechaInicio:"1 de octubre de 1998",duracion:"3 años",cuantia:"9.616,19 €",responsable:"No desglosado en el registro recuperado",participacion:"Un investigador registrado; el proyecto aparece en el CVN de Alicia Cordero.",enfoque:"Dinámica de órbitas periódicas anudadas",contenido:"Proyecto dedicado al estudio de la dinámica asociada a órbitas periódicas anudadas.",contexto:"Representa una etapa temprana de la trayectoria de Alicia Cordero en dinámica y órbitas periódicas.",impacto:["Órbitas periódicas.","Dinámica y estructuras anudadas.","Fundamentos geométricos y topológicos."],equipo:["Dra. Alicia Cordero Barbero"],etiquetas:["Órbitas periódicas","Dinámica","Nudos","Topología"],fuente:"CVN 2026 de Alicia Cordero Barbero",fuenteUrl:"https://www.upv.es/ficha-personal/acordero"},{id:110,categoria:"aprobado",title:"Completación de matrices con forma de Jordan prefijada",estado:"Proyecto competitivo financiado",convocatoria:"PB94-1365-C03-02",codigo:"PB94-1365-C03-02",tipo:"I+D+i competitiva nacional",institucion:"Universitat Politècnica de València",entidadFinanciadora:"Ministerio de Educación",fechaInicio:"Fecha no visible en el fragmento CVN recuperado",duracion:"Duración no visible en el fragmento CVN recuperado",cuantia:"15.025,30 €",responsable:"No desglosado en el fragmento CVN recuperado",participacion:"Proyecto registrado en el CVN de Juan Ramón Torregrosa.",enfoque:"Completación de matrices parciales con forma de Jordan prescrita",contenido:"Proyecto de álgebra lineal y análisis matricial dedicado a problemas de completación de matrices con una forma de Jordan prefijada.",contexto:"Muestra la amplitud de la trayectoria de Juan Ramón Torregrosa en análisis matricial, teoría de control y álgebra lineal numérica.",impacto:["Completación de matrices parciales.","Forma de Jordan prescrita.","Aplicaciones a álgebra lineal y control."],equipo:["Dr. Juan Ramón Torregrosa Sánchez"],etiquetas:["Matrices","Forma de Jordan","Álgebra lineal","Teoría de control"],fuente:"CVN 2026 de Juan Ramón Torregrosa Sánchez",fuenteUrl:"https://www.upv.es/ficha-personal/jrtorre"}];function De(e){return new Intl.NumberFormat("es-DO").format(Number(e)||0)}function mi(e){if(!e)return null;const a=new Date(e);return Number.isNaN(a.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(a)}function Oe(e){return String(e||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase()}function bi(e){[...e.querySelectorAll("p")].forEach(t=>{const i=Oe(t.textContent),o=t.parentElement;if(!o)return;const r=[...o.querySelectorAll("p")].find(s=>s!==t&&/^[\d.,]+\+?$/.test((s.textContent||"").trim()));["integrantes","integrantes principales","investigadores"].includes(i)&&r&&(r.textContent=String(L.integrantes),o.setAttribute("title","Miembros nacionales e internacionales del Grupo El Kernel")),["publicaciones registradas","articulos cientificos acumulados"].includes(i)&&r&&(r.textContent=L.articulosAcumuladosTexto,t.textContent=L.etiquetaArticulos,o.setAttribute("title",L.descripcionArticulos),o.setAttribute("aria-label",`${L.articulosAcumuladosTexto} ${L.etiquetaArticulos}. ${L.descripcionArticulos}.`))})}function gi(e){const a=t=>String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");return`
        <div class="flex flex-wrap gap-2">
            <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-900">Proyecto aprobado</span>
            <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">${a(e.institucion)}</span>
        </div>
        <h3 class="mt-4 text-xl font-black leading-tight text-slate-950">${a(e.title)}</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">${a(e.enfoque)}</p>
        <p class="mt-4 text-xs font-black uppercase tracking-widest text-[#0f5b5d]">${a(e.convocatoria)}</p>
    `}function xi(e){const a=[...e.querySelectorAll("h2")].find(n=>Oe(n.textContent)==="propuestas de investigacion");if(a){const n=a.closest("section");a.textContent="Experiencia en proyectos competitivos";const d=a.parentElement,b=d?.querySelector("p");if(b&&(b.textContent="Trayectoria financiada"),d&&!d.querySelector("[data-resumen-proyectos-portada]")){const u=document.createElement("p");u.dataset.resumenProyectosPortada="true",u.className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base",u.textContent=`${L.participacionesProyectosAprobados} participaciones registradas en proyectos de I+D+i; se presentan diez proyectos destacados y se contabilizan ${L.proyectosNoMostrados} registros adicionales sin desplegarlos.`,d.appendChild(u)}[...n?.querySelectorAll("article")||[]].slice(0,2).forEach((u,f)=>{const h=Se[f];h&&(u.innerHTML=gi(h))})}const i=[...e.querySelectorAll("h2")].find(n=>Oe(n.textContent).includes("conocimiento academico conectado"))?.closest("aside");if(!i||i.querySelector("[data-metrica-proyectos-aprobados]"))return;const r=[...i.querySelectorAll("p")].find(n=>Oe(n.textContent)==="articulos cientificos acumulados")?.parentElement?.parentElement;if(!r)return;r.className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3";const s=document.createElement("div");s.dataset.metricaProyectosAprobados="true",s.className="rounded-2xl bg-white p-4 ring-1 ring-slate-200",s.innerHTML=`<p class="text-3xl font-black text-[#0f5b5d]">${L.participacionesProyectosAprobadosTexto}</p><p class="mt-1 text-sm font-semibold text-slate-600">${L.etiquetaProyectos}</p>`,s.setAttribute("title",`${L.descripcionProyectos}. ${L.notaProyectos}`),s.setAttribute("aria-label",`${L.participacionesProyectosAprobadosTexto} ${L.etiquetaProyectos}. ${L.descripcionProyectos}.`),r.appendChild(s)}async function fi(e){const a=e.querySelector("#analytics-total"),t=e.querySelector("#analytics-hoy"),i=e.querySelector("#analytics-semana"),o=e.querySelector("#analytics-mes"),r=e.querySelector("#analytics-actualizado");if(!a||!t||!i||!o||!r){console.warn("No se encontraron los elementos de Analytics en la portada.");return}r.textContent="Cargando estadísticas…";try{const s=await di();a.textContent=De(s.total),t.textContent=De(s.hoy),i.textContent=De(s.ultimos7Dias),o.textContent=De(s.ultimos30Dias);const n=mi(s.actualizadoEn);r.textContent=n?`Actualizado: ${n}`:"Estadísticas temporalmente no disponibles"}catch(s){console.error("Error al mostrar las estadísticas en la portada:",s),a.textContent="—",t.textContent="—",i.textContent="—",o.textContent="—",r.textContent="No fue posible cargar las estadísticas"}}function vi(){Xa("full");const e=li();return bi(e),xi(e),fi(e),e}function hi(){return vi()}const yi=""+new URL("QuienesSomos-CIhVjMhZ.webp",import.meta.url).href;function wi(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${yi}" 
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
                            <p class="text-3xl font-black text-white">${L.integrantes}</p>
                            <p class="text-white/75 text-xs md:text-sm font-semibold">
                                Investigadores
                            </p>
                        </div>

                        <div
                            class="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4"
                            title="${L.descripcionArticulos}"
                        >
                            <p class="text-3xl font-black text-white">${L.articulosAcumuladosTexto}</p>
                            <p class="text-white/75 text-xs md:text-sm font-semibold">
                                ${L.etiquetaArticulos}
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
    `}function ki(e){return String(e?.DOI||e?.doi||"").trim().toLowerCase()}function Ai(e){const a=ki(e);return a||[e?.year||"",e?.title||e?.journal||e?.tile||"",e?.contenido||e?.articleTitle||""].join("-").trim().toLowerCase()}function Ei(){const e=new Map;return Array.isArray(ne)?(ne.forEach(a=>{(a?.publicaciones||[]).forEach(i=>{const o=Ai(i);o&&!e.has(o)&&e.set(o,i)})}),Array.from(e.values())):[]}function Ci(){const e=Ei(),a=e.map(i=>Number(i.year)).filter(Boolean),t=e.filter(i=>String(i?.q||i?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:e.length,totalQ1:t,primerYear:a.length?Math.min(...a):"—",ultimoYear:a.length?Math.max(...a):"—"}}function Si(e=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const a=Ci();return`
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
                        ${e.map(t=>`<p>${t}</p>`).join("")}
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
                                ${L.integrantes}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Investigadores
                            </p>
                        </div>

                        <div
                            class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center"
                            title="${L.descripcionArticulos}"
                        >
                            <p class="text-2xl font-black text-slate-900">
                                ${L.articulosAcumuladosTexto}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                ${L.etiquetaArticulos}
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${a.totalQ1}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones Q1 registradas
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
                    <p class="mt-4 text-xs leading-relaxed text-slate-500">
                        ${L.notaArticulos}
                    </p>
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
                            ${["Métodos iterativos","EDPs no lineales","Optimización","Álgebra","Educación matemática","Modelización aplicada"].map(t=>`
                                    <span class="bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
                                        ${t}
                                    </span>
                                `).join("")}
                        </div>
                    </article>
                </div>

            </div>
        </section>
    `}const $i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",Mi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",ji="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",zi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",Li="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",Ii=[{icon:$i,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:Mi,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:ji,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:zi,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function Pi(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${Ii.map(t=>Di(t)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function Di({icon:e,title:a,content:t}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${e}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${a}</h3>
        </div>

        <img src="${Li}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${t}
        </div>
      </div>
    </div>
  `}function Ri(){const e=document.createElement("section");return e.className="w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12",e.innerHTML=`
        <div class="mx-auto max-w-[1600px]">
            <header class="relative overflow-hidden rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
                <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"></div>
                <div class="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Identidad, propósito y forma de trabajo</p>
                        <h1 class="mt-3 text-4xl font-black leading-tight md:text-6xl">Quiénes somos</h1>
                        <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">El Kernel es un grupo dominicano de investigación y servicios científicos que integra matemática aplicada, computación, estadística, educación e innovación para producir conocimiento verificable y transferible.</p>
                    </div>
                    <aside class="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <p class="text-sm font-black text-emerald-200">Nuestro compromiso institucional</p>
                        <ul class="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                            <li>• Rigor científico y metodológico.</li>
                            <li>• Confidencialidad e integridad académica.</li>
                            <li>• Reproducibilidad y documentación.</li>
                            <li>• Formación, colaboración y transferencia.</li>
                        </ul>
                    </aside>
                </div>
            </header>

            <div class="mt-8 space-y-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-lg md:p-9">
                ${wi()}
                ${Si()}
                ${Pi()}
            </div>

            <section class="mt-8 rounded-[2rem] bg-gradient-to-r from-[#0f5b5d] to-[#071820] px-6 py-8 text-white shadow-xl md:px-10">
                <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div><p class="text-xs font-black uppercase tracking-[0.18em] text-[#efc86f]">Colaboración científica</p><h2 class="mt-2 text-2xl font-black md:text-3xl">Investigación, servicios y alianzas con alcance verificable</h2><p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">Trabajamos con universidades, centros de investigación, instituciones públicas, empresas y comunidades académicas.</p></div>
                    <div class="flex flex-col gap-3 sm:flex-row"><a href="#/equipment" class="rounded-xl bg-white px-5 py-3 text-center font-black text-[#071820]">Conocer el equipo</a><a href="#/diagnosticoServicios" class="rounded-xl bg-[#d5a54a] px-5 py-3 text-center font-black text-[#071820]">Solicitar diagnóstico</a></div>
                </div>
            </section>
        </div>
    `,e}function qi(e){e.querySelectorAll("[data-accordion-header]").forEach(t=>{t.addEventListener("click",()=>{const i=t.nextElementSibling,o=t.querySelector("[data-accordion-icon]"),r=i.classList.contains("max-h-[1000px]");e.querySelectorAll("[data-accordion-content]").forEach(s=>{s.classList.remove("max-h-[1000px]"),s.classList.add("max-h-0")}),e.querySelectorAll("[data-accordion-icon]").forEach(s=>{s.classList.remove("rotate-180")}),r||(i.classList.remove("max-h-0"),i.classList.add("max-h-[1000px]"),o.classList.add("rotate-180"))})})}function Ti(e){const a=e.querySelector("[data-description-text]"),t=e.querySelector("[data-description-btn]");if(!a||!t)return;let i=!1;t.addEventListener("click",()=>{i=!i,a.classList.toggle("line-clamp-4",!i),t.textContent=i?"Leer menos":"Leer más"})}function Oi(){const e=Ri();return qi(e),Ti(e),e}function K(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ni(e=[]){return!e||e.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:e.map(a=>`
        <a href="${K(a.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${K(a.name)}">
            <i class="${K(a.icon)} text-xl"></i>
        </a>
    `).join("")}function Fi(e){return e?String(e).split(",").map(t=>t.trim()).filter(Boolean).slice(0,4).map(t=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${K(t)}
        </span>
    `).join(""):""}function Ui(e){const a=document.createElement("article");a.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const t=Ni(e.redes||[]),i=Fi(e.areas),o=e.estado||e.grado||e.subtitle||"Investigador";return a.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${e.img}" 
                        alt="${K(e.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${K(o)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${K(e.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${K(e.subtitle||"")}
            </p>
        </div>

        <div class="flex justify-center gap-3 my-2 flex-wrap">
            ${t}
        </div>

        <div class="w-full flex flex-col gap-4 text-left flex-1">

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Áreas de trabajo
                </p>

                <div class="flex flex-wrap gap-2">
                    ${i||`
                                <p class="text-sm text-slate-500 leading-relaxed">
                                    ${K(e.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${K(e.afilaciones||e.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${K(e.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,a}function Bi(){let e=0,a=null,t=null;const i=document.createElement("section");i.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const o=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,r=()=>{const h=o();return Math.max(oe.length-h,0)},s=()=>{const h=r();e>h&&(e=0),e<0&&(e=h)},n=()=>{const h=r();e>=h?e=0:e++,f()},d=()=>{const h=r();e<=0?e=h:e--,f()},b=()=>{p(),oe.length>o()&&(a=setInterval(n,4500))},p=()=>{a&&(clearInterval(a),a=null)},u=()=>{const h=o(),w=Math.max(oe.length-h+1,1);return Array.from({length:w}).map((A,y)=>`
            <button
                type="button"
                data-dot-index="${y}"
                aria-label="Ir al grupo ${y+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${y===e?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},f=()=>{if(!oe||oe.length===0){i.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}s();const h=o(),w=oe.slice(e,e+h);i.innerHTML=`
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
                ${u()}
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
        `;const A=i.querySelector("#cards-wrapper");w.forEach(E=>{A.appendChild(Ui(E))});const y=i.querySelector("#prev-btn"),g=i.querySelector("#next-btn");y&&(y.onclick=()=>{d(),b()}),g&&(g.onclick=()=>{n(),b()}),i.querySelectorAll("[data-dot-index]").forEach(E=>{E.onclick=()=>{e=parseInt(E.dataset.dotIndex),f(),b()}})};return i.addEventListener("mouseenter",p),i.addEventListener("mouseleave",b),document.addEventListener("visibilitychange",()=>{document.hidden?p():b()}),window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{e=0,f(),b()},150)}),f(),b(),i}function Vi(e){e.addEventListener("click",a=>{const t=a.target.closest("[data-route]");if(!t)return;const i=window.location.hash.replace("#/","")||"equipment";t.dataset.route!==i&&Ze(t.dataset.route)})}function Wa(){const e=window.location.hash.replace(/^#\/?/,"")||"equipment",a=document.createElement("nav"),t="bg-sky-800 text-white border-sky-800 shadow-md",i="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return a.className="w-full flex justify-center mb-6",a.innerHTML=`
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${e==="equipment"?t:i}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${e==="FormacionAcademica"?t:i}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `,Vi(a),a}function _i(){const e=document.createElement("section");e.id="equipo-investigacion",e.className="w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";const a=document.createElement("div");a.className="mx-auto max-w-[1600px]",a.innerHTML=`
        <header class="rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Talento científico y capacidades complementarias</p>
            <h1 class="mt-3 text-4xl font-black md:text-6xl">Equipo de investigación</h1>
            <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Investigadores en análisis numérico, sistemas no lineales, optimización, álgebra, ciencia de datos y educación matemática, articulados para desarrollar investigación, formación y soluciones cuantitativas.</p>
            <div class="mt-7 flex flex-wrap gap-2">${["Métodos iterativos","EDPs","Optimización","Álgebra","Ciencia de datos","Educación matemática"].map(o=>`<span class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-emerald-100">${o}</span>`).join("")}</div>
        </header>
    `;const t=document.createElement("div");t.className="mt-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm",t.appendChild(Wa());const i=Bi();return i.className="w-full py-8 flex flex-col gap-8 items-center font-sans",a.appendChild(t),a.appendChild(i),e.appendChild(a),e}function Gi(){return _i()}function G(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ya(e){return e.formacion?.length||0}function Za(e){return e.experiencia?.length||0}function Ki(e,a=!1){const t=Ya(e),i=Za(e);return`
        <button 
            type="button"
            data-id="${e.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${a?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${e.img}" 
                    alt="${G(e.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${a?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${a?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${G(e.name)}
                </h3>

                <p class="text-xs leading-snug ${a?"text-sky-50":"text-gray-500"}">
                    ${t} formación${t===1?"":"es"}
                    · ${i} experiencia${i===1?"":"s"}
                </p>

                ${e.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${a?"text-white/80":"text-gray-400"}">
                                ${G(e.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Hi(e){const a=e.formacion||[],t=e.experiencia||[],i=a.length?a.map(n=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${G(n.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${G(n.descripcion)}
                        </p>

                        ${n.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${G(n.institucion)}
                                    </p>
                                  `:""}
                    </div>
                </div>
            </div>
        `).join(""):`
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `,o=t.length?t.map(n=>`
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${G(n.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,r=Ya(e),s=Za(e);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${e.img}" 
                        alt="${G(e.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 id="titulo-detalle-formacion" class="text-xl md:text-2xl font-bold leading-tight">
                            ${G(e.name)}
                        </h2>

                        ${e.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${G(e.area)}
                                    </p>
                                  `:""}
                    </div>
                </div>

                <button 
                    id="close-modal" 
                    type="button"
                    aria-label="Cerrar el perfil académico"
                    class="md:hidden text-white hover:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         class="h-8 w-8" 
                         aria-hidden="true"
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
                        ${r}
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
                        ${G(e.area||"No especificada")}
                    </p>
                </div>
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">

                <section class="mb-8">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Formación académica
                    </h3>

                    ${i}
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
    `}const ie=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:Xe,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:We,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:pa,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:Ka,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:Ha,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:Ye,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:je,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function Ji(){let e=ie[0]?.id||1,a=!1,t=null,i=null,o="",r=null,s=!1;const n=document.createElement("section");n.className="w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";function d(){return ie.find(w=>w.id===e)||ie[0]}function b(){const w=ie.reduce((g,E)=>g+(E.formacion?.length||0),0),A=ie.reduce((g,E)=>g+(E.experiencia?.length||0),0),y=ie.filter(g=>`${g.name||""} ${(g.formacion||[]).map(E=>`${E.name||""} ${E.descripcion||""}`).join(" ")}`.toLowerCase().includes("doctor")||String(g.name||"").toLowerCase().includes("ph.d")).length;return{total:ie.length,doctores:y,totalFormacion:w,totalExperiencia:A}}const p=()=>{i?.abort(),i=null,s&&(document.body.style.overflow=o,o="",s=!1)},u=({restaurarFoco:w=!0,renderizar:A=!0}={})=>{const y=r;p(),a=!1,A&&(h(),w&&y!==null&&window.requestAnimationFrame(()=>{n.querySelector(`[data-id="${y}"]`)?.focus()}))},f=()=>{if(!a||window.innerWidth>=768)return;const w=n.querySelector("#detalle-container");if(!w)return;o=document.body.style.overflow,document.body.style.overflow="hidden",s=!0,i=new AbortController;const A={signal:i.signal},y=()=>[...w.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(g=>g instanceof HTMLElement&&g.getAttribute("aria-hidden")!=="true");document.addEventListener("keydown",g=>{if(g.key==="Escape"){g.preventDefault(),u();return}if(g.key!=="Tab")return;const E=y();if(!E.length){g.preventDefault();return}const C=E[0],l=E.at(-1);g.shiftKey&&document.activeElement===C?(g.preventDefault(),l.focus()):!g.shiftKey&&document.activeElement===l&&(g.preventDefault(),C.focus())},A),window.addEventListener("hashchange",()=>{u({restaurarFoco:!1,renderizar:!1})},A),w.addEventListener("click",g=>{g.target===w&&u()},A),w.querySelector("#close-modal")?.addEventListener("click",()=>u(),A),w.querySelector("#close-modal")?.focus()},h=()=>{p();const w=d(),A=b(),y=window.innerWidth<768&&!a,g=window.innerWidth<768&&a?'role="dialog" aria-modal="true" aria-labelledby="titulo-detalle-formacion"':"";n.innerHTML=`<div class="mx-auto max-w-[1600px]">
            <header class="rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Trayectoria, competencias y experiencia</p>
                <h1 class="mt-3 text-4xl font-black md:text-6xl">Formación académica</h1>
                <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Consulte los grados, especializaciones, experiencia docente, trayectoria investigadora y capacidades profesionales de cada integrante del grupo.</p>
                <div class="mt-7 grid grid-cols-2 gap-3 md:max-w-3xl md:grid-cols-4">${[[A.total,"Investigadores"],[A.doctores,"Doctores"],[A.totalFormacion,"Registros formativos"],[A.totalExperiencia,"Experiencias"]].map(([C,l])=>`<article class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-3xl font-black">${C}</p><p class="text-xs font-bold text-emerald-200">${l}</p></article>`).join("")}</div>
            </header>
            <div class="mt-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm" data-nav-equipo></div>
            <div class="mt-6 grid min-h-[720px] grid-cols-1 gap-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl md:grid-cols-[0.78fr_1.5fr] md:p-6">
                <aside class="max-h-[430px] overflow-y-auto rounded-3xl border border-slate-200 bg-slate-50 p-4 custom-scrollbar md:max-h-none"><p class="text-xs font-black uppercase tracking-[0.18em] text-[#805615]">Perfiles académicos</p><h2 class="mt-1 text-2xl font-black text-slate-950">Seleccione un investigador</h2><p class="mt-2 text-sm leading-relaxed text-slate-600">Revise su formación, experiencia, áreas y trayectoria institucional.</p><div class="mt-5 flex flex-col gap-4">${ie.map(C=>Ki(C,C.id===e)).join("")}</div></aside>
                <div id="detalle-container" ${g} class="fixed inset-0 z-[350] items-center justify-center bg-slate-950/80 p-4 md:relative md:inset-auto md:z-0 md:flex md:bg-transparent md:p-0 ${y?"hidden":"flex"}"><div class="h-[90%] w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#071820] p-5 shadow-2xl md:h-full md:max-w-none md:p-6">${Hi(w)}</div></div>
            </div>
        </div>`,n.querySelector("[data-nav-equipo]")?.appendChild(Wa()),n.querySelectorAll("[data-id]").forEach(C=>C.addEventListener("click",()=>{e=Number(C.dataset.id),window.innerWidth<768&&(a=!0,r=C.dataset.id),h()})),f()};return window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{window.innerWidth>=768&&(p(),a=!1),h()},120)}),h(),n}function Qi(){return Ji()}const Xi=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,Wi=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,Yi=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,Zi=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,eo=""+new URL("congreso1-Dlzvx-ka.webp",import.meta.url).href,ao=""+new URL("congreso2-BfKcvAvq.webp",import.meta.url).href,et=""+new URL("congreso3-DyZ8NRj-.webp",import.meta.url).href,to=""+new URL("congreso4-CW5mrzjt.webp",import.meta.url).href,io=""+new URL("congreso5-CAIcqWSj.webp",import.meta.url).href,oo=""+new URL("congreso6-Dmygsyh1.webp",import.meta.url).href,so=""+new URL("congreso7-AgO7Y0QP.webp",import.meta.url).href,ro=""+new URL("congreso8-C1ghZJF_.webp",import.meta.url).href,no=""+new URL("congreso9-DzusWTvM.webp",import.meta.url).href,at=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:et,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:Wi,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:Yi,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:je,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:We,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:Xe,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:Xi,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:Zi,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:je,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:Ye,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}],Ge=Object.freeze({id:"nw-mmehb-2026",title:"El Kernel participa en Mathematical Modelling in Engineering & Human Behaviour 2026",date:"12–15 de julio de 2026",category:"Participación internacional",featured:!0,visualType:"mmehb-2026",image:null,imageAlt:"Flyer digital de la participación del Grupo El Kernel en MME&HB 2026",imageFit:"contain",excerpt:"Integrantes del Grupo El Kernel participaron en la XXVIII edición de MME&HB 2026, celebrada en la Universitat Politècnica de València, con resultados sobre métodos iterativos, optimización y sistemas no lineales.",tags:Object.freeze(["MME&HB 2026","Universitat Politècnica de València","Métodos iterativos","Optimización"]),content:{paragraphs:["El Grupo de Investigación El Kernel participó en la XXVIII edición del Congreso Internacional Mathematical Modelling in Engineering & Human Behaviour (MME&HB 2026), organizado por el Instituto Universitario de Matemática Multidisciplinar de la Universitat Politècnica de València.","El encuentro se celebró del 12 al 15 de julio de 2026 en la ETS Informática, Edificio 1E, en València, con participación presencial y en línea. El programa incluyó la sesión especial Recent advances in Iterative Processes for Solving Nonlinear Problems.","La representación del grupo estuvo vinculada con resultados recientes en familias iterativas con funciones peso, métodos para sistemas no lineales, convergencia local, estabilidad y algoritmos híbridos de optimización.","Las presentaciones mostraron la iteración general de una familia con funciones peso y un teorema de convergencia local, incluyendo condiciones sobre las funciones H y G y el análisis del orden de convergencia.","Esta participación fortalece la proyección internacional del grupo y su vinculación con investigadores del Instituto Universitario de Matemática Multidisciplinar y de la Universitat Politècnica de València."],list:["Evento: Mathematical Modelling in Engineering & Human Behaviour 2026.","Edición: XXVIII Congreso Internacional.","Fechas: 12–15 de julio de 2026.","Lugar: ETS Informática, Edificio 1E, Universitat Politècnica de València.","Organización: Instituto Universitario de Matemática Multidisciplinar (IMM).","Representación de El Kernel: Miguel A. Leonardo Sepúlveda, Natanael Ureña Castillo y Antmel Rodríguez Cabral.","Áreas: métodos iterativos, sistemas no lineales, funciones peso, convergencia, estabilidad y optimización."]},articleURL:"https://imm.webs.upv.es/jornadas/2026/home.html"}),Ke=Object.freeze({id:"nw10",title:"El Kernel sostiene un panel científico en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",category:"Panel científico",visualType:"mescyt-cic-2026",image:null,imageAlt:"Registro fotográfico del panel científico del Grupo El Kernel en el XXI Congreso Internacional de Investigación Científica 2026",excerpt:"El Grupo de Investigación El Kernel sostuvo un panel científico integrado por tres ponencias sobre métodos iterativos, sistemas no lineales y optimización durante el XXI CIC 2026 organizado por el MESCyT.",tags:Object.freeze(["MESCyT","XXI CIC 2026","Panel científico","Métodos iterativos","Optimización","Sistemas no lineales"]),content:Object.freeze({paragraphs:Object.freeze(["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica (XXI CIC 2026), evento central de la Semana Dominicana de Ciencia y Tecnología 2026 organizada por el Ministerio de Educación Superior, Ciencia y Tecnología de la República Dominicana.","La participación del grupo se desarrolló el 1 de julio de 2026 mediante un panel científico integrado por tres ponencias. La actividad tuvo una duración aproximada de una hora y contó con la asistencia de alrededor de 50 personas, principalmente estudiantes de la Maestría en Matemática Superior y otros participantes interesados en matemática aplicada y computacional.","Miguel A. Leonardo Sepúlveda presentó una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","Natanael Ureña Castillo presentó nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","Antmel Rodríguez Cabral presentó resultados sobre una familia generalizada de Traub para sistemas no lineales, incluyendo un método óptimo de cuarto orden y su análisis dinámico.","El panel fue coordinado por Miguel A. Leonardo Sepúlveda y fortaleció la divulgación de los resultados recientes del grupo, así como su vínculo con la formación de nuevos investigadores en análisis numérico, optimización, álgebra, análisis matricial, matemática aplicada y educación matemática."]),list:Object.freeze(["Evento: XXI Congreso Internacional de Investigación Científica (XXI CIC 2026).","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Organización: Ministerio de Educación Superior, Ciencia y Tecnología (MESCyT), Gobierno de la República Dominicana.","Fecha de la participación de El Kernel: 1 de julio de 2026.","Formato: panel científico integrado por tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Representación: Miguel A. Leonardo Sepúlveda, Natanael Ureña Castillo y Antmel Rodríguez Cabral.","Áreas: métodos iterativos, sistemas no lineales, funciones peso, optimización, convergencia y análisis dinámico.","Coordinación académica: Miguel A. Leonardo Sepúlveda."])}),articleURL:"https://mescyt.gob.do/noticias/semana-dominicana-de-ciencia-y-tecnologia-y-xxi-congreso-internacional-de-investigacion-cientifica-xxi-cic-2026/"});function lo(e){return e?{marco:"min-h-[340px] p-4",titulo:"text-3xl",subtitulo:"text-sm",nombres:"text-xs",formula:"text-[10px]"}:{marco:"min-h-[520px] p-6 md:p-8",titulo:"text-4xl md:text-6xl",subtitulo:"text-base md:text-lg",nombres:"text-sm md:text-base",formula:"text-xs md:text-sm"}}function ma({compacto:e=!1}={}){const a=lo(e);return`
        <div class="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#082f52] text-white shadow-xl ${a.marco}" aria-label="Flyer digital de MME&HB 2026">
            <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/15 blur-2xl"></div>
            <div class="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-amber-300/10 blur-2xl"></div>

            <div class="relative z-10 flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div class="flex min-w-0 items-center gap-3">
                    <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md">
                        <img src="${ze}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" />
                    </span>
                    <div class="min-w-0">
                        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">Grupo de Investigación</p>
                        <p class="truncate text-lg font-black">El Kernel</p>
                    </div>
                </div>
                <span class="rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-200">Participación científica</span>
            </div>

            <div class="relative z-10 mt-5">
                <p class="font-black uppercase tracking-[0.18em] text-cyan-200 ${a.subtitulo}">Universitat Politècnica de València · 12–15 julio 2026</p>
                <h2 class="mt-2 font-black leading-[0.95] ${a.titulo}">MME&amp;HB 2026</h2>
                <p class="mt-3 max-w-3xl font-bold leading-tight ${a.subtitulo}">Mathematical Modelling in Engineering &amp; Human Behaviour</p>
                <p class="mt-2 text-xs font-semibold text-slate-300">XXVIII Congreso Internacional · Instituto Universitario de Matemática Multidisciplinar (IMM)</p>
            </div>

            <div class="relative z-10 mt-5 grid grid-cols-2 gap-3">
                <article class="rounded-xl border border-white/15 bg-white/8 p-3">
                    <p class="font-mono leading-relaxed text-cyan-100 ${a.formula}">y⁽ᵏ⁾ = x⁽ᵏ⁾ − [F′(x⁽ᵏ⁾)]⁻¹F(x⁽ᵏ⁾)</p>
                    <p class="mt-2 text-[10px] font-black uppercase tracking-wider text-amber-200">Funciones peso y métodos iterativos</p>
                </article>
                <article class="rounded-xl border border-white/15 bg-white/8 p-3">
                    <p class="font-mono leading-relaxed text-cyan-100 ${a.formula}">H(0)=H′(0)=1, &nbsp; G(0)=G′(0)=0</p>
                    <p class="mt-2 text-[10px] font-black uppercase tracking-wider text-amber-200">Convergencia local y análisis numérico</p>
                </article>
            </div>

            <div class="relative z-10 mt-5 rounded-2xl border border-cyan-200/20 bg-white/8 p-4">
                <p class="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Representación de El Kernel</p>
                <ol class="mt-3 space-y-2 ${a.nombres}">
                    <li class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f6b6d] text-xs font-black">1</span><span><strong>Miguel A. Leonardo Sepúlveda</strong><br><span class="text-slate-300">Métodos iterativos · sistemas no lineales · EDPs</span></span></li>
                    <li class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f6b6d] text-xs font-black">2</span><span><strong>Natanael Ureña Castillo</strong><br><span class="text-slate-300">Optimización · algoritmos híbridos · cuasi-Newton</span></span></li>
                    <li class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f6b6d] text-xs font-black">3</span><span><strong>Antmel Rodríguez Cabral</strong><br><span class="text-slate-300">Análisis numérico · estabilidad · dinámica</span></span></li>
                </ol>
            </div>

            <div class="relative z-10 mt-auto pt-5">
                <div class="flex flex-col gap-1 border-t border-white/15 pt-4 text-xs text-slate-300 sm:flex-row sm:items-end sm:justify-between">
                    <span><strong class="text-white">IMM · ETS Informática, Edificio 1E</strong><br>València, España</span>
                    <span class="font-black text-amber-200">MME&amp;HB 2026</span>
                </div>
            </div>
        </div>
    `}const $a=Object.freeze([et,eo,ao,to,io,oo,so,ro,no]),co=Object.freeze([{nombre:"Miguel A. Leonardo Sepúlveda",tema:"Funciones peso y método Singh–Sharma de quinto orden"},{nombre:"Natanael Ureña Castillo",tema:"Algoritmos híbridos cuasi-Newton con correctores de alto orden"},{nombre:"Antmel Rodríguez Cabral",tema:"Familia generalizada de Traub y método óptimo de cuarto orden"}]);function uo(e){return e?`
            <section class="relative min-h-0 flex-1 overflow-hidden bg-slate-900">
                <img
                    src="${$a[0]}"
                    alt="Panel científico del Grupo El Kernel en el XXI CIC 2026"
                    class="h-full min-h-[220px] w-full object-cover"
                    loading="lazy"
                />
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent px-4 pb-4 pt-14 text-white">
                    <p class="text-[10px] font-black uppercase tracking-[0.18em] text-red-200">Panel científico del Grupo El Kernel</p>
                    <p class="mt-1 text-sm font-black leading-tight">Tres ponencias sobre análisis numérico, sistemas no lineales y optimización</p>
                </div>
            </section>
        `:`
        <section class="bg-slate-100 p-3 md:p-5" aria-label="Registro fotográfico del panel científico">
            <div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                ${$a.map((a,t)=>`
                    <figure class="${t===0?"col-span-2 row-span-2 min-h-[280px] md:min-h-[360px]":"h-32 md:h-[174px]"} overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                        <img
                            src="${a}"
                            alt="Registro fotográfico ${t+1} del panel científico del Grupo El Kernel en el XXI CIC 2026"
                            class="h-full w-full object-cover"
                            loading="${t===0?"eager":"lazy"}"
                        />
                    </figure>
                `).join("")}
            </div>
        </section>
    `}function po(e){return e?"":`
        <section class="grid grid-cols-1 gap-3 border-t border-slate-200 bg-white px-4 py-5 md:grid-cols-3 md:px-7">
            ${co.map((a,t)=>`
                <article class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p class="text-[10px] font-black uppercase tracking-[0.16em] text-[#b21722]">Ponencia ${t+1}</p>
                    <h3 class="mt-2 text-sm font-black leading-tight text-[#082f5b]">${a.nombre}</h3>
                    <p class="mt-2 text-xs leading-relaxed text-slate-600">${a.tema}</p>
                </article>
            `).join("")}
        </section>
    `}function ba({compacto:e=!1}={}){return`
        <div class="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white text-[#082f5b] shadow-xl" aria-label="Registro del panel científico del Grupo El Kernel en el XXI Congreso Internacional de Investigación Científica 2026">
            <header class="relative overflow-hidden bg-gradient-to-r from-[#082f5b] via-[#0b4a87] to-[#082f5b] px-4 py-5 text-white md:px-7 md:py-7">
                <div class="absolute -right-10 -top-14 h-40 w-40 rounded-full border-[18px] border-red-500/25"></div>
                <div class="relative z-10 flex items-center justify-between gap-4">
                    <div class="flex min-w-0 items-center gap-3">
                        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md md:h-14 md:w-14">
                            <img src="${ze}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" />
                        </span>
                        <div class="min-w-0">
                            <p class="text-[9px] font-black uppercase tracking-[0.2em] text-sky-200 md:text-[11px]">Grupo de Investigación El Kernel</p>
                            <p class="truncate text-base font-black md:text-xl">Panel científico</p>
                        </div>
                    </div>
                    <span class="rounded-full border border-red-200/40 bg-red-600 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white md:text-[11px]">1 de julio de 2026</span>
                </div>

                <div class="relative z-10 mt-5">
                    <p class="text-xs font-black uppercase tracking-[0.18em] text-red-200 md:text-sm">Gobierno de la República Dominicana · MESCyT</p>
                    <h2 class="mt-2 ${e?"text-3xl":"text-4xl md:text-6xl"} font-black leading-[0.95]">XXI CIC 2026</h2>
                    <p class="mt-3 max-w-4xl ${e?"text-sm":"text-base md:text-xl"} font-black leading-tight">XXI Congreso Internacional de Investigación Científica</p>
                    <p class="mt-2 text-xs font-semibold text-sky-100 md:text-sm">Semana Dominicana de Ciencia y Tecnología 2026 · Santo Domingo, República Dominicana</p>
                </div>
            </header>

            ${uo(e)}
            ${po(e)}

            <footer class="bg-[#082f5b] px-4 py-4 text-white md:px-7">
                <div class="flex flex-col gap-2 text-[10px] font-semibold sm:flex-row sm:items-end sm:justify-between md:text-xs">
                    <span><strong>Formato:</strong> panel científico integrado por tres ponencias · duración aproximada: una hora</span>
                    <span class="font-black text-red-200">MESCyT · XXI CIC 2026</span>
                </div>
            </footer>
        </div>
    `}function se(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function mo(e){if(e?.visualType==="mmehb-2026")return ma();if(e?.visualType==="mescyt-cic-2026")return ba();const a=e?.imageFit==="cover"?"object-cover":"object-contain";return e?.image?`
            <img
                src="${se(e.image)}"
                alt="${se(e.imageAlt||e.title)}"
                class="h-full max-h-[680px] w-full rounded-2xl ${a}"
                loading="eager"
            />
        `:'<div class="flex h-full w-full items-center justify-center font-bold text-slate-400">Imagen no disponible</div>'}function bo(e=null){return e?`
        <section class="w-full px-4 py-10 sm:px-6 md:py-14 lg:px-10" aria-labelledby="titulo-noticia-destacada">
            <div class="mx-auto grid max-w-[1600px] grid-cols-1 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
                <div class="min-h-[520px] bg-slate-100 p-4 md:p-6 lg:min-h-[680px]">
                    ${mo(e)}
                </div>

                <div class="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                    <div class="mb-5 flex flex-wrap items-center gap-3">
                        <span class="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#0b5963]">${se(e.category||"Noticia destacada")}</span>
                        <span class="text-sm font-bold text-slate-500">${se(e.date)}</span>
                    </div>

                    <h2 id="titulo-noticia-destacada" class="text-3xl font-black leading-tight text-slate-950 md:text-5xl">${se(e.title)}</h2>
                    <p class="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">${se(e.excerpt)}</p>

                    ${Array.isArray(e.tags)&&e.tags.length?`<div class="mt-6 flex flex-wrap gap-2">${e.tags.map(a=>`<span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">${se(a)}</span>`).join("")}</div>`:""}

                    <button type="button" data-news-btn="${se(e.id)}" class="mt-8 inline-flex self-start items-center justify-center gap-2 rounded-xl bg-[#0b5963] px-6 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#063e46]">
                        Leer noticia destacada →
                    </button>
                </div>
            </div>
        </section>
    `:""}function ae(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function go(e){return e==="mmehb-2026"?ma({compacto:!0}):e==="mescyt-cic-2026"?ba({compacto:!0}):null}function xo({id:e,title:a,date:t,image:i,imageAlt:o,excerpt:r,category:s="Noticia",imageFit:n="contain",visualType:d="image"}){const b=n==="cover"?"object-cover":"object-contain",p=go(d),u=p?"h-[430px] md:h-[500px]":"h-64 md:h-72 2xl:h-96",f=p||(i?`
            <img
                src="${ae(i)}"
                alt="${ae(o||a)}"
                class="h-full w-full ${b} rounded-xl"
                loading="lazy"
            />
          `:`
            <div class="flex h-full w-full items-center justify-center font-bold text-slate-400">
                Imagen no disponible
            </div>
          `);return`
        <article
            data-news-card="${ae(e)}"
            class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div class="${u} flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 p-3">
                ${f}
            </div>

            <div class="flex flex-1 flex-col space-y-3 p-5">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <span class="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#0b5963]">
                        ${ae(s)}
                    </span>
                    <span class="text-sm font-semibold text-slate-500">${ae(t)}</span>
                </div>

                <h3 class="text-lg font-black leading-tight text-slate-900 2xl:text-2xl">${ae(a)}</h3>
                <p class="text-sm leading-relaxed text-slate-600 2xl:text-xl">${ae(r)}</p>

                <button
                    type="button"
                    data-news-btn="${ae(e)}"
                    aria-label="Ver detalles de la noticia ${ae(a)}"
                    class="mt-auto self-start font-black text-[#0b5963] transition hover:text-[#063e46] hover:underline 2xl:text-xl"
                >
                    Más detalles →
                </button>
            </div>
        </article>
    `}function fo(e=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${e.map(i=>xo(i)).join("")}
            </div>
        </section>
    `}function vo(){const e=encodeURIComponent("Propuesta de noticia para El Kernel"),a=encodeURIComponent(`Saludos,

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
    `}function ho(e=[]){return[...e].sort((a,t)=>a.featured&&!t.featured?-1:!a.featured&&t.featured?1:0)}function yo(){const e=document.createElement("section");e.className="w-full bg-slate-100 font-sans";const a=new Set([Ge.id,Ke.id]),t=ho([Ge,Ke,...at.filter(o=>!a.has(o.id))]),i=t.find(o=>o.featured)||t[0];return e.innerHTML=`
        <header class="bg-[#071820] px-4 py-10 text-white md:px-8 md:py-14">
            <div class="mx-auto max-w-[1600px]">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Actualidad, eventos y resultados</p>
                <h1 class="mt-3 text-4xl font-black md:text-6xl">Noticias del Grupo El Kernel</h1>
                <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Participaciones internacionales, publicaciones, defensas, proyectos, actividades de formación y transferencia científica.</p>
            </div>
        </header>
        ${bo(i)}
        ${fo(t)}
        ${vo()}
    `,e}function xe(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function wo(e){return e==="mmehb-2026"?ma():e==="mescyt-cic-2026"?ba():""}function ko({title:e,date:a,category:t,visualType:i,content:o={paragraphs:[],list:[]},articleURL:r}){const s=(o.paragraphs||[]).map(b=>`<p>${xe(b)}</p>`).join(""),n=(o.list||[]).length?`<ul class="space-y-3">${o.list.map(b=>`<li class="flex items-start gap-3"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0b5963]"></span><span>${xe(b)}</span></li>`).join("")}</ul>`:"",d=wo(i);return`
        <div role="dialog" aria-modal="true" aria-labelledby="titulo-modal-noticia" id="newsModal" class="fixed inset-0 z-[500] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm md:p-6">
            <article class="flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl">
                <header class="relative border-b border-slate-200 bg-[#071820] px-6 py-6 text-white md:px-9">
                    <div class="pr-12">
                        <div class="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-widest text-cyan-200">
                            <span>${xe(t||"Noticia")}</span>
                            <span aria-hidden="true">·</span>
                            <span>${xe(a||"")}</span>
                        </div>
                        <h2 id="titulo-modal-noticia" class="mt-3 text-2xl font-black leading-tight md:text-4xl">${xe(e)}</h2>
                    </div>
                    <button type="button" data-close-modal aria-label="Cerrar noticia" class="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-2xl font-black text-white transition hover:bg-white hover:text-slate-950">×</button>
                </header>

                <div class="flex-1 overflow-y-auto px-5 py-6 md:px-9 md:py-8">
                    ${d?`<div class="mb-7">${d}</div>`:""}
                    <div class="space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">${s}</div>
                    ${n?`<section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-7"><h3 class="mb-5 text-xl font-black text-slate-950">Datos principales</h3>${n}</section>`:""}
                </div>

                <footer class="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-5 py-5 sm:flex-row sm:justify-end md:px-9">
                    ${r?`<a href="${xe(r)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl bg-[#0b5963] px-5 py-3 font-black text-white transition hover:bg-[#063e46]">Consultar sitio oficial</a>`:""}
                    <button type="button" data-close-modal class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100">Cerrar</button>
                </footer>
            </article>
        </div>
    `}const Ao=new Set([Ge.id,Ke.id]),Eo=Object.freeze([Ge,Ke,...at.filter(e=>!Ao.has(e.id))]);let Re=null;function Co(e){e&&e.addEventListener("click",a=>{const t=a.target.closest("[data-news-btn]");if(!t||!e.contains(t))return;const i=t.dataset.newsBtn||t.dataset.newsCard,o=Eo.find(r=>String(r.id)===String(i));if(!o){console.warn("No se encontró la noticia con id:",i);return}So(o,t)})}function So(e,a){Re?.({restaurarFoco:!1});const t=document.createElement("div");t.innerHTML=ko(e);const i=t.firstElementChild;if(!i){console.warn("No se pudo crear el modal de noticia.");return}const o=document.body.style.overflow;document.body.appendChild(i),document.body.style.overflow="hidden";const r=a instanceof HTMLElement?a:document.activeElement;let s=!1;const n=({restaurarFoco:p=!0}={})=>{s||(s=!0,i.remove(),document.body.style.overflow=o,document.removeEventListener("keydown",b),window.removeEventListener("hashchange",d),Re===n&&(Re=null),p&&r instanceof HTMLElement&&r.isConnected&&r.focus())},d=()=>{n({restaurarFoco:!1})},b=p=>{if(p.key==="Escape"){p.preventDefault(),n();return}if(p.key!=="Tab")return;const u=Array.from(i.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(w=>w instanceof HTMLElement&&w.getAttribute("aria-hidden")!=="true");if(!u.length){p.preventDefault(),i.focus();return}const f=u[0],h=u[u.length-1];p.shiftKey&&document.activeElement===f?(p.preventDefault(),h.focus()):!p.shiftKey&&document.activeElement===h&&(p.preventDefault(),f.focus())};i.querySelectorAll("[data-close-modal]").forEach(p=>{p.addEventListener("click",n)}),i.addEventListener("click",p=>{p.target===i&&n()}),Re=n,document.addEventListener("keydown",b),window.addEventListener("hashchange",d),i.querySelector("[data-close-modal]")?.focus()}function $o(){const e=yo();return Co(e),e}const Mo=Object.freeze([{patron:/^mathematics and computers in simulation$/i,editorial:"Elsevier B.V. (sello North-Holland)",issn:"0378-4754 · eISSN 1872-7166",modelo:"Híbrido; admite publicación en acceso abierto",descripcion:"Revista oficial de IMACS sobre modelización, simulación y computación científica"},{patron:/^numerical algorithms$/i,editorial:"Springer Nature",issn:"ISSN de la revista disponible en Springer Nature Link",modelo:"Modelo híbrido",descripcion:"Revista especializada en algoritmos numéricos y computación científica"},{patron:/^mediterranean journal of mathematics$/i,editorial:"Springer Nature",issn:"ISSN 1660-5446",modelo:"Modelo híbrido",descripcion:"Revista internacional de matemática pura y aplicada"},{patron:/^bulletin of the malaysian mathematical sciences society$/i,editorial:"Springer Nature",issn:"Información bibliográfica disponible en Springer Nature Link",modelo:"Modelo híbrido",descripcion:"Revista de la Malaysian Mathematical Sciences Society"},{patron:/^mathematische nachrichten$/i,editorial:"Wiley-VCH",issn:"ISSN 0025-584X · eISSN 1522-2616",modelo:"Publicación periódica de Wiley",descripcion:"Revista de amplio alcance en matemática pura y aplicada"},{patron:/^journal of computational methods in sciences and engineering$/i,editorial:"SAGE Publishing para el artículo registrado en 2025",issn:"Información editorial según la edición del artículo",modelo:"Revista de métodos computacionales en ciencias e ingeniería",descripcion:"La gestión editorial de la revista cambió en enero de 2026"},{patron:/^mathematics$/i,editorial:"MDPI",issn:"eISSN 2227-7390",modelo:"Acceso abierto · publicación semimensual",descripcion:"Revista internacional revisada por pares en ciencias matemáticas"},{patron:/^algorithms$/i,editorial:"MDPI",issn:"eISSN 1999-4893",modelo:"Acceso abierto · publicación mensual",descripcion:"Revista de algoritmos, matemática computacional y aplicaciones"},{patron:/^computation$/i,editorial:"MDPI",issn:"eISSN 2079-3197",modelo:"Acceso abierto · publicación mensual",descripcion:"Revista de ciencia e ingeniería computacional"}]);function Ma(e=""){return Mo.find(a=>a.patron.test(String(e).trim()))||{editorial:"Editorial no especificada en el registro interno",issn:"ISSN no registrado",modelo:"Consultar la página oficial de la revista",descripcion:"Publicación científica revisada por pares"}}function N(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function tt(e){return e?.name||e?.title||"Investigador"}function ta(e){return e?.title||e?.tile||"Revista no especificada"}function it(e){return String(e?.DOI||e?.doi||"").trim()}function jo(e){const a=it(e);return e?.url?e.url:a?a.startsWith("http")?a:`https://doi.org/${a}`:"#"}function zo(e){return[...e?.publicaciones||[]].sort((a,t)=>Number(t.year||0)-Number(a.year||0)||String(a.contenido||"").localeCompare(String(t.contenido||"")))}function ia(e,a,t=""){return`
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3 ${t}">
            <p class="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">${N(e)}</p>
            <p class="mt-1 text-sm font-bold leading-snug text-slate-800">${N(a)}</p>
        </div>
    `}function Lo(e,a=!1){const t=tt(e),i=e.publicaciones||[],o=Math.max(...i.map(r=>Number(r.year||0)),0)||"";return`
        <button data-id="${e.id}" type="button"
            class="group w-full rounded-2xl border p-4 text-left transition-all ${a?"border-[#0f5b5d] bg-[#0f5b5d] text-white shadow-xl":"border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg"}">
            <div class="flex items-center gap-4">
                <img src="${e.img}" alt="${N(t)}" class="h-16 w-16 shrink-0 rounded-2xl border-2 object-cover ${a?"border-white/70":"border-slate-100"}">
                <div class="min-w-0 flex-1">
                    <h3 class="font-black leading-tight">${N(t)}</h3>
                    <p class="mt-1 text-xs font-bold ${a?"text-emerald-100":"text-slate-500"}">${i.length} publicación${i.length===1?"":"es"}${o?` · Última: ${o}`:""}</p>
                    ${e.area?`<p class="mt-2 line-clamp-2 text-xs leading-relaxed ${a?"text-white/75":"text-slate-500"}">${N(e.area)}</p>`:""}
                </div>
            </div>
        </button>
    `}function Io(e){if(!e)return'<div class="flex h-full items-center justify-center text-white">No hay investigador seleccionado.</div>';const a=tt(e),t=zo(e),i=t.map(d=>Number(d.year)).filter(Boolean),o=[...new Set(t.map(d=>d.q).filter(Boolean))],r=[...new Set(t.map(ta).filter(Boolean))],s=[...new Set(t.map(d=>Ma(ta(d)).editorial))],n=t.map(d=>{const b=ta(d),p=it(d),u=Ma(b);return`
            <article class="mb-5 rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl md:p-6">
                <div class="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p class="text-[11px] font-black uppercase tracking-[0.18em] text-[#805615]">Revista científica</p>
                        <h3 class="mt-1 text-xl font-black leading-tight text-[#071820]">${N(b)}</h3>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">${N(u.descripcion)}</p>
                    </div>
                    <div class="flex shrink-0 gap-2">
                        <span class="rounded-full bg-[#071820] px-3 py-1.5 text-xs font-black text-white">${N(d.year)}</span>
                        <span class="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-900">${N(d.q||"S/C")}</span>
                    </div>
                </div>

                <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    ${ia("Editorial",u.editorial)}
                    ${ia("Identificación",u.issn)}
                    ${ia("Modelo de publicación",u.modelo)}
                </div>

                <h4 class="mt-6 text-base font-black leading-snug text-slate-950 md:text-lg">${N(d.contenido)}</h4>
                <p class="mt-4 text-sm leading-relaxed text-slate-600"><span class="font-black text-[#0f5b5d]">Autores:</span> ${N(d.autores)}</p>
                ${p?`<p class="mt-3 break-all font-mono text-xs font-bold text-slate-500"><span class="font-sans font-black text-slate-700">DOI:</span> ${N(p)}</p>`:""}

                <div class="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-4">
                    ${p?`<a href="${N(jo(d))}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-[#0f5b5d] px-4 py-2 text-sm font-black text-white hover:bg-[#0a4648]">Abrir DOI <span aria-hidden="true">↗</span></a>`:'<span class="text-sm font-bold text-slate-400">DOI no disponible</span>'}
                    ${d.pdf?`<a href="${N(d.pdf)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-black text-slate-700 hover:border-[#0f5b5d] hover:text-[#0f5b5d]">Descargar PDF</a>`:""}
                </div>
            </article>
        `}).join("");return`
        <div class="flex h-full flex-col text-white">
            <div class="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div class="flex items-start gap-4">
                    <img src="${e.img}" alt="${N(a)}" class="hidden h-16 w-16 rounded-2xl border-2 border-emerald-300 object-cover shadow-lg sm:block">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.18em] text-[#efc86f]">Producción científica por investigador</p>
                        <h2 id="titulo-detalle-publicaciones" class="mt-1 text-xl font-black md:text-2xl">${N(a)}</h2>
                        ${e.area?`<p class="mt-2 text-sm leading-relaxed text-slate-300">${N(e.area)}</p>`:""}
                    </div>
                </div>
                <button id="close-modal" type="button" aria-label="Cerrar publicaciones" class="text-3xl text-white hover:text-emerald-200 md:hidden">×</button>
            </div>

            <div class="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs font-black uppercase text-emerald-200">Publicaciones</p><p class="mt-1 text-2xl font-black">${t.length}</p></div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs font-black uppercase text-emerald-200">Periodo</p><p class="mt-1 text-lg font-black">${i.length?`${Math.min(...i)}–${Math.max(...i)}`:"—"}</p></div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs font-black uppercase text-emerald-200">Cuartiles</p><p class="mt-1 text-lg font-black">${o.length?o.join(" · "):"—"}</p></div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs font-black uppercase text-emerald-200">Editoriales</p><p class="mt-1 text-2xl font-black">${s.length}</p></div>
            </div>

            <section class="mb-5 rounded-2xl border border-white/10 bg-white/5 p-4" aria-label="Revistas registradas">
                <p class="text-[10px] font-black uppercase tracking-[0.18em] text-[#efc86f]">Revistas registradas</p>
                <p class="mt-2 text-sm leading-relaxed text-slate-300">${r.map(N).join(" · ")||"—"}</p>
            </section>

            <div class="flex-1 overflow-y-auto pr-2 custom-scrollbar">${n||'<div class="rounded-2xl bg-white p-6 text-center text-slate-600">No hay publicaciones registradas.</div>'}</div>
        </div>
    `}function Po(){let e=ne[0]?.id||1,a=!1,t=null,i=null,o="",r=null,s=!1;const n=document.createElement("section");n.className="w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";function d(l){return String(l?.DOI||l?.doi||"").trim().toLowerCase()}function b(l){return String(l?.journal||l?.title||l?.tile||"").trim()}function p(l){return String(l?.articleTitle||l?.contenido||"").trim()}function u(l){return String(l?.q||l?.quartile||"").trim().toUpperCase()}function f(l){return d(l)||[l?.year||"",b(l),p(l)].join("-").trim().toLowerCase()}function h(){const l=new Map;return ne.forEach(m=>(m.publicaciones||[]).forEach(c=>{const x=f(c);x&&!l.has(x)&&l.set(x,c)})),[...l.values()]}function w(){const l=h(),m=l.map(c=>Number(c.year)).filter(Boolean);return{total:l.length,investigadores:L.integrantes,q1:l.filter(c=>u(c)==="Q1").length,periodo:m.length?`${Math.min(...m)}–${Math.max(...m)}`:"—"}}function A(){return ne.find(l=>Number(l.id)===Number(e))||ne[0]}const y=()=>{i?.abort(),i=null,s&&(document.body.style.overflow=o,o="",s=!1)},g=({restaurarFoco:l=!0,renderizar:m=!0}={})=>{const c=r;y(),a=!1,m&&(C(),l&&c!==null&&window.requestAnimationFrame(()=>{n.querySelector(`[data-id="${c}"]`)?.focus()}))},E=()=>{if(!a||window.innerWidth>=768)return;const l=n.querySelector("#detalle-container");if(!l)return;o=document.body.style.overflow,document.body.style.overflow="hidden",s=!0,i=new AbortController;const m={signal:i.signal},c=()=>[...l.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(x=>x instanceof HTMLElement&&x.getAttribute("aria-hidden")!=="true");document.addEventListener("keydown",x=>{if(x.key==="Escape"){x.preventDefault(),g();return}if(x.key!=="Tab")return;const v=c();if(!v.length){x.preventDefault();return}const k=v[0],D=v.at(-1);x.shiftKey&&document.activeElement===k?(x.preventDefault(),D.focus()):!x.shiftKey&&document.activeElement===D&&(x.preventDefault(),k.focus())},m),window.addEventListener("hashchange",()=>{g({restaurarFoco:!1,renderizar:!1})},m),l.addEventListener("click",x=>{x.target===l&&g()},m),l.querySelector("#close-modal")?.addEventListener("click",()=>g(),m),l.querySelector("#close-modal")?.focus()},C=()=>{y();const l=A(),m=w(),c=window.innerWidth<768&&!a,x=window.innerWidth<768&&a?'role="dialog" aria-modal="true" aria-labelledby="titulo-detalle-publicaciones"':"",v=[[L.articulosAcumuladosTexto,L.etiquetaArticulos],[m.investigadores,"Integrantes del grupo"],[m.total,"Registros únicos con DOI"],[m.periodo,"Periodo registrado"]];n.innerHTML=`
            <div class="mx-auto max-w-[1600px]">
                <header class="overflow-hidden rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-12">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                        <div>
                            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Producción científica del Grupo El Kernel</p>
                            <h1 class="mt-3 text-4xl font-black leading-tight md:text-6xl">Publicaciones con rigor, trazabilidad e impacto</h1>
                            <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Explore la producción por investigador con el nombre completo de la revista, editorial, identificación bibliográfica, modelo de publicación, año, cuartil, autores y DOI.</p>
                        </div>
                        <div>
                            <div class="grid grid-cols-2 gap-3">
                                ${v.map(([k,D])=>`<article class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-2xl font-black text-white md:text-3xl">${k}</p><p class="mt-1 text-xs font-bold uppercase tracking-wide text-emerald-200">${D}</p></article>`).join("")}
                            </div>
                            <p id="kernel-career-publications-note" class="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs leading-relaxed text-slate-300">
                                ${L.descripcionArticulos}. ${L.notaArticulos}
                            </p>
                        </div>
                    </div>
                </header>

                <div class="mt-8 grid min-h-[720px] grid-cols-1 gap-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl md:grid-cols-[0.78fr_1.5fr] md:p-6">
                    <aside class="max-h-[430px] overflow-y-auto rounded-3xl border border-slate-200 bg-slate-50 p-4 custom-scrollbar md:max-h-none">
                        <p class="text-xs font-black uppercase tracking-[0.18em] text-[#805615]">Autores del grupo</p>
                        <h2 class="mt-1 text-2xl font-black text-slate-950">Seleccione un investigador</h2>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">La ficha muestra revistas, editoriales, cuartiles, periodo, DOI y acceso al documento cuando está disponible.</p>
                        <div class="mt-5 flex flex-col gap-4">${ne.map(k=>Lo(k,Number(k.id)===Number(e))).join("")}</div>
                    </aside>

                    <div id="detalle-container" ${x} class="fixed inset-0 z-[350] items-center justify-center bg-slate-950/80 p-4 md:relative md:inset-auto md:z-0 md:flex md:bg-transparent md:p-0 ${c?"hidden":"flex"}">
                        <div class="h-[88%] w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#071820] p-5 shadow-2xl md:h-full md:max-w-none md:p-6">${Io(l)}</div>
                    </div>
                </div>
            </div>
        `,n.querySelectorAll("[data-id]").forEach(k=>{k.onclick=()=>{e=Number(k.dataset.id),window.innerWidth<768&&(a=!0,r=k.dataset.id),C()}}),E()};return window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{window.innerWidth>=768&&(y(),a=!1),C()},120)}),C(),n}function Do(){return Po()}function V(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ro(e){return Y.find(a=>a.id===e)||Y[0]}function oa(e=[]){return e.map(a=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${V(a)}</span>
        </li>
    `).join("")}function qo(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${V(a)}
        </span>
    `).join("")}function To(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${V(a)}
        </span>
    `).join("")}function Oo(e,a=!1){return`
        <button 
            type="button"
            data-linea-id="${e.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${a?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${V(e.categoria)}
                </span>

                <span class="inline-block ${a?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${V(e.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${V(e.title)}
            </h3>

            <p class="text-sm leading-relaxed ${a?"text-white/90":"text-slate-500"}">
                ${V(e.desarrollo).slice(0,185)}${String(e.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function No(e){const a=e.proyectosAsociados&&e.proyectosAsociados.length>0,t=e.publicacionesClave&&e.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${V(e.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${V(e.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${V(e.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${V(e.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${V(e.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${V(e.prioridad)}</p>
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
                            ${oa(e.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${To(e.investigadores)}
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
                                    ${oa(e.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${t?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${oa(e.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${qo(e.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function Fo(){const e=new Set(Y.map(i=>i.categoria)),a=Y.filter(i=>i.proyectosAsociados?.length>0).length,t=Y.filter(i=>i.publicacionesClave?.length>0).length;return{total:Y.length,categorias:e.size,conProyectos:a,conPublicaciones:t}}function Uo(){let e=Y[0]?.id||1;const a=document.createElement("section");a.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const t=()=>{const i=Ro(e),o=Fo();a.innerHTML=`
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
                        ${Y.map(r=>Oo(r,r.id===e)).join("")}
                    </div>
                </aside>

                <div>
                    ${No(i)}
                </div>
            </div>
        `,a.querySelectorAll("[data-linea-id]").forEach(r=>{r.onclick=()=>{e=parseInt(r.dataset.lineaId),t()}})};return t(),a}function Bo(){return Uo()}const Vo=[...Se,..._e];function I(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ca(e=[],a="text-slate-600"){return e.map(t=>`
        <li class="flex gap-3 text-sm leading-relaxed ${a} md:text-base">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b37a2a]"></span>
            <span>${I(t)}</span>
        </li>
    `).join("")}function ot(e=[]){return e.map(a=>`
        <span class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-[#0f5b5d]">
            ${I(a)}
        </span>
    `).join("")}function qe(e,a,t=""){return`
        <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-2xl font-black text-white md:text-3xl">${I(e)}</p>
            <p class="mt-1 text-xs font-black uppercase tracking-wide text-emerald-200">${I(a)}</p>
            ${t?`<p class="mt-2 text-xs leading-relaxed text-slate-300">${I(t)}</p>`:""}
        </article>
    `}function _(e,a){return a?`
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-[11px] font-black uppercase tracking-[0.14em] text-[#805615]">${I(e)}</p>
            <p class="mt-1 text-sm font-black leading-snug text-slate-950 md:text-base">${I(a)}</p>
        </div>
    `:""}function _o(e,a){const t=e.categoria==="aprobado";return`
        <button
            type="button"
            data-proyecto-id="${e.id}"
            class="w-full rounded-2xl border p-5 text-left transition ${a?"border-[#0f5b5d] bg-[#0f5b5d] text-white shadow-xl":"border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg"}"
        >
            <div class="mb-3 flex flex-wrap gap-2">
                <span class="rounded-full ${t?"bg-emerald-200 text-emerald-950":"bg-[#d5a54a] text-[#06141a]"} px-3 py-1 text-[11px] font-black uppercase">
                    ${t?"Aprobado":"En evaluación"}
                </span>
                <span class="rounded-full ${a?"bg-white/10 text-white":"bg-slate-100 text-slate-600"} px-3 py-1 text-[11px] font-black uppercase">
                    ${I(e.convocatoria)}
                </span>
            </div>
            <h3 class="font-black leading-tight">${I(e.title)}</h3>
            <p class="mt-3 text-sm leading-relaxed ${a?"text-white/75":"text-slate-500"}">${I(e.enfoque)}</p>
            <p class="mt-4 text-xs font-bold ${a?"text-emerald-100":"text-slate-500"}">${I(e.institucion)} · ${I(e.duracion)}</p>
        </button>
    `}function st(e){const a=[...e.equipo||[]],t=[...e.asesores||[],...e.serviciosProfesionalesEspecializados||[]];return`
        <section class="mt-8 rounded-3xl bg-[#071820] p-6 text-white">
            <p class="text-xs font-black uppercase tracking-[0.18em] text-[#efc86f]">Personas vinculadas</p>
            ${a.length?`<div class="mt-4 flex flex-wrap gap-2">${a.map(i=>`<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold">${I(i)}</span>`).join("")}</div>`:""}
            ${t.length?`<div class="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-2">${t.map(i=>`
                <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p class="text-xs font-black uppercase text-emerald-200">${I(i.rol)}</p>
                    <p class="mt-1 font-black">${I(i.nombre)}</p>
                    <p class="mt-2 text-xs leading-relaxed text-slate-300">${I(i.descripcion)}</p>
                </article>
            `).join("")}</div>`:""}
        </section>
    `}function Go(e){return`
        <article class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <header class="relative overflow-hidden bg-[#071820] px-6 py-8 text-white md:px-9 md:py-10">
                <div class="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-400/10 blur-2xl"></div>
                <div class="relative">
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full bg-emerald-200 px-3 py-1 text-xs font-black uppercase text-emerald-950">Proyecto aprobado</span>
                        <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase">${I(e.convocatoria)}</span>
                    </div>
                    <h2 class="mt-5 max-w-4xl text-2xl font-black leading-tight md:text-4xl">${I(e.title)}</h2>
                    <p class="mt-4 max-w-4xl leading-relaxed text-slate-300">${I(e.contenido)}</p>
                </div>
            </header>
            <div class="p-6 md:p-9">
                <section class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    ${_("Entidad de realización",e.institucion)}
                    ${_("Entidad financiadora",e.entidadFinanciadora)}
                    ${_("Inicio y duración",`${e.fechaInicio} · ${e.duracion}`)}
                    ${_("Cuantía registrada",e.cuantia)}
                </section>

                <section class="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <h3 class="text-xl font-black text-[#071820]">Datos verificados</h3>
                        <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            ${_("Código",e.codigo)}
                            ${_("Tipo",e.tipo)}
                            ${_("Responsable científico",e.responsable)}
                            ${_("Participación",e.participacion)}
                        </div>
                        <div class="mt-4 rounded-2xl border-l-4 border-[#0f5b5d] bg-emerald-50 p-4 text-sm leading-relaxed text-slate-700">
                            <strong>Fuente:</strong> ${I(e.fuente)}
                            ${e.fuenteUrl?`<div class="mt-3"><a href="${I(e.fuenteUrl)}" target="_blank" rel="noopener noreferrer" class="font-black text-[#0f5b5d] underline">Consultar fuente institucional ↗</a></div>`:""}
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-black text-[#071820]">Alcance y relevancia</h3>
                        <p class="mt-3 leading-relaxed text-slate-600">${I(e.contexto)}</p>
                        <ul class="mt-5 space-y-3">${ca(e.impacto)}</ul>
                    </div>
                </section>

                ${st(e)}
                <div class="mt-7 flex flex-wrap gap-2">${ot(e.etiquetas)}</div>
            </div>
        </article>
    `}function Ko(e){return`
        <article class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <header class="relative overflow-hidden bg-[#071820] px-6 py-8 text-white md:px-9 md:py-10">
                <div class="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-amber-400/10 blur-2xl"></div>
                <div class="relative">
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full bg-[#d5a54a] px-3 py-1 text-xs font-black uppercase text-[#06141a]">Propuesta en evaluación</span>
                        <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase">${I(e.convocatoria)}</span>
                    </div>
                    <h2 class="mt-5 max-w-4xl text-2xl font-black leading-tight md:text-4xl">${I(e.title)}</h2>
                    <p class="mt-4 max-w-4xl leading-relaxed text-slate-300">${I(e.contenido)}</p>
                </div>
            </header>
            <div class="p-6 md:p-9">
                <section class="grid grid-cols-2 gap-3 md:grid-cols-4">
                    ${_("Institución",e.institucion)}
                    ${_("Tipo",e.tipo)}
                    ${_("Duración",e.duracion)}
                    ${_("Estado",e.estado)}
                </section>
                <section class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div>
                        <h3 class="text-xl font-black text-[#071820]">Contexto y línea</h3>
                        <p class="mt-3 leading-relaxed text-slate-600">${I(e.contexto)}</p>
                        <p class="mt-4 rounded-2xl border-l-4 border-[#0f5b5d] bg-emerald-50 p-4 text-sm font-bold text-slate-700">${I(e.linea)}</p>
                    </div>
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div><h3 class="text-lg font-black text-[#071820]">Objetivos</h3><ul class="mt-3 space-y-3">${ca(e.objetivos)}</ul></div>
                        <div><h3 class="text-lg font-black text-[#071820]">Resultados esperados</h3><ul class="mt-3 space-y-3">${ca(e.resultados)}</ul></div>
                    </div>
                </section>
                ${st(e)}
                <div class="mt-7 flex flex-wrap gap-2">${ot(e.etiquetas)}</div>
            </div>
        </article>
    `}function Ho(e){return e.categoria==="aprobado"?Go(e):Ko(e)}function Jo(){let e="aprobado",a=Se[0]?.id||Vo[0]?.id;const t=document.createElement("section");t.className="w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";const i=()=>e==="aprobado"?Se:_e,o=()=>{const r=i(),s=r.find(n=>n.id===a)||r[0];s&&s.id!==a&&(a=s.id),t.innerHTML=`
            <div class="mx-auto max-w-[1600px]">
                <header class="rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-12">
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Investigación competitiva, innovación y transferencia</p>
                    <h1 class="mt-3 text-4xl font-black md:text-6xl">Trayectoria en proyectos y propuestas estratégicas</h1>
                    <p class="mt-5 max-w-5xl text-base leading-relaxed text-slate-300 md:text-lg">Presentamos una selección de diez proyectos competitivos aprobados de los currículos de Alicia Cordero Barbero y Juan Ramón Torregrosa Sánchez, junto con las propuestas actuales del Grupo El Kernel. Los proyectos aprobados y las propuestas en evaluación se muestran en categorías separadas.</p>
                    <div class="mt-7 grid grid-cols-2 gap-3 xl:grid-cols-4">
                        ${qe(de.participacionesAcumuladas,"Participaciones registradas","24 en el perfil de Alicia y 34 en el de Juan Ramón")}
                        ${qe(de.proyectosDestacados,"Proyectos aprobados destacados","Selección mostrada con información verificable")}
                        ${qe(de.registrosNoMostrados,"Registros adicionales","Contabilizados, pero no desplegados")}
                        ${qe(de.propuestasPendientes,"Propuestas en evaluación","No se presentan como financiadas")}
                    </div>
                    <p class="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-300">${I(de.nota)}</p>
                </header>

                <div class="mt-6 flex flex-wrap gap-3" role="group" aria-label="Filtrar iniciativas por estado">
                    <button type="button" data-categoria="aprobado" class="rounded-xl px-5 py-3 text-sm font-black transition ${e==="aprobado"?"bg-[#0f5b5d] text-white shadow-lg":"border border-slate-300 bg-white text-slate-700"}">Proyectos aprobados (${Se.length})</button>
                    <button type="button" data-categoria="propuesta" class="rounded-xl px-5 py-3 text-sm font-black transition ${e==="propuesta"?"bg-[#0f5b5d] text-white shadow-lg":"border border-slate-300 bg-white text-slate-700"}">Propuestas FONDOCyT (${_e.length})</button>
                </div>

                <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[0.72fr_1.5fr]">
                    <aside class="max-h-[780px] overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-4 shadow-lg custom-scrollbar">
                        <p class="text-xs font-black uppercase tracking-[0.18em] text-[#805615]">Portafolio</p>
                        <h2 class="mt-1 text-2xl font-black text-slate-950">${e==="aprobado"?"Seleccione un proyecto aprobado":"Seleccione una propuesta"}</h2>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">${e==="aprobado"?`Se muestran ${de.proyectosDestacados} proyectos; ${de.registrosNoMostrados} registros adicionales permanecen contabilizados sin desplegarse.`:"Las propuestas se identifican expresamente como pendientes de decisión formal."}</p>
                        <div class="mt-5 space-y-4">${r.map(n=>_o(n,n.id===a)).join("")}</div>
                    </aside>
                    <div>${s?Ho(s):""}</div>
                </div>
            </div>
        `,t.querySelectorAll("[data-proyecto-id]").forEach(n=>{n.addEventListener("click",()=>{a=Number(n.dataset.proyectoId),o()})}),t.querySelectorAll("[data-categoria]").forEach(n=>{n.addEventListener("click",()=>{e=n.dataset.categoria,a=i()[0]?.id,o()})})};return o(),t}function Qo(){return Jo()}function Xo(){return`
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
    `}function Wo(){return`
    
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
            ${Xo()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function Yo(){const e=document.createElement("section");return e.classList.add("w-full","tabletBig:w-7xl"),e.innerHTML=`
    ${Wo()}
    `,e}function Zo(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",es)}async function es(e){e.preventDefault();const a=e.target,t=new FormData(a),i=Object.fromEntries(t.entries()),o=as(i);if(o.length>0){is(o);return}await os(a,i)}function as(e){const a=[];return e.nombre?.trim()||a.push("El nombre es obligatorio."),e.asunto?.trim()||a.push("El asunto es obligatorio."),e.mensaje?.trim()||a.push("El mensaje es obligatorio."),e.correo?.trim()?ts(e.correo)||a.push("El formato del correo no es válido."):a.push("El correo es obligatorio."),a}function ts(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function is(e){Ne(e[0],"error")}function Ne(e,a="success"){const t=document.querySelector(".custom-toast");t&&t.remove();const i=document.createElement("div");i.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,a==="success"?i.classList.add("bg-green-600"):i.classList.add("bg-red-600"),i.textContent=e,document.body.appendChild(i),setTimeout(()=>{i.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{i.classList.add("translate-x-full","opacity-0"),setTimeout(()=>i.remove(),300)},3e3)}async function os(e,a){const t=document.getElementById("submitBtn");t.disabled=!0,t.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)})).ok?(Ne("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),e.reset()):Ne("Hubo un problema al enviar el mensaje.","error")}catch{Ne("Error de conexión. Intenta nuevamente.","error")}t.disabled=!1,t.textContent="Enviar"}function ss(){const e=Yo();return setTimeout(()=>{Zo()},0),e}function rs(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-primer-input"),t=e.querySelector("#banner-primer-process"),i=e.querySelector("#banner-primer-clear"),o=e.querySelector("#banner-primer-message"),r=e.querySelector("#banner-primer-preview"),s=e.querySelector("#banner-primer-count"),n=e.querySelector("#banner-primer-download-1ac"),d=e.querySelector("#banner-primer-download-2pp");let b=[];function p(c,x="success"){o.textContent=c,o.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),x==="error"?o.classList.add("border-red-200","bg-red-50","text-red-800"):o.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function u(){o.textContent="",o.classList.add("hidden")}function f(c){return String(c).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function h(c){return String(c).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function w(c){const x=String(c).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return x.includes("	")?x.split("	").map(v=>v.trim()).filter(v=>v!==""):x.includes(";")?x.split(";").map(v=>v.trim()).filter(v=>v!==""):x.split(/\s+/).map(v=>v.trim()).filter(v=>v!=="")}function A(c){const x=c.split(/\r?\n/).map(M=>M.trim()).filter(Boolean),v=[],k=[],D=new Set;return x.forEach((M,q)=>{const P=q+1,T=w(M);if(T.length!==3){k.push(`Línea ${P}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const Z=f(T[0]),B=Number(h(T[1])),H=Number(h(T[2]));if(!/^A[0-9]{8}$/.test(Z)){k.push(`Línea ${P}: la matrícula "${Z}" no es válida. Debe tener el formato A00108671.`);return}if(D.has(Z)){k.push(`Línea ${P}: la matrícula ${Z} está repetida.`);return}if(!Number.isFinite(B)){k.push(`Línea ${P}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(H)){k.push(`Línea ${P}: la calificación 2PP no es numérica.`);return}if(B<0||B>15){k.push(`Línea ${P}: 1AC debe estar entre 0 y 15.`);return}if(H<0||H>20){k.push(`Línea ${P}: 2PP debe estar entre 0 y 20.`);return}const me=B+H;if(me>35){k.push(`Línea ${P}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}D.add(Z),v.push({matricula:Z,grade1AC:B,grade2PP:H,total:me})}),{records:v,errors:k}}function y(c){return Number.isInteger(c)?String(c):c.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function g(c){return String(c).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function E(c){if(c.length===0){r.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}r.innerHTML=c.map((x,v)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${v+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${g(x.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${y(x.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${y(x.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${y(x.total)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${c.length} estudiante${c.length===1?"":"s"}`}function C(c,x,v){return[["MATRICULA",v],...c.map(M=>[M.matricula,y(M[x])])].map(M=>M.join(";")).join(`\r
`)}function l(c,x){const k=new Blob(["\uFEFF"+c],{type:"text/csv;charset=utf-8;"}),D=URL.createObjectURL(k),M=document.createElement("a");M.href=D,M.download=x,document.body.appendChild(M),M.click(),M.remove(),window.setTimeout(()=>{URL.revokeObjectURL(D)},1e3)}function m(){b=[],a.value="",E([]),n.disabled=!0,d.disabled=!0,u(),a.focus()}return t.addEventListener("click",()=>{const c=a.value.trim();if(!c){b=[],E([]),n.disabled=!0,d.disabled=!0,p("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:x,errors:v}=A(c);if(v.length>0){b=[],E([]),n.disabled=!0,d.disabled=!0,p(v.join(" "),"error");return}b=x,E(b),n.disabled=!1,d.disabled=!1,p(`Los datos de ${x.length} estudiante${x.length===1?"":"s"} fueron validados correctamente.`)}),i.addEventListener("click",m),n.addEventListener("click",()=>{if(b.length===0)return;const c=C(b,"grade1AC","1AC");l(c,"Banner_APEC_Primer_Periodo_1AC.csv")}),d.addEventListener("click",()=>{if(b.length===0)return;const c=C(b,"grade2PP","2PP");l(c,"Banner_APEC_Primer_Periodo_2PP.csv")}),e}function ns(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-segundo-input"),t=e.querySelector("#banner-segundo-process"),i=e.querySelector("#banner-segundo-clear"),o=e.querySelector("#banner-segundo-message"),r=e.querySelector("#banner-segundo-preview"),s=e.querySelector("#banner-segundo-count"),n=e.querySelector("#banner-segundo-download");let d=[];function b(l){return String(l).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function p(l){return String(l).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function u(l){const m=String(l).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return m.includes("	")?m.split("	").map(c=>c.trim()).filter(c=>c!==""):m.includes(";")?m.split(";").map(c=>c.trim()).filter(c=>c!==""):m.split(/\s+/).map(c=>c.trim()).filter(c=>c!=="")}function f(l){return Number.isInteger(l)?String(l):l.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function h(l){return String(l).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function w(l,m="success"){o.textContent=l,o.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),m==="error"?o.classList.add("border-red-200","bg-red-50","text-red-800"):o.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function A(l){const m=l.split(/\r?\n/).map(k=>k.trim()).filter(Boolean),c=[],x=[],v=new Set;return m.forEach((k,D)=>{const M=D+1,q=u(k);if(q.length!==2){x.push(`Línea ${M}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const P=b(q[0]),T=Number(p(q[1]));if(!/^A[0-9]{8}$/.test(P)){x.push(`Línea ${M}: la matrícula "${P}" no es válida. Debe tener el formato A00108671.`);return}if(v.has(P)){x.push(`Línea ${M}: la matrícula ${P} está repetida.`);return}if(!Number.isFinite(T)){x.push(`Línea ${M}: la calificación 3SP no es numérica.`);return}if(T<0||T>35){x.push(`Línea ${M}: 3SP debe estar entre 0 y 35.`);return}v.add(P),c.push({matricula:P,grade3SP:T})}),{records:c,errors:x}}function y(l){if(l.length===0){r.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}r.innerHTML=l.map((m,c)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${c+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${h(m.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${f(m.grade3SP)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${l.length} estudiante${l.length===1?"":"s"}`}function g(l){return[["MATRICULA","3SP"],...l.map(c=>[c.matricula,f(c.grade3SP)])].map(c=>c.join(";")).join(`\r
`)}function E(l,m){const c=new Blob(["\uFEFF"+l],{type:"text/csv;charset=utf-8;"}),x=URL.createObjectURL(c),v=document.createElement("a");v.href=x,v.download=m,document.body.appendChild(v),v.click(),v.remove(),window.setTimeout(()=>{URL.revokeObjectURL(x)},1e3)}function C(){d=[],a.value="",y([]),n.disabled=!0,o.textContent="",o.classList.add("hidden"),a.focus()}return t.addEventListener("click",()=>{const l=a.value.trim();if(!l){d=[],y([]),n.disabled=!0,w("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:m,errors:c}=A(l);if(c.length>0){d=[],y([]),n.disabled=!0,w(c.join(" "),"error");return}d=m,y(m),n.disabled=!1,w(`Los datos de ${m.length} estudiante${m.length===1?"":"s"} fueron validados correctamente.`)}),i.addEventListener("click",C),n.addEventListener("click",()=>{d.length!==0&&E(g(d),"Banner_APEC_Segundo_Periodo_3SP.csv")}),e}function ls(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-final-input"),t=e.querySelector("#banner-final-process"),i=e.querySelector("#banner-final-clear"),o=e.querySelector("#banner-final-message"),r=e.querySelector("#banner-final-preview"),s=e.querySelector("#banner-final-count"),n=e.querySelector("#banner-final-download");let d=[];function b(l){return String(l).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function p(l){return String(l).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function u(l){const m=String(l).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return m.includes("	")?m.split("	").map(c=>c.trim()).filter(c=>c!==""):m.includes(";")?m.split(";").map(c=>c.trim()).filter(c=>c!==""):m.split(/\s+/).map(c=>c.trim()).filter(c=>c!=="")}function f(l){return Number.isInteger(l)?String(l):l.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function h(l){return String(l).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function w(l,m="success"){o.textContent=l,o.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),m==="error"?o.classList.add("border-red-200","bg-red-50","text-red-800"):o.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function A(l){const m=l.split(/\r?\n/).map(k=>k.trim()).filter(Boolean),c=[],x=[],v=new Set;return m.forEach((k,D)=>{const M=D+1,q=u(k);if(q.length!==2){x.push(`Línea ${M}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const P=b(q[0]),T=Number(p(q[1]));if(!/^A[0-9]{8}$/.test(P)){x.push(`Línea ${M}: la matrícula "${P}" no es válida. Debe tener el formato A00108671.`);return}if(v.has(P)){x.push(`Línea ${M}: la matrícula ${P} está repetida.`);return}if(!Number.isFinite(T)){x.push(`Línea ${M}: la calificación 4EF no es numérica.`);return}if(T<0||T>30){x.push(`Línea ${M}: 4EF debe estar entre 0 y 30.`);return}v.add(P),c.push({matricula:P,grade4EF:T})}),{records:c,errors:x}}function y(l){if(l.length===0){r.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}r.innerHTML=l.map((m,c)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${c+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${h(m.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${f(m.grade4EF)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${l.length} estudiante${l.length===1?"":"s"}`}function g(l){return[["MATRICULA","4EF"],...l.map(c=>[c.matricula,f(c.grade4EF)])].map(c=>c.join(";")).join(`\r
`)}function E(l,m){const c=new Blob(["\uFEFF"+l],{type:"text/csv;charset=utf-8;"}),x=URL.createObjectURL(c),v=document.createElement("a");v.href=x,v.download=m,document.body.appendChild(v),v.click(),v.remove(),window.setTimeout(()=>{URL.revokeObjectURL(x)},1e3)}function C(){d=[],a.value="",y([]),n.disabled=!0,o.textContent="",o.classList.add("hidden"),a.focus()}return t.addEventListener("click",()=>{const l=a.value.trim();if(!l){d=[],y([]),n.disabled=!0,w("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:m,errors:c}=A(l);if(c.length>0){d=[],y([]),n.disabled=!0,w(c.join(" "),"error");return}d=m,y(m),n.disabled=!1,w(`Los datos de ${m.length} estudiante${m.length===1?"":"s"} fueron validados correctamente.`)}),i.addEventListener("click",C),n.addEventListener("click",()=>{d.length!==0&&E(g(d),"Banner_APEC_Examen_Final_4EF.csv")}),e}function cs(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-menu"),t=e.querySelector("#banner-tool-view"),i=e.querySelector("#banner-tool-content"),o=e.querySelector("#open-primer-periodo"),r=e.querySelector("#open-segundo-periodo"),s=e.querySelector("#open-calificacion-final"),n=e.querySelector("#banner-back");function d(){a.classList.add("hidden"),t.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})})}function b(f){console.error("No fue posible abrir la herramienta de Banner:",f),i.innerHTML=`
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
        `,d()}function p(f){i.innerHTML="";try{if(typeof f!="function")throw new TypeError("El componente seleccionado no es una función válida.");const h=f();if(!(h instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");i.appendChild(h),d()}catch(h){b(h)}}function u(){i.replaceChildren(),t.classList.add("hidden"),a.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})})}return o.addEventListener("click",()=>{p(rs)}),r.addEventListener("click",()=>{p(ns)}),s.addEventListener("click",()=>{p(ls)}),n.addEventListener("click",u),e}function ds(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-8",e.innerHTML=`
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
    `;const a=e.querySelector("#xmera-input"),t=e.querySelector("#xmera-output"),i=e.querySelector("#xmera-generate"),o=e.querySelector("#xmera-copy"),r=e.querySelector("#xmera-clear"),s=e.querySelector("#xmera-message"),n=e.querySelector("#tab-xmera"),d=e.querySelector("#tab-banner"),b=e.querySelector("#panel-xmera"),p=e.querySelector("#panel-banner");function u(){t.textContent=`var data_todo = {
};`,o.disabled=!0}function f(y,g="success"){s.textContent=y,s.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),s.classList.add("border"),g==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function h(y){const g=y.split(/\r?\n/).map(m=>m.trim()).filter(Boolean),E=[],C=[],l=new Set;return g.forEach((m,c)=>{const x=m.split(/[\t,; ]+/).map(q=>q.trim()).filter(Boolean),v=c+1,k=x[0],D=x.slice(1);if(!k){C.push(`Línea ${v}: falta la matrícula.`);return}if(!/^\d+$/.test(k)){C.push(`Línea ${v}: la matrícula "${k}" no es válida.`);return}if(l.has(k)){C.push(`Línea ${v}: la matrícula ${k} está repetida.`);return}if(D.length===0){C.push(`Línea ${v}: falta al menos una calificación.`);return}const M=D.map(q=>Number(q));if(M.some(q=>!Number.isFinite(q))){C.push(`Línea ${v}: existe una calificación no numérica.`);return}l.add(k),E.push({matricula:k,grades:M})}),{records:E,errors:C}}function w(y){return`var data_todo = {
${y.map(({matricula:E,grades:C})=>`  "${E}":[${C.join(",")}]`).join(`,
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
}`}function A(y){const g=y==="xmera";b.classList.toggle("hidden",!g),p.classList.toggle("hidden",g),n.className=g?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",d.className=g?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}i.addEventListener("click",()=>{const y=a.value.trim();if(!y){u(),f("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:g,errors:E}=h(y);if(E.length>0){u(),f(E.join(" "),"error");return}t.textContent=w(g),o.disabled=!1,f(`Código generado correctamente para ${g.length} estudiante${g.length===1?"":"s"}.`)}),o.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t.textContent),f("El código fue copiado al portapapeles.")}catch(y){console.error("No fue posible copiar el código:",y),f("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),r.addEventListener("click",()=>{a.value="",u(),s.textContent="",s.classList.add("hidden"),a.focus()});try{const y=cs();if(y instanceof HTMLElement)p.appendChild(y);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(y){console.error("No fue posible cargar el módulo Banner:",y),p.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return n.addEventListener("click",()=>{A("xmera")}),d.addEventListener("click",()=>{A("banner")}),A("xmera"),e}function us(){return ds()}function $(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function rt(e){return String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}function ps(e,a=!1){return`
        <button
            type="button"
            data-filtro-servicio="${$(e.id)}"
            aria-pressed="${a}"
            class="shrink-0 rounded-full border px-4 py-2 text-sm font-black transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 ${a?"border-sky-700 bg-sky-700 text-white shadow-md":"border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-800"}"
        >
            <span>${$(e.nombre)}</span>
            <span class="ml-1 text-xs opacity-75">${$(e.rango)}</span>
        </button>
    `}function ms(e){const a=rt([e.numero,e.titulo,e.tituloCorto,e.resumen,e.descripcion,e.categoriaNombre,...e.subservicios||[],e.entregables].join(" "));return`
        <article
            data-servicio-card
            data-servicio-id="${$(e.id)}"
            data-categoria="${$(e.categoria)}"
            data-busqueda="${$(a)}"
            class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl md:p-6"
        >
            <div class="mb-5 flex items-start justify-between gap-4">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 text-sky-800 transition-transform duration-300 group-hover:scale-110">
                    ${z(e.icono,"text-3xl")}
                </div>
                <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-slate-600">
                    ${String(e.numero).padStart(2,"0")}
                </span>
            </div>

            <p class="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-sky-700">
                ${$(e.categoriaNombre)}
            </p>
            <h3 class="text-xl font-black leading-tight text-slate-950 md:text-2xl">
                ${$(e.tituloCorto)}
            </h3>
            <p class="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                ${$(e.titulo)}
            </p>
            <p class="mt-4 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                ${$(e.resumen)}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
                ${(e.subservicios||[]).slice(0,2).map(t=>{const i=t.split(":")[0];return`
                        <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                            ${$(i)}
                        </span>
                    `}).join("")}
            </div>

            <button
                type="button"
                data-servicio-detalle="${$(e.id)}"
                class="mt-6 inline-flex items-center justify-between gap-3 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-black text-sky-800 transition-colors hover:border-sky-700 hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                aria-label="Explorar ${$(e.titulo)}"
            >
                Explorar servicio
                ${z("bx-right-arrow-alt","text-xl")}
            </button>
        </article>
    `}function bs(e){return`
        <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 class="font-black text-white">${$(e.titulo)}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-300">${$(e.descripcion)}</p>
        </article>
    `}function gs(e){return`
        <article class="min-w-[280px] flex-1 rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm md:min-w-[330px]">
            <div class="flex items-center justify-between gap-3">
                <span class="rounded-full bg-amber-200 px-3 py-1 text-xs font-black text-amber-900">Paquete ${e.numero}</span>
                ${z("bx-grid-alt","text-2xl text-amber-800")}
            </div>
            <h3 class="mt-4 text-xl font-black leading-tight text-slate-950">${$(e.titulo)}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-700">${$(e.descripcion)}</p>
        </article>
    `}function xs(e){return`
        <li class="relative flex gap-4 pb-6 last:pb-0">
            <span class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-black text-white shadow-md">
                ${e.numero}
            </span>
            <div class="pt-1">
                <h4 class="font-black text-slate-950">${$(e.titulo)}</h4>
                <p class="mt-1 text-sm leading-relaxed text-slate-600">${$(e.descripcion)}</p>
            </div>
        </li>
    `}function fs(e){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-4">
            <h4 class="font-black text-slate-950">${$(e.titulo)}</h4>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">${$(e.descripcion)}</p>
        </article>
    `}function vs(e){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div class="flex items-start gap-3">
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">P${e.numero}</span>
                <div>
                    <h4 class="font-black text-slate-950">${$(e.titulo)}</h4>
                    <p class="mt-1 text-sm leading-relaxed text-slate-600">${$(e.descripcion)}</p>
                </div>
            </div>
        </article>
    `}function hs(e){return`
        <ol class="grid grid-cols-1 gap-3 lg:grid-cols-2">
            ${(e.subservicios||[]).map((a,t)=>`
                <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    <span class="mt-0.5 flex h-8 min-w-8 items-center justify-center rounded-full bg-sky-100 px-2 text-xs font-black text-sky-800">
                        ${e.numero}.${t+1}
                    </span>
                    <span>${$(a)}</span>
                </li>
            `).join("")}
        </ol>
    `}function ys(e){const a=encodeURIComponent(`Solicitud de servicio: ${e.titulo}`);return`
        <div class="relative overflow-hidden rounded-[2rem] bg-white">
            <div class="bg-slate-950 px-6 py-7 text-white md:px-9 md:py-9">
                <div class="flex items-start justify-between gap-5">
                    <div class="flex min-w-0 items-start gap-4">
                        <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sky-300">
                            ${z(e.icono,"text-3xl")}
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-300">
                                Servicio ${String(e.numero).padStart(2,"0")} · ${$(e.categoriaNombre)}
                            </p>
                            <h2 class="mt-2 text-2xl font-black leading-tight md:text-4xl">
                                ${$(e.titulo)}
                            </h2>
                        </div>
                    </div>
                    <button
                        type="button"
                        data-cerrar-dialogo-servicio
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/40"
                        aria-label="Cerrar detalle del servicio"
                    >
                        <span aria-hidden="true" class="text-2xl leading-none">×</span>
                    </button>
                </div>
                <p class="mt-6 max-w-5xl text-base leading-relaxed text-slate-200 md:text-lg">
                    ${$(e.descripcion)}
                </p>
            </div>

            <div class="space-y-8 px-6 py-7 md:px-9 md:py-9">
                <section aria-labelledby="titulo-componentes-servicio">
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Componentes del servicio</p>
                    <h3 id="titulo-componentes-servicio" class="mb-5 text-xl font-black text-slate-950 md:text-2xl">
                        Alcance técnico y académico
                    </h3>
                    ${hs(e)}
                </section>

                <section class="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 md:p-6" aria-labelledby="titulo-entregables-servicio">
                    <p class="text-xs font-black uppercase tracking-widest text-emerald-800">Entregables habituales</p>
                    <h3 id="titulo-entregables-servicio" class="mt-2 text-xl font-black text-slate-950">Productos posibles</h3>
                    <p class="mt-3 leading-relaxed text-slate-700">${$(e.entregables)}</p>
                </section>
            </div>

            <div class="border-t border-slate-200 bg-slate-50 px-6 py-6 md:px-9">
                <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p class="max-w-2xl text-sm leading-relaxed text-slate-600">
                        El alcance, los responsables, los aliados requeridos, los productos, el calendario y la tarifa se definen después del diagnóstico inicial.
                    </p>
                    <div class="flex flex-col gap-3 sm:flex-row">
                        <a
                            href="mailto:mleonardos@unapec.edu.do?subject=${a}"
                            class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-800 transition hover:border-sky-400 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                        >
                            Escribir por correo
                            ${z("bx-right-arrow-alt","text-lg")}
                        </a>
                        <a
                            href="#/contacto"
                            class="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-black text-white shadow-md transition hover:bg-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                        >
                            Solicitar información
                            ${z("bx-right-arrow-alt","text-lg")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `}function ws(){const e=document.createElement("section");e.id="catalogo-servicios",e.className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-5 py-9 shadow-lg md:px-8 md:py-12 xl:px-10",e.setAttribute("aria-labelledby","titulo-catalogo-servicios"),e.innerHTML=`
        <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>
        <div class="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl"></div>

        <div class="relative z-10 space-y-10">
            <header class="grid grid-cols-1 gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                    <p class="mb-2 text-sm font-black uppercase tracking-widest text-sky-700">Catálogo institucional 2026</p>
                    <h2 id="titulo-catalogo-servicios" class="max-w-5xl text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                        ${$(we.titulo)}
                    </h2>
                    <p class="mt-4 text-sm font-bold text-slate-500 md:text-base">${$(we.subtitulo)}</p>
                    <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-600 md:text-lg">
                        ${$(we.introduccion)}
                    </p>
                    <p class="mt-5 border-l-4 border-amber-500 pl-4 text-base font-black italic text-slate-800 md:text-lg">
                        “${$(we.lema)}”
                    </p>
                </div>

                <aside class="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl">
                    <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-300">Alcance responsable</p>
                    <h3 class="mt-2 text-2xl font-black">Cada solicitud se delimita antes de iniciar</h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-300">${$(we.notaAlcance)}</p>
                    <a href="#/contacto" class="mt-5 inline-flex items-center gap-2 font-black text-sky-300 hover:text-white">
                        Contactar al grupo
                        ${z("bx-right-arrow-alt","text-xl")}
                    </a>
                </aside>
            </header>

            <section class="grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Resumen del catálogo">
                ${[[ce.length,"áreas de servicio"],[la.length-1,"bloques temáticos"],[Ca.length,"paquetes sugeridos"],[Ea.length,"etapas de trabajo"]].map(([p,u])=>`
                    <article class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                        <p class="text-3xl font-black text-sky-800">${p}</p>
                        <p class="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">${u}</p>
                    </article>
                `).join("")}
            </section>

            <section class="rounded-3xl bg-slate-950 p-5 text-white md:p-6" aria-labelledby="titulo-propuesta-valor">
                <div class="mb-5">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-300">Propuesta de valor</p>
                    <h3 id="titulo-propuesta-valor" class="mt-2 text-2xl font-black md:text-3xl">Rigor, adaptación y transferencia</h3>
                </div>
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                    ${Lt.map(bs).join("")}
                </div>
            </section>

            <section aria-labelledby="titulo-explorar-servicios">
                <div class="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-sm md:p-5">
                    <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                        <div class="min-w-0 flex-1">
                            <label for="buscador-catalogo-servicios" class="sr-only">Buscar en el catálogo de servicios</label>
                            <input
                                id="buscador-catalogo-servicios"
                                type="search"
                                data-buscador-servicios
                                autocomplete="off"
                                placeholder="Buscar por necesidad, método, sector o área..."
                                class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100 md:text-base"
                            />
                        </div>
                        <p data-contador-servicios class="shrink-0 text-sm font-bold text-slate-500" aria-live="polite">
                            ${ce.length} servicios disponibles
                        </p>
                    </div>

                    <div class="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Filtrar servicios por categoría">
                        ${la.map((p,u)=>ps(p,u===0)).join("")}
                    </div>
                </div>

                <div class="mt-7 flex items-end justify-between gap-4">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-sky-700">Exploración digital</p>
                        <h3 id="titulo-explorar-servicios" class="mt-1 text-2xl font-black text-slate-950 md:text-3xl">Seleccione un servicio para conocer su alcance</h3>
                    </div>
                </div>

                <div data-rejilla-servicios class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    ${ce.map(ms).join("")}
                </div>

                <div data-vacio-servicios class="mt-7 hidden rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
                    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                        ${z("bx-grid-alt","text-3xl")}
                    </div>
                    <h3 class="mt-4 text-xl font-black text-slate-950">No encontramos coincidencias</h3>
                    <p class="mt-2 text-sm text-slate-600">Pruebe otra palabra o seleccione una categoría diferente.</p>
                </div>
            </section>

            <section aria-labelledby="titulo-paquetes-institucionales">
                <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-amber-700">Ofertas fáciles de comunicar y contratar</p>
                        <h3 id="titulo-paquetes-institucionales" class="mt-1 text-2xl font-black text-slate-950 md:text-3xl">Paquetes institucionales sugeridos</h3>
                    </div>
                    <p class="max-w-2xl text-sm leading-relaxed text-slate-600">Los paquetes agrupan varios componentes del catálogo y se ajustan al alcance real de cada institución o proyecto.</p>
                </div>
                <div class="mt-6 flex gap-4 overflow-x-auto pb-3">
                    ${Ca.map(gs).join("")}
                </div>
            </section>

            <section class="grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]" aria-labelledby="titulo-como-trabajamos">
                <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-700">Proceso estándar</p>
                    <h3 id="titulo-como-trabajamos" class="mt-2 text-2xl font-black text-slate-950 md:text-3xl">Cómo se desarrolla un servicio</h3>
                    <ol class="relative mt-6 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-sky-200">
                        ${Ea.map(xs).join("")}
                    </ol>
                </article>

                <div class="space-y-5">
                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm" open>
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Modalidades de contratación</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${Pt.map(fs).join("")}
                        </div>
                    </details>

                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Principios transversales</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${It.map(vs).join("")}
                        </div>
                    </details>

                    <details class="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-slate-950">
                            <span>Sectores y públicos destinatarios</span>
                            <span class="text-sky-700 transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <ul class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            ${Ja.map(p=>`
                                <li class="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                                    <span class="mt-0.5 text-sky-700">${z("bx-check-shield","text-lg")}</span>
                                    <span>${$(p)}</span>
                                </li>
                            `).join("")}
                        </ul>
                    </details>
                </div>
            </section>

            <section class="rounded-3xl bg-gradient-to-r from-sky-800 to-blue-950 px-6 py-8 text-white shadow-xl md:px-9" aria-labelledby="titulo-cta-catalogo">
                <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-sky-200">Próximo paso</p>
                        <h3 id="titulo-cta-catalogo" class="mt-2 text-2xl font-black md:text-3xl">Conversemos sobre la necesidad que desea resolver</h3>
                        <p class="mt-3 max-w-3xl text-sm leading-relaxed text-sky-100 md:text-base">La reunión inicial permite identificar el servicio, paquete o alianza más adecuado y definir un alcance verificable.</p>
                    </div>
                    <div class="flex flex-col gap-3 sm:flex-row">
                        <a href="mailto:mleonardos@unapec.edu.do?subject=Solicitud%20de%20informaci%C3%B3n%20sobre%20servicios" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-black text-white hover:bg-white/20">
                            Escribir por correo
                        </a>
                        <a href="#/contacto" class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-sky-900 shadow-lg hover:bg-sky-50">
                            Solicitar información
                            ${z("bx-right-arrow-alt","text-lg")}
                        </a>
                    </div>
                </div>
            </section>
        </div>

        <dialog
            data-dialogo-servicio
            class="m-auto max-h-[92vh] w-[min(96vw,1180px)] overflow-y-auto rounded-[2rem] bg-transparent p-0 shadow-2xl backdrop:bg-slate-950/80"
            aria-label="Detalle del servicio"
        ></dialog>
    `;const a=[...e.querySelectorAll("[data-servicio-card]")],t=[...e.querySelectorAll("[data-filtro-servicio]")],i=e.querySelector("[data-buscador-servicios]"),o=e.querySelector("[data-contador-servicios]"),r=e.querySelector("[data-vacio-servicios]"),s=e.querySelector("[data-dialogo-servicio]");let n="todos",d=null;function b(){const p=rt(i?.value);let u=0;a.forEach(f=>{const h=n==="todos"||f.dataset.categoria===n,w=!p||String(f.dataset.busqueda||"").includes(p),A=h&&w;f.classList.toggle("hidden",!A),A&&(u+=1)}),o&&(o.textContent=`${u} servicio${u===1?"":"s"} disponible${u===1?"":"s"}`),r?.classList.toggle("hidden",u!==0)}return t.forEach(p=>{p.addEventListener("click",()=>{n=p.dataset.filtroServicio||"todos",t.forEach(u=>{const f=u===p;u.setAttribute("aria-pressed",String(f)),u.classList.toggle("border-sky-700",f),u.classList.toggle("bg-sky-700",f),u.classList.toggle("text-white",f),u.classList.toggle("shadow-md",f),u.classList.toggle("border-slate-300",!f),u.classList.toggle("bg-white",!f),u.classList.toggle("text-slate-700",!f)}),b()})}),i?.addEventListener("input",b),e.addEventListener("click",p=>{const u=p.target.closest("[data-servicio-detalle]");if(!u||!e.contains(u))return;const f=ce.find(h=>h.id===u.dataset.servicioDetalle);!f||!s||(d=u,s.innerHTML=ys(f),typeof s.showModal=="function"?s.showModal():s.setAttribute("open",""),s.querySelector("[data-cerrar-dialogo-servicio]")?.focus())}),s?.addEventListener("click",p=>{(p.target===s||p.target.closest("[data-cerrar-dialogo-servicio]"))&&(s.close?.(),s.removeAttribute("open"))}),s?.addEventListener("close",()=>{d?.focus(),d=null}),e}const ja="kernel-services-filter",ks="kernel-service-interest";function As(e){let a=null;try{a=window.sessionStorage.getItem(ja),window.sessionStorage.removeItem(ja)}catch(i){console.warn("[Kernel] No fue posible recuperar el filtro del catálogo.",i)}if(!a||a==="todos")return;const t=e.querySelector(`[data-filtro-servicio="${CSS.escape(a)}"]`);window.requestAnimationFrame(()=>t?.click())}function Es(e){if(e)try{window.sessionStorage.setItem(ks,e)}catch(a){console.warn("[Kernel] No fue posible conservar el servicio de interés.",a)}}function Cs(e){e.querySelectorAll('a[href="#/contacto"]').forEach(t=>{t.href="#/diagnosticoServicios",t.textContent="Solicitar diagnóstico"});let a=null;e.addEventListener("click",t=>{const i=t.target.closest("[data-servicio-detalle]");if(i&&e.contains(i)){a=i.dataset.servicioDetalle||null;return}const o=t.target.closest('a[href="#/contacto"], a[href="#/diagnosticoServicios"]');!o||!e.contains(o)||(t.preventDefault(),Es(a),window.location.hash="/diagnosticoServicios")})}function Ss(){const e=document.createElement("section");e.className="w-full bg-slate-100 px-3 py-6 font-sans sm:px-5 md:py-9 lg:px-8";const a=document.createElement("div");a.className="mx-auto max-w-[1680px]";const t=ws();return t.classList.remove("rounded-[2rem]"),t.classList.add("rounded-3xl"),Cs(t),a.appendChild(t),e.appendChild(a),As(t),e}const za="mleonardos@unapec.edu.do",La="kernel-service-interest";function He(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function $s(){return ce.map(e=>`
        <option value="${He(e.id)}">${String(e.numero).padStart(2,"0")} · ${He(e.tituloCorto)}</option>
    `).join("")}function Ms(){return Ja.map(e=>`
        <option value="${He(e)}">${He(e)}</option>
    `).join("")}function Ae({id:e,etiqueta:a,tipo:t="text",requerido:i=!1,placeholder:o="",autocomplete:r="off"}){return`
        <label class="block" for="${e}">
            <span class="mb-2 block text-sm font-black text-slate-800">${a}${i?' <span class="text-red-700" aria-hidden="true">*</span>':""}</span>
            <input
                id="${e}"
                name="${e}"
                type="${t}"
                ${i?"required":""}
                autocomplete="${r}"
                placeholder="${o}"
                class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"
            />
        </label>
    `}function js(e){if(e)try{const a=window.sessionStorage.getItem(La);window.sessionStorage.removeItem(La),a&&[...e.options].some(t=>t.value===a)&&(e.value=a)}catch(a){console.warn("[Kernel] No fue posible recuperar el servicio de interés.",a)}}function U(e,a){return String(new FormData(e).get(a)||"").trim()}function nt(e){return ce.find(a=>a.id===e)?.titulo||"No especificado"}function Ia(e){const a={nombre:U(e,"nombre"),organizacion:U(e,"organizacion"),cargo:U(e,"cargo"),correo:U(e,"correo"),telefono:U(e,"telefono"),sector:U(e,"sector"),servicio:nt(U(e,"servicio")),necesidad:U(e,"necesidad"),datos:U(e,"datos"),plazo:U(e,"plazo"),presupuesto:U(e,"presupuesto"),producto:U(e,"producto"),modalidad:U(e,"modalidad")};return["SOLICITUD DE DIAGNÓSTICO INICIAL — GRUPO EL KERNEL","",`Nombre: ${a.nombre}`,`Organización: ${a.organizacion||"No indicada"}`,`Cargo o función: ${a.cargo||"No indicado"}`,`Correo: ${a.correo}`,`Teléfono: ${a.telefono||"No indicado"}`,`Sector: ${a.sector||"No especificado"}`,`Servicio de interés: ${a.servicio}`,`Modalidad preferida: ${a.modalidad||"No especificada"}`,`Plazo esperado: ${a.plazo||"No especificado"}`,`Presupuesto estimado: ${a.presupuesto||"No especificado"}`,"","Problema o necesidad:",a.necesidad,"","Datos, documentos o recursos disponibles:",a.datos||"No especificados","","Producto o resultado esperado:",a.producto||"No especificado","","Nota: adjuntaré al correo generado los términos de referencia o documentos pertinentes, si aplica."].join(`
`)}async function zs(e){if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(e);return}const a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove()}function Ls(){const e=document.createElement("section");e.className="w-full bg-slate-100 px-3 py-6 font-sans sm:px-5 md:py-10 lg:px-8",e.innerHTML=`
        <div class="mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <header class="relative overflow-hidden bg-[#06141a] px-6 py-9 text-white md:px-10 md:py-12">
                <div class="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"></div>
                <div class="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Diagnóstico inicial</p>
                        <h1 class="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Cuéntenos qué necesita resolver</h1>
                        <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">El formulario organiza la información mínima para identificar el servicio, el equipo y el alcance inicial. No sustituye una propuesta técnica ni implica contratación.</p>
                    </div>
                    <aside class="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                        <p class="font-black text-white">Datos solicitados por el catálogo institucional</p>
                        <p class="mt-2 text-sm leading-relaxed text-slate-300">Problema, sector, datos disponibles, plazo, presupuesto estimado y producto esperado.</p>
                        <div class="mt-4 flex flex-wrap gap-2">
                            ${["Confidencialidad","Integridad académica","Protección de datos"].map(o=>`<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-200">${o}</span>`).join("")}
                        </div>
                    </aside>
                </div>
            </header>

            <div class="grid grid-cols-1 gap-8 p-5 md:p-8 xl:grid-cols-[1.25fr_0.75fr] xl:p-10">
                <form data-formulario-diagnostico class="space-y-7" novalidate>
                    <section aria-labelledby="titulo-identificacion-diagnostico">
                        <div class="mb-5 flex items-center gap-3">
                            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0f5b5d] ring-1 ring-emerald-200">${z("bx-group","text-xl")}</span>
                            <div>
                                <p class="text-xs font-black uppercase tracking-widest text-[#805615]">Paso 1</p>
                                <h2 id="titulo-identificacion-diagnostico" class="text-2xl font-black text-slate-950">Identificación y contacto</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            ${Ae({id:"nombre",etiqueta:"Nombre completo",requerido:!0,placeholder:"Nombre y apellidos",autocomplete:"name"})}
                            ${Ae({id:"correo",etiqueta:"Correo electrónico",tipo:"email",requerido:!0,placeholder:"nombre@institucion.edu",autocomplete:"email"})}
                            ${Ae({id:"organizacion",etiqueta:"Organización o institución",placeholder:"Universidad, empresa, organismo...",autocomplete:"organization"})}
                            ${Ae({id:"cargo",etiqueta:"Cargo o función",placeholder:"Director, docente, investigador...",autocomplete:"organization-title"})}
                            ${Ae({id:"telefono",etiqueta:"Teléfono",tipo:"tel",placeholder:"+1 809 ...",autocomplete:"tel"})}
                            <label class="block" for="sector">
                                <span class="mb-2 block text-sm font-black text-slate-800">Sector</span>
                                <select id="sector" name="sector" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Seleccione un sector</option>
                                    ${Ms()}
                                </select>
                            </label>
                        </div>
                    </section>

                    <section aria-labelledby="titulo-necesidad-diagnostico">
                        <div class="mb-5 flex items-center gap-3">
                            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#9a671d] ring-1 ring-amber-200">${z("bx-check-shield","text-xl")}</span>
                            <div>
                                <p class="text-xs font-black uppercase tracking-widest text-[#805615]">Paso 2</p>
                                <h2 id="titulo-necesidad-diagnostico" class="text-2xl font-black text-slate-950">Necesidad y alcance preliminar</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <label class="block md:col-span-2" for="servicio">
                                <span class="mb-2 block text-sm font-black text-slate-800">Servicio de interés <span class="text-red-700" aria-hidden="true">*</span></span>
                                <select id="servicio" name="servicio" required class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Seleccione una de las 20 áreas</option>
                                    ${$s()}
                                </select>
                            </label>
                            <label class="block md:col-span-2" for="necesidad">
                                <span class="mb-2 block text-sm font-black text-slate-800">Problema o necesidad <span class="text-red-700" aria-hidden="true">*</span></span>
                                <textarea id="necesidad" name="necesidad" required rows="6" placeholder="Describa el problema, quién utilizará el resultado y qué decisión debe apoyarse." class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"></textarea>
                            </label>
                            <label class="block md:col-span-2" for="datos">
                                <span class="mb-2 block text-sm font-black text-slate-800">Datos, documentos o recursos disponibles</span>
                                <textarea id="datos" name="datos" rows="4" placeholder="Bases de datos, reglamentos, programas existentes, términos de referencia, códigos, instrumentos..." class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"></textarea>
                            </label>
                            <label class="block" for="plazo">
                                <span class="mb-2 block text-sm font-black text-slate-800">Plazo esperado</span>
                                <select id="plazo" name="plazo" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Seleccione una referencia</option>
                                    <option>Menos de 1 mes</option>
                                    <option>1 a 3 meses</option>
                                    <option>3 a 6 meses</option>
                                    <option>6 a 12 meses</option>
                                    <option>Más de 12 meses</option>
                                    <option>Por definir</option>
                                </select>
                            </label>
                            <label class="block" for="presupuesto">
                                <span class="mb-2 block text-sm font-black text-slate-800">Presupuesto estimado</span>
                                <select id="presupuesto" name="presupuesto" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Prefiero definirlo después</option>
                                    <option>Existe una partida aprobada</option>
                                    <option>Está en proceso de aprobación</option>
                                    <option>Se requiere una estimación inicial</option>
                                    <option>Proyecto sujeto a financiamiento</option>
                                </select>
                            </label>
                            <label class="block" for="modalidad">
                                <span class="mb-2 block text-sm font-black text-slate-800">Modalidad preferida</span>
                                <select id="modalidad" name="modalidad" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Por definir</option>
                                    <option>Diagnóstico breve</option>
                                    <option>Consultoría por producto</option>
                                    <option>Proyecto integral</option>
                                    <option>Acompañamiento periódico</option>
                                    <option>Formación o taller</option>
                                    <option>Co-desarrollo</option>
                                    <option>Revisión experta independiente</option>
                                    <option>Alianza institucional</option>
                                </select>
                            </label>
                            <label class="block" for="producto">
                                <span class="mb-2 block text-sm font-black text-slate-800">Producto o resultado esperado</span>
                                <textarea id="producto" name="producto" rows="3" placeholder="Informe, modelo, programa académico, software, tablero, capacitación..." class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"></textarea>
                            </label>
                        </div>
                    </section>

                    <label class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <input type="checkbox" name="consentimiento" required class="mt-1 h-5 w-5 accent-[#0f5b5d]" />
                        <span class="text-sm leading-relaxed text-slate-700">Confirmo que la información puede utilizarse para evaluar esta solicitud y contactarme. Entiendo que el formulario prepara un correo y que no constituye una contratación ni una aprobación automática.</span>
                    </label>

                    <div class="flex flex-col gap-3 sm:flex-row">
                        <button type="submit" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-6 py-4 font-black text-white shadow-md transition hover:bg-[#0a4648] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                            Preparar correo de solicitud
                            ${z("bx-right-arrow-alt","text-xl")}
                        </button>
                        <button type="button" data-copiar-diagnostico class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-black text-slate-800 transition hover:border-[#0f5b5d] hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                            Copiar resumen
                        </button>
                    </div>
                    <p data-estado-diagnostico class="min-h-6 text-sm font-bold text-[#0f5b5d]" aria-live="polite"></p>
                </form>

                <aside class="space-y-5">
                    <section class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                        <p class="text-xs font-black uppercase tracking-widest text-[#805615]">Qué ocurrirá después</p>
                        <ol class="mt-5 space-y-4">
                            ${["Revisión inicial de la necesidad y la información enviada.","Identificación del servicio, paquete o alianza más pertinente.","Reunión exploratoria para aclarar alcance, datos y usuarios.","Propuesta técnica con entregables, calendario, responsabilidades y tarifa."].map((o,r)=>`
                                <li class="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0f5b5d] text-xs font-black text-white">${r+1}</span>
                                    <span>${o}</span>
                                </li>
                            `).join("")}
                        </ol>
                    </section>

                    <section class="rounded-3xl bg-[#071820] p-6 text-white">
                        <p class="text-xs font-black uppercase tracking-widest text-[#efc86f]">Canal de contacto</p>
                        <h2 class="mt-2 text-2xl font-black">${za}</h2>
                        <p class="mt-3 text-sm leading-relaxed text-slate-300">El formulario abre la aplicación de correo del dispositivo con un resumen estructurado. No almacena datos en un servidor del sitio.</p>
                        <p class="mt-4 text-sm leading-relaxed text-slate-300">Los archivos o términos de referencia deben adjuntarse manualmente al correo generado.</p>
                    </section>

                    <section class="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                        <p class="font-black text-amber-950">Alcance responsable</p>
                        <p class="mt-2 text-sm leading-relaxed text-amber-900">Los servicios regulados, dictámenes o firmas profesionales se realizan únicamente mediante especialistas con la habilitación correspondiente. La asesoría académica respeta la autoría y no sustituye el trabajo del estudiante o investigador.</p>
                    </section>
                </aside>
            </div>
        </div>
    `;const a=e.querySelector("[data-formulario-diagnostico]"),t=e.querySelector("[data-estado-diagnostico]"),i=e.querySelector("#servicio");return js(i),a?.addEventListener("submit",o=>{if(o.preventDefault(),!a.checkValidity()){a.reportValidity(),t&&(t.textContent="Complete los campos obligatorios antes de continuar.");return}const r=Ia(a),s=encodeURIComponent(`Solicitud de diagnóstico: ${nt(U(a,"servicio"))}`),n=encodeURIComponent(r);t&&(t.textContent="Abriendo su aplicación de correo. Adjunte los documentos pertinentes antes de enviar."),window.location.href=`mailto:${za}?subject=${s}&body=${n}`}),e.querySelector("[data-copiar-diagnostico]")?.addEventListener("click",async()=>{if(!a?.checkValidity()){a?.reportValidity(),t&&(t.textContent="Complete los campos obligatorios para copiar un resumen útil.");return}try{await zs(Ia(a)),t&&(t.textContent="Resumen copiado. Puede pegarlo en un correo o documento.")}catch(o){console.error("[Kernel] No fue posible copiar el diagnóstico.",o),t&&(t.textContent="No fue posible copiar automáticamente. Utilice el botón para preparar el correo.")}}),e}const Is=450,$e="kernel:recuperacion-modulo";let fe=0,Te=null;function lt(e){return new Promise(a=>{window.setTimeout(a,e)})}function ga(e){const a=String(e?.message||e||"");return/chunkloaderror|failed to fetch dynamically imported module|importing a module script failed|error loading dynamically imported module|networkerror.*module|load failed.*module/i.test(a)}function Ps(e){return["kernel/auth-timeout","auth/network-request-failed"].includes(e?.code)}async function da(e){let a;for(let t=0;t<2;t+=1)try{return await e()}catch(i){if(a=i,t>0||!ga(i))throw i;await lt(Is)}throw a}function O(e,a,t){return async()=>{const o=(await da(e))[a];if(typeof o!="function")throw new Error(t);return o()}}function Ds(){return Te||(Te=Promise.all([da(()=>R(()=>import("./authGuard-CEzcrBkK.js"),__vite__mapDeps([0,1,2]),import.meta.url)),da(()=>R(()=>import("./login-BtABpxCq.js"),__vite__mapDeps([3,1,2]),import.meta.url))]).then(([e,a])=>({esperarAutenticacion:e.esperarAutenticacion,crearLogin:a.crearLogin})).catch(e=>{throw Te=null,e})),Te}const Rs=O(()=>R(()=>import("./LaboratorioKernel-DQR0aCHt.js"),__vite__mapDeps([4,1,2]),import.meta.url),"LaboratorioKernel","El Laboratorio Inteligente no está disponible."),qs=O(()=>R(()=>import("./AsistentePruebas-9ENxU2k9.js"),__vite__mapDeps([5,6]),import.meta.url),"AsistentePruebas","El asistente metodológico no está disponible."),Ts=O(()=>R(()=>import("./ComparacionGrupos-BqmYk_OJ.js"),[],import.meta.url),"ComparacionGrupos","El módulo de comparación de grupos no está disponible."),Os=O(()=>R(()=>import("./CalculadoraDosGrupos-CVTtMBIw.js"),__vite__mapDeps([7,8,9]),import.meta.url),"CalculadoraDosGrupos","La calculadora de dos grupos no está disponible."),Ns=O(()=>R(()=>import("./CalculadoraDosMuestrasRelacionadas-yNAWtDgq.js"),__vite__mapDeps([10,11,8,9]),import.meta.url),"CalculadoraDosMuestrasRelacionadas","La calculadora de muestras relacionadas no está disponible."),Fs=O(()=>R(()=>import("./CalculadoraTresOMasGrupos-GSLRL4og.js"),__vite__mapDeps([12,8,9]),import.meta.url),"CalculadoraTresOMasGrupos","La calculadora de tres o más grupos no está disponible."),Us=O(()=>R(()=>import("./CalculadoraTresOMasMedicionesRelacionadas-DNJ9KK3H.js"),__vite__mapDeps([13,8,11,9]),import.meta.url),"CalculadoraTresOMasMedicionesRelacionadas","La calculadora de mediciones relacionadas no está disponible."),Bs=O(()=>R(()=>import("./CorrelacionAsociacion-BJOAMDeR.js"),[],import.meta.url),"CorrelacionAsociacion","El módulo de correlación y asociación no está disponible."),Vs=O(()=>R(()=>import("./CalculadoraRelacionVariables-BAf1RnoK.js"),__vite__mapDeps([14,8,9]),import.meta.url),"CalculadoraRelacionVariables","La calculadora de relación entre variables no está disponible."),_s=O(()=>R(()=>import("./CalculadoraAsociacionCategorica-CdWphlxR.js"),__vite__mapDeps([15,8,9]),import.meta.url),"CalculadoraAsociacionCategorica","La calculadora de asociación categórica no está disponible."),Gs=O(()=>R(()=>import("./CalculadoraEstadisticaDescriptiva-BPPMJi58.js"),__vite__mapDeps([16,9]),import.meta.url),"CalculadoraEstadisticaDescriptiva","La calculadora de estadística descriptiva no está disponible."),Ks=O(()=>R(()=>import("./CalculadoraFiabilidadCuestionarios-DoZVsIdf.js"),__vite__mapDeps([17,9]),import.meta.url),"CalculadoraFiabilidadCuestionarios","La calculadora de cuestionarios y fiabilidad no está disponible."),Hs=O(()=>R(()=>import("./CalculadoraEvaluacionEducativa-B-Hw4Qf8.js"),__vite__mapDeps([18,9]),import.meta.url),"CalculadoraEvaluacionEducativa","La calculadora de evaluación educativa no está disponible."),Js=O(()=>R(()=>import("./CalculadoraTamanoMuestraPotencia-DLJx5UHY.js"),__vite__mapDeps([19,9]),import.meta.url),"CalculadoraTamanoMuestraPotencia","La calculadora de tamaño de muestra y potencia no está disponible."),Qs=O(()=>R(()=>import("./BibliotecaMetodologica-BzzsJJUi.js"),__vite__mapDeps([20,6]),import.meta.url),"BibliotecaMetodologica","La Biblioteca metodológica no está disponible."),Xs=O(()=>R(()=>import("./RegresionModelos-q4rY9Zve.js"),[],import.meta.url),"RegresionModelos","El área de modelos de regresión no está disponible."),Ws=O(()=>R(()=>import("./CalculadoraRegresionCompleta-CoGrGeF8.js"),__vite__mapDeps([21,9]),import.meta.url),"CalculadoraRegresionCompleta","La calculadora de regresión lineal no está disponible."),Ys=O(()=>R(()=>import("./CalculadoraRegresionLogistica-BEavYu0l.js"),__vite__mapDeps([22,9]),import.meta.url),"CalculadoraRegresionLogistica","La calculadora de regresión logística no está disponible."),Zs=O(()=>R(()=>import("./CalculadoraRegresionConteo-X6Bj8ApH.js"),__vite__mapDeps([23,9]),import.meta.url),"CalculadoraRegresionConteo","La calculadora de regresión de conteo no está disponible."),er={home:{page:hi,layout:"full",title:"Portada | El Kernel"},servicios:{page:Ss,layout:"full",title:"Servicios profesionales y académicos | El Kernel"},diagnosticoServicios:{page:Ls,layout:"full",title:"Solicitar diagnóstico | El Kernel"},quienesSomos:{page:Oi,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:Gi,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:Qi,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:$o,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:Do,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:Qo,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:Bo,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:ss,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:us,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:Rs,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:qs,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:Ts,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:Os,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:Ns,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:Fs,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:Us,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"},correlacionAsociacion:{page:Bs,layout:"default",title:"Correlación y asociación | El Kernel"},calculadoraRelacionVariables:{page:Vs,layout:"default",title:"Relación entre variables | El Kernel"},calculadoraAsociacionCategorica:{page:_s,layout:"default",title:"Asociación entre variables categóricas | El Kernel"},calculadoraEstadisticaDescriptiva:{page:Gs,layout:"default",title:"Estadística descriptiva | El Kernel"},calculadoraFiabilidadCuestionarios:{page:Ks,layout:"default",title:"Cuestionarios y fiabilidad | El Kernel"},calculadoraEvaluacionEducativa:{page:Hs,layout:"default",title:"Evaluación educativa | El Kernel"},calculadoraTamanoMuestraPotencia:{page:Js,layout:"default",title:"Tamaño de muestra y potencia | El Kernel"},bibliotecaMetodologica:{page:Qs,layout:"default",title:"Biblioteca metodológica | El Kernel"},regresionModelos:{page:Xs,layout:"default",title:"Modelos de regresión | El Kernel"},calculadoraRegresion:{page:Ws,layout:"default",title:"Regresión lineal y múltiple | El Kernel"},calculadoraRegresionLogistica:{page:Ys,layout:"default",title:"Regresión logística binaria | El Kernel"},calculadoraRegresionConteo:{page:Zs,layout:"default",title:"Regresión de Poisson y binomial negativa | El Kernel"}},ar=new Set(["laboratorioKernel","asistentePruebas","comparacionGrupos","calculadoraDosGrupos","calculadoraDosMuestrasRelacionadas","calculadoraTresOMasGrupos","calculadoraTresOMasMedicionesRelacionadas","correlacionAsociacion","calculadoraRelacionVariables","calculadoraAsociacionCategorica","calculadoraEstadisticaDescriptiva","calculadoraFiabilidadCuestionarios","calculadoraEvaluacionEducativa","calculadoraTamanoMuestraPotencia","bibliotecaMetodologica","regresionModelos","calculadoraRegresion","calculadoraRegresionLogistica","calculadoraRegresionConteo"]);let Pa=document.referrer||"";function Ze(e){window.location.hash=`/${e}`}function ct(){return window.location.hash.replace("#/","")||"home"}function tr(){const e=()=>{Je(ct())};window.addEventListener("hashchange",e),e()}function ir(e,a){const t=`${window.location.origin}${window.location.pathname}#/${e}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:a,page_location:t,page_referrer:Pa}),Pa=t}function or(e){return document.title="Acceso al Laboratorio | El Kernel",e(()=>{Je(ct())})}function sr(){const e=document.createElement("section");return e.className="w-full max-w-4xl mx-auto px-4 py-16 md:px-8 font-sans",e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.innerHTML=`
        <div class="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-lg md:p-10">
            <div class="mx-auto mb-5 h-11 w-11 animate-spin rounded-full border-4 border-slate-200 border-t-[#0f5b5d]" aria-hidden="true"></div>
            <h1 class="text-2xl font-black text-slate-900">Abriendo la sección…</h1>
            <p class="mt-2 text-slate-600">Estamos verificando la sesión y preparando el contenido.</p>
        </div>`,e}function rr(e){return e?.code==="kernel/auth-timeout"?"La verificación de la sesión tardó más de lo esperado. Compruebe su conexión e inténtelo nuevamente.":ga(e)?"No fue posible descargar esta sección. Puede tratarse de una interrupción temporal de la conexión.":"Ocurrió un problema inesperado al preparar esta sección."}function nr(e,a){const t=document.createElement("section");t.className="w-full max-w-4xl mx-auto px-4 py-12 md:px-8 font-sans",t.setAttribute("role","alert"),t.setAttribute("aria-live","assertive"),t.innerHTML=`
        <div class="rounded-3xl border border-red-200 bg-white p-6 md:p-9 shadow-xl">
            <p class="uppercase tracking-widest text-red-700 text-xs font-black mb-2">Error de carga</p>
            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">No fue posible abrir esta sección</h1>
            <p class="text-slate-600 leading-relaxed mb-5">La aplicación principal continúa disponible. Regrese a la portada o intente cargar nuevamente esta ruta.</p>
            <div data-mensaje-error-ruta class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 break-words"></div>
            <div class="flex flex-col sm:flex-row gap-3 mt-6">
                <button type="button" data-action="reintentar-ruta" class="rounded-xl bg-red-700 px-6 py-3 text-white font-black hover:bg-red-800">Reintentar</button>
                <button type="button" data-action="volver-portada" class="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 font-black hover:bg-slate-50">Volver a la portada</button>
            </div>
        </div>`;const i=t.querySelector("[data-mensaje-error-ruta]");return i&&(i.textContent=rr(e)),t.querySelector("[data-action='reintentar-ruta']")?.addEventListener("click",a),t.querySelector("[data-action='volver-portada']")?.addEventListener("click",()=>Ze("home")),t}function lr(e,a){if(!ga(a))return!1;try{const t=JSON.parse(window.sessionStorage.getItem($e)||"null"),i=Date.now();return t?.route===e&&Number.isFinite(t?.timestamp)&&i-t.timestamp<12e4?!1:(window.sessionStorage.setItem($e,JSON.stringify({route:e,timestamp:i})),window.location.reload(),!0)}catch{return!1}}function cr(e){try{JSON.parse(window.sessionStorage.getItem($e)||"null")?.route===e&&window.sessionStorage.removeItem($e)}catch{try{window.sessionStorage.removeItem($e)}catch{}}}function Da(e){const a=e.querySelector("h1");a&&(a.setAttribute("tabindex","-1"),a.focus({preventScroll:!0}))}async function dr(e,a){if(!ar.has(e))return a.page();const{esperarAutenticacion:t,crearLogin:i}=await Ds();return await t()?a.page():or(i)}async function Je(e,a={}){const{intentoAutenticacion:t=0}=a,i=document.querySelector("main"),o=er[e];if(!i)return;if(!o){Ze("home");return}const r=++fe;Xa(o.layout),document.title=o.title,i.setAttribute("aria-busy","true"),i.replaceChildren(sr());try{const s=await dr(e,o);if(r!==fe)return;if(!(s instanceof Element))throw new Error("La sección no devolvió un componente válido.");i.replaceChildren(s),i.setAttribute("aria-busy","false"),window.scrollTo({top:0,behavior:"auto"}),window.requestAnimationFrame(()=>{r===fe&&Da(i)}),cr(e),ir(e,document.title)}catch(s){if(r!==fe)return;if(console.error(`[Kernel] Error al cargar la ruta ${e}.`,s),Ps(s)&&t<1)return await lt(650),r===fe?Je(e,{intentoAutenticacion:t+1}):void 0;if(lr(e,s))return;i.setAttribute("aria-busy","false"),i.replaceChildren(nr(s,()=>Je(e))),window.requestAnimationFrame(()=>{r===fe&&Da(i)})}}function ur(e,a){e&&e.addEventListener("click",t=>{const i=t.target.closest("[data-route]");!i||!e.contains(i)||(t.preventDefault(),a(i.dataset.route),pe(e))})}function pr(e){return/^(?:laboratorioKernel|asistentePruebas|comparacionGrupos|calculadora|correlacionAsociacion|bibliotecaMetodologica|regresionModelos)/.test(e)?"laboratorioKernel":e}function Ra(e){const a=window.location.hash.replace("#/","")||"home",t=pr(a);e.querySelectorAll("[data-route]").forEach(i=>{i.dataset.route===t?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current")})}function mr(e,a){if(!e||!a)return;ur(e,Ze),ft(e);const t=a.querySelector('[data-action="open-menu"]');t&&St(t,e),$t(e),Ra(e),window.addEventListener("hashchange",()=>Ra(e)),tr()}function br(e){const a=String(e??"").replace(/\u00a0/g,"").replace(/\s/g,"").replace(/[^0-9+\-.,eE]/g,"");if(!a)return null;const t=a.lastIndexOf(","),i=a.lastIndexOf(".");let o=a;t>=0&&i>=0?o=i>t?a.replace(/,/g,""):a.replace(/\./g,"").replace(",","."):t>=0&&(o=a.length-t-1===3&&t>0?a.replace(/,/g,""):a.replace(",","."));const r=Number(o);return Number.isFinite(r)?r:null}function gr(e){const a=e.querySelector("table");if(!a)return null;const i=[...a.querySelectorAll("thead th")].map(r=>r.textContent.trim().toLowerCase()).some(r=>r.includes("marca")),o=[...a.querySelectorAll("tbody tr")].map(r=>{const s=[...r.children],n=Number(s[i?2:1]?.textContent.trim()),d=Number(s[i?4:3]?.textContent.trim());return{etiqueta:s[0]?.textContent.trim()||"",valor:br(s[i?1:0]?.textContent),frecuencia:Number.isFinite(n)?n:0,acumulada:Number.isFinite(d)?d:0}}).filter(r=>r.etiqueta&&r.frecuencia>=0);return{agrupados:i,filas:o}}function dt(e){return Number.isFinite(Number(e))?Number(e).toLocaleString("es-DO",{maximumFractionDigits:3}):"—"}function qa(e,a){let t=0;for(const i of e)if(t+=i.frecuencia,a<t)return i.valor;return e.at(-1)?.valor??null}function sa(e,a){const t=e.reduce((d,b)=>d+b.frecuencia,0);if(!t)return null;if(a<=0)return e[0].valor;if(a>=1)return e.at(-1).valor;const i=(t-1)*a,o=Math.floor(i),r=Math.ceil(i),s=qa(e,o),n=qa(e,r);return o===r?s:s*(r-i)+n*(i-o)}function Ee(e,a,t){return`
        <text
            x="${e}"
            y="${a}"
            text-anchor="middle"
            font-size="12"
            fill="currentColor"
            class="text-slate-700"
        >${dt(t)}</text>
    `}function xr(e,a){if(!e||e.dataset.cajaDescriptivaSegura==="true"||a.agrupados)return;e.dataset.cajaDescriptivaSegura="true";const t=a.filas.filter(l=>l.valor!==null&&l.frecuencia>0).sort((l,m)=>l.valor-m.valor);if(t.reduce((l,m)=>l+m.frecuencia,0)<2)return;const o=t[0].valor,r=t.at(-1).valor,s=sa(t,.25),n=sa(t,.5),d=sa(t,.75),b=d-s,p=s-1.5*b,u=d+1.5*b,f=t.filter(l=>l.valor>=p&&l.valor<=u),h=t.filter(l=>l.valor<p||l.valor>u),w=f[0]?.valor??o,A=f.at(-1)?.valor??r,y=Math.max(r-o,1),g=l=>40+(l-o)/y*520,E=e.querySelector("svg");if(!E)return;E.setAttribute("aria-label","Diagrama de caja con cuartiles, mediana, bigotes y valores atípicos potenciales"),E.innerHTML=`
        <line x1="${g(w)}" y1="80" x2="${g(s)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${g(d)}" y1="80" x2="${g(A)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${g(w)}" y1="58" x2="${g(w)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${g(A)}" y1="58" x2="${g(A)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${g(s)}" y="45" width="${Math.max(g(d)-g(s),2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${g(n)}" y1="45" x2="${g(n)}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${h.map((l,m)=>`
            <circle
                cx="${g(l.valor)}"
                cy="${80+(m%3-1)*11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>Valor atípico potencial: ${dt(l.valor)}${l.frecuencia>1?` (${l.frecuencia} observaciones)`:""}</title>
            </circle>
        `).join("")}
        ${Ee(g(w),140,w)}
        ${Ee(g(s),30,s)}
        ${Ee(g(n),140,n)}
        ${Ee(g(d),30,d)}
        ${Ee(g(A),140,A)}
    `;const C=e.querySelector("h3 + p");C&&(C.textContent="Los bigotes terminan en los valores extremos no atípicos. Los puntos rojos representan valores atípicos potenciales según el criterio de Tukey.")}function fr(){const e=document.createElement("section");return e.dataset.encabezadoGraficosSeguro="true",e.className="mt-10",e.innerHTML=`
        <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
            Visualización estadística
        </p>
        <h3 class="text-3xl font-black text-slate-900 mb-3">
            Representación gráfica de los resultados
        </h3>
        <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
            Examine la distribución, la frecuencia acumulada, la mediana, los cuartiles, la dispersión y los valores atípicos potenciales.
        </p>
    `,e}function vr(e){const a=document.createElement("article");a.dataset.graficoExportable="true",a.dataset.graficoId="histograma",a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const t=Math.max(...e.map(i=>i.frecuencia),1);return a.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Histograma</h3>
        <p class="text-sm text-slate-500 mb-6">
            Las barras contiguas representan la frecuencia de cada valor o intervalo.
        </p>
        <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
            ${e.map(i=>{const o=Math.max(4,i.frecuencia/t*190);return`
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${i.frecuencia}</span>
                        <div
                            class="w-full max-w-[58px] bg-indigo-600 border-r border-white/40"
                            style="height:${o}px"
                            title="${i.etiqueta}: ${i.frecuencia} observaciones"
                        ></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all px-1">${i.etiqueta}</span>
                    </div>
                `}).join("")}
        </div>
    `,a}function hr(e){const a=document.createElement("article");a.dataset.graficoExportable="true",a.dataset.graficoId="ojiva-frecuencia-acumulada",a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const t=600,i=250,o=48,r=24,s=24,n=48,d=Math.max(...e.map(u=>u.acumulada),1),b=Math.max(e.length-1,1),p=e.map((u,f)=>({...u,x:o+f/b*(t-o-r),y:s+(1-u.acumulada/d)*(i-s-n)}));return a.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Ojiva de frecuencia acumulada</h3>
        <p class="text-sm text-slate-500 mb-5">
            La curva muestra el crecimiento de la frecuencia acumulada.
        </p>
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${t} ${i}" class="min-w-[560px] w-full" role="img" aria-label="Ojiva de frecuencia acumulada">
                <line x1="${o}" y1="${s}" x2="${o}" y2="${i-n}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${o}" y1="${i-n}" x2="${t-r}" y2="${i-n}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <polyline points="${p.map(u=>`${u.x},${u.y}`).join(" ")}" fill="none" stroke="currentColor" stroke-width="4" class="text-emerald-600" stroke-linecap="round" stroke-linejoin="round" />
                ${p.map(u=>`
                    <circle cx="${u.x}" cy="${u.y}" r="5" fill="currentColor" class="text-emerald-700">
                        <title>${u.etiqueta}: frecuencia acumulada ${u.acumulada}</title>
                    </circle>
                    <text x="${u.x}" y="${i-24}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-600">${u.etiqueta}</text>
                `).join("")}
                <text x="18" y="${s+4}" font-size="11" fill="currentColor" class="text-slate-600">${d}</text>
                <text x="25" y="${i-n+4}" font-size="11" fill="currentColor" class="text-slate-600">0</text>
            </svg>
        </div>
    `,a}function yr(e){const a=[...e.querySelectorAll("article")],t=a.find(s=>s.querySelector("h3")?.textContent.includes("Distribución de frecuencias")),i=a.find(s=>s.querySelector("h3")?.textContent.includes("Diagrama de caja"));if(!t||!i)return;const o=t.parentElement,r=gr(e);if(!(!o||!r?.filas.length)&&(e.querySelector("[data-encabezado-graficos-seguro='true']")||(o.before(fr()),o.classList.remove("mt-8")),xr(i,r),!e.querySelector("[data-graficos-descriptivos-seguros='true']"))){const s=document.createElement("div");s.dataset.graficosDescriptivosSeguros="true",s.className="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-7",s.append(vr(r.filas),hr(r.filas)),o.after(s)}}function wr(){let e=!1;const a=()=>{e=!1;const o=document.querySelector("#resultados-estadistica-descriptiva");o&&!o.classList.contains("hidden")&&yr(o)},t=()=>{e||(e=!0,window.requestAnimationFrame(a))};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),t()}const kr=["#formulario-estadistica-descriptiva","#formulario-regresion","#formulario-regresion-conteo","#form-tamano","[id*='calculadora'] form","section form"].join(",");function Ar(){return document.querySelector("main h1, #app h1, h1")?.textContent?.trim()?.toLowerCase()||""}function Er(){return Ar().includes("laboratorio inteligente de investigación")}function Cr(){const e=document.querySelector("main h1, #app h1, h1"),a=document.querySelector("[data-action='volver-laboratorio'], [data-action='volver-modelos'], [data-action='volver-regresion'], [data-action='volver']"),t=document.querySelector(kr);return!!(e&&a&&t)}function Sr(){const e=document.createElement("section");return e.dataset.creditosCalculadoras="true",e.className=["w-full max-w-7xl mx-auto","px-4 pb-10 md:px-8","font-sans"].join(" "),e.innerHTML=`
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
        </div>`,e}function Ta(){if(!Cr()&&!Er()||document.querySelector("[data-creditos-calculadoras='true']"))return;const e=document.querySelector("main, #app, [data-router-view]");e&&e.appendChild(Sr())}function $r(){new MutationObserver(Ta).observe(document.body,{childList:!0,subtree:!0}),Ta()}const Mr={"regresión lineal simple":{ruta:"calculadoraRegresion",tipo:"simple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y un predictor."},"regresión lineal múltiple":{ruta:"calculadoraRegresion",tipo:"multiple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y dos o más predictores."},"regresión logística binaria simple":{ruta:"calculadoraRegresionLogistica",tipo:"simple",almacenamiento:null,clase:"rose",texto:"Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y un predictor."},"regresión logística binaria múltiple":{ruta:"calculadoraRegresionLogistica",tipo:"multiple",almacenamiento:null,clase:"rose",texto:"Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y dos o más predictores."},"regresión de poisson":{ruta:"calculadoraRegresionConteo",tipo:"poisson",almacenamiento:"kernel-modelo-conteo",clase:"amber",texto:"Abra la calculadora de conteo y ajuste un modelo de Poisson con una variable dependiente formada por enteros no negativos."},"regresión binomial negativa":{ruta:"calculadoraRegresionConteo",tipo:"negativa",almacenamiento:"kernel-modelo-conteo",clase:"amber",texto:"Abra la calculadora de conteo y ajuste un modelo binomial negativo cuando exista sobredispersión respecto a Poisson."}};function jr(){const e=[...document.querySelectorAll("main h1")];for(const a of e){const t=a.textContent.trim().toLowerCase(),i=Mr[t];if(i)return{encabezado:a,modelo:i}}return null}function zr(e){const a=document.createElement("div"),t=e.clase==="amber",i=t?"border-amber-200":"border-rose-200",o=t?"bg-amber-50":"bg-rose-50",r=t?"text-amber-700":"text-rose-700",s=t?"bg-amber-700 hover:bg-amber-800":"bg-rose-700 hover:bg-rose-800";return a.dataset.ejecutarModeloRegresion="true",a.className=`mt-8 rounded-2xl border ${i} ${o} p-6`,a.innerHTML=`
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
                <p class="uppercase tracking-widest ${r} text-xs font-black mb-2">
                    Herramienta de modelización
                </p>
                <h2 class="text-xl font-black text-slate-900 mb-2">
                    Ejecute este modelo con sus propios datos
                </h2>
                <p class="text-slate-600 leading-relaxed">
                    ${e.texto} Obtendrá coeficientes, intervalos de confianza, diagnósticos gráficos, predicción e interpretación guiada.
                </p>
            </div>

            <button
                type="button"
                data-route-regresion="${e.ruta}"
                data-tipo-regresion="${e.tipo}"
                ${e.almacenamiento?`data-almacenamiento-regresion="${e.almacenamiento}"`:""}
                class="shrink-0 inline-flex items-center justify-center ${s} text-white font-black rounded-xl px-6 py-4 transition-colors shadow-lg"
            >
                Ejecutar este modelo
                <span class="ml-2" aria-hidden="true">→</span>
            </button>
        </div>
    `,a.querySelector("button")?.addEventListener("click",n=>{const d=n.currentTarget,b=d.dataset.almacenamientoRegresion;b&&sessionStorage.setItem(b,d.dataset.tipoRegresion||""),window.location.hash=`/${d.dataset.routeRegresion}`}),a}function Oa(){const e=jr();if(!e)return;const a=e.encabezado.closest("section");if(!a||a.querySelector("[data-ejecutar-modelo-regresion='true']")||a.querySelector("[data-action='ejecutar-prueba']"))return;(a.querySelector("header + div")||a).appendChild(zr(e.modelo))}function Na(){const a=document.querySelector("#formulario-regresion")?.elements?.tipoModelo;if(!a)return;const t=sessionStorage.getItem("kernel-tipo-modelo-regresion");t!=="simple"&&t!=="multiple"||(a.value=t,a.dispatchEvent(new Event("change",{bubbles:!0})),sessionStorage.removeItem("kernel-tipo-modelo-regresion"))}function Lr(){new MutationObserver(()=>{Oa(),Na()}).observe(document.body,{childList:!0,subtree:!0}),Oa(),Na()}let Fe=null;function Ce({restaurarFoco:e=!0}={}){if(Fe){const a=Fe;Fe=null,a(e);return}document.querySelector("[data-selector-instrumento='true']")?.remove()}function Ir(){Ce({restaurarFoco:!1});const e=document.activeElement,a=document.body.style.overflow,t=document.createElement("div");t.dataset.selectorInstrumento="true",t.className=`
        fixed inset-0 z-[500]
        bg-slate-950/70 backdrop-blur-sm
        flex items-center justify-center
        overflow-y-auto p-4
    `,t.innerHTML=`
        <section
            class="w-full max-w-4xl max-h-[calc(100svh-2rem)] rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-selector-instrumento"
            aria-describedby="descripcion-selector-instrumento"
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
                        aria-label="Cerrar el selector de tipo de instrumento"
                    >
                        ×
                    </button>
                </div>
                <p id="descripcion-selector-instrumento" class="text-slate-200 leading-relaxed mt-4 max-w-3xl">
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
                        class="mt-auto rounded-xl bg-amber-700 px-6 py-4 text-white font-black hover:bg-amber-800 transition-colors"
                        aria-label="Abrir la calculadora de cuestionarios y fiabilidad"
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
                        aria-label="Abrir la calculadora de evaluación educativa"
                    >
                        Analizar prueba
                    </button>
                </article>
            </div>
        </section>
    `;const i=()=>[...t.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(s=>s.getAttribute("aria-hidden")!=="true"),o=s=>{if(s.key==="Escape"){s.preventDefault(),Ce();return}if(s.key!=="Tab")return;const n=i();if(!n.length){s.preventDefault();return}const d=n[0],b=n.at(-1);s.shiftKey&&document.activeElement===d?(s.preventDefault(),b.focus()):!s.shiftKey&&document.activeElement===b&&(s.preventDefault(),d.focus())},r=()=>{Ce({restaurarFoco:!1})};Fe=s=>{document.removeEventListener("keydown",o),window.removeEventListener("hashchange",r),t.remove(),document.body.style.overflow=a,s&&e instanceof HTMLElement&&e.isConnected&&e.focus()},t.addEventListener("click",s=>{const n=s.target.closest("[data-route-instrumento]")?.dataset.routeInstrumento;if(n){Ce({restaurarFoco:!1}),window.location.hash=`/${n}`;return}(s.target===t||s.target.closest("[data-action='cerrar-selector-instrumento']"))&&Ce()}),document.body.appendChild(t),document.body.style.overflow="hidden",document.addEventListener("keydown",o),window.addEventListener("hashchange",r),t.querySelector("[data-route-instrumento]")?.focus()}function Pr(e){e.target.closest("#asistente-pruebas [data-value='instrumento']")&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),Ir())}function Dr(){document.addEventListener("click",Pr,!0)}function Le(e,a){try{a()}catch(t){console.error(`[Kernel] No fue posible iniciar ${e}.`,t)}}function Rr(e){if(!e)return;const a=e.parentElement,t=a?.parentElement,i=document.querySelector("#main");t?.classList.add("relative","z-[200]","overflow-visible"),a?.classList.add("overflow-visible"),e.classList.remove("lg:z-auto","lg:z-[210]"),e.classList.add("overflow-visible","lg:z-[220]"),i?.classList.add("relative","z-0")}const Qe=document.querySelector("#header"),Me=document.querySelector("#navBar"),Fa=document.querySelector("#footer");Qe&&(Qe.innerHTML=mt());Me&&(Me.innerHTML=gt(),Rr(Me));Fa&&(Fa.innerHTML=xt());Le("la navegación",()=>{Me&&Qe&&mr(Me,Qe)});Le("los gráficos de estadística descriptiva",wr);Le("los créditos de las calculadoras",$r);Le("la integración de regresión con el asistente",Lr);Le("cuestionarios y fiabilidad en el asistente",Dr);export{zt as M,R as _,z as i};
