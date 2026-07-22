import{j as Q,a as Z}from"./jstat-DiDocX-r.js";const M=Q.jStat??Z?.jStat;if(!M)throw new Error("No fue posible cargar el motor estadístico jStat.");const L=e=>Math.min(1,Math.max(0,e));function G(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function _(e){return typeof e=="string"?e.trim()===""?Number.NaN:Number(e.trim().replace(",",".")):Number(e)}const H=e=>e.reduce((t,a)=>t+a,0)/e.length;function U(e){const t=[...e].sort((o,r)=>o-r),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function J(e,t=H(e)){return e.reduce((a,o)=>a+(o-t)**2,0)/(e.length-1)}function X(e){const t=H(e),a=J(e,t);return{n:e.length,media:t,mediana:U(e),varianza:a,desviacionEstandar:Math.sqrt(a),minimo:Math.min(...e),maximo:Math.max(...e)}}function Y(e,t){const a=Array.isArray(e),o=a?e:e?.valores;if(!Array.isArray(o))throw new TypeError(`El grupo ${t+1} debe contener un arreglo llamado valores.`);const r=o.map(_),n=r.findIndex(l=>!Number.isFinite(l));if(n!==-1)throw new TypeError(`El grupo ${t+1} contiene un valor no numérico en la posición ${n+1}.`);if(r.length<2)throw new RangeError(`El grupo ${t+1} debe contener al menos dos observaciones.`);return{nombre:(a?"":String(e?.nombre??"").trim())||`Grupo ${t+1}`,valores:r,...X(r)}}function P(e){if(!Array.isArray(e))throw new TypeError("Los grupos deben proporcionarse mediante un arreglo.");if(e.length<3)throw new RangeError("El análisis requiere al menos tres grupos independientes.");const t=e.map(Y),a=t.map(({nombre:o})=>o);if(new Set(a).size!==a.length)throw new Error("Cada grupo debe tener un nombre diferente.");return t}function S(e){const t=e.reduce((o,r)=>o+r.n,0),a=e.reduce((o,r)=>o+r.valores.reduce((n,s)=>n+s,0),0);return{numeroGrupos:e.length,nTotal:t,mediaGeneral:a/t}}function D(e,t,a){return e===1/0?0:L(1-M.centralF.cdf(e,t,a))}function ee(e,t){return L(1-M.chisquare.cdf(e,t))}function F(){if(!M.tukey?.cdf||!M.tukey?.inv)throw new Error("La distribución de Tukey no está disponible en la versión instalada de jStat.")}function I(e,t,a){return F(),e===1/0?0:L(1-M.tukey.cdf(e,t,a))}function R(e,t,a){return F(),M.tukey.inv(e,t,a)}function q(e){const t=Math.abs(e);return t<.01?"Prácticamente nulo":t<.06?"Pequeño":t<.14?"Moderado":"Grande"}function V(e,t){const a=[];for(let o=0;o<e.length-1;o+=1)for(let r=o+1;r<e.length;r+=1)a.push(t(e[o],e[r],o,r));return a}function te(e,t,a,o){const r=1-o,n=e.length,s=R(o,n,a);return{id:"tukey-kramer",nombre:"Comparaciones de Tukey–Kramer",metodo:"Rango studentizado con control del error familiar.",recomendado:!1,comparaciones:V(e,(l,i)=>{const c=l.media-i.media,d=Math.sqrt(t/2*(1/l.n+1/i.n)),p=d===0?c===0?0:1/0:Math.abs(c)/d,m=I(p,n,a),b=s*d;return{grupo1:l.nombre,grupo2:i.nombre,diferenciaMedias:c,errorEstandar:d,estadisticoQ:p,gradosLibertad:a,valorP:m,valorPAjustado:m,intervaloConfianza:{nivel:o,inferior:c-b,superior:c+b,margen:b},significativo:m<r}})}}function ae(e,t){const a=1-t,o=e.length;return{id:"games-howell",nombre:"Comparaciones de Games–Howell",metodo:"Comparaciones pareadas robustas ante varianzas y tamaños desiguales.",recomendado:!1,comparaciones:V(e,(r,n)=>{const s=r.media-n.media,l=r.varianza/r.n,i=n.varianza/n.n,c=l+i,d=Math.sqrt(c/2),p=c**2/(l**2/(r.n-1)+i**2/(n.n-1)),m=d===0?s===0?0:1/0:Math.abs(s)/d,b=I(m,o,p),g=R(t,o,p)*d;return{grupo1:r.nombre,grupo2:n.nombre,diferenciaMedias:s,errorEstandar:d,estadisticoQ:m,gradosLibertad:p,valorP:b,valorPAjustado:b,intervaloConfianza:{nivel:t,inferior:s-g,superior:s+g,margen:g},significativo:b<a}})}}function oe(e){const t=e.map(n=>({...n,rango:0})).sort((n,s)=>n.valor-s.valor);let a=0,o=0,r=0;for(;a<t.length;){let n=a+1;for(;n<t.length&&t[n].valor===t[a].valor;)n+=1;const s=n-a,l=(a+1+n)/2;for(let i=a;i<n;i+=1)t[i].rango=l;s>1&&(r+=1,o+=s**3-s),a=n}return{observaciones:t,sumaCorreccionEmpates:o,cantidadGruposEmpatados:r}}function re(e){const t=e.map((o,r)=>({...o,indiceOriginal:r})).sort((o,r)=>o.valorP-r.valorP);let a=0;return t.forEach((o,r)=>{const n=Math.min(1,o.valorP*(t.length-r));o.valorPAjustado=Math.max(a,n),a=o.valorPAjustado}),t.sort((o,r)=>o.indiceOriginal-r.indiceOriginal).map(({indiceOriginal:o,...r})=>r)}function ne(e,t,a,o,r){const n=1-r,s=a*(a+1)/12-o/(12*(a-1)),l=V(e,(i,c,d,p)=>{const m=t[d]/i.n,b=t[p]/c.n,g=m-b,v=Math.sqrt(s*(1/i.n+1/c.n)),w=v===0?0:g/v,k=L(2*(1-M.normal.cdf(Math.abs(w),0,1)));return{grupo1:i.nombre,grupo2:c.nombre,rangoMedio1:m,rangoMedio2:b,diferenciaRangos:g,errorEstandar:v,estadisticoZ:w,valorP:k,tamanioEfectoR:w/Math.sqrt(a)}});return{id:"dunn-holm",nombre:"Comparaciones de Dunn con ajuste de Holm",metodo:"Comparaciones de rangos con corrección secuencial de Holm.",recomendado:!1,comparaciones:re(l).map(i=>({...i,significativo:i.valorPAjustado<n}))}}function se(e,t={}){const{nivelConfianza:a=.95}=t;G(a);const o=P(e),r=S(o),n=o.reduce(($,f)=>$+f.n*(f.media-r.mediaGeneral)**2,0),s=o.reduce(($,f)=>$+f.valores.reduce((y,B)=>y+(B-f.media)**2,0),0),l=n+s,i=o.length-1,c=r.nTotal-o.length,d=n/i,p=s/c,m=p===0?d===0?0:1/0:d/p,b=D(m,i,c),g=l===0?0:n/l,v=l+p===0?0:(n-i*p)/(l+p),w=Math.max(0,v),k=1-a,x=b<k,h=te(o,p,c,a);return h.recomendado=x,{id:"anova-un-factor",nombre:"ANOVA de un factor",metodo:"ANOVA clásico para tres o más grupos independientes con varianzas homogéneas.",grupos:o,...r,estadistico:{simbolo:"F",valor:m},gradosLibertad:{numerador:i,denominador:c},valorP:b,nivelConfianza:a,alfa:k,significativo:x,tablaAnova:{entreGrupos:{sumaCuadrados:n,gradosLibertad:i,cuadradoMedio:d},dentroGrupos:{sumaCuadrados:s,gradosLibertad:c,cuadradoMedio:p},total:{sumaCuadrados:l,gradosLibertad:r.nTotal-1}},tamanioEfecto:{etaCuadrado:g,omegaCuadrado:w,interpretacion:q(w)},postHoc:h}}function ie(e,t={}){const{nivelConfianza:a=.95}=t;G(a);const o=P(e),r=S(o),n=o.find(({varianza:f})=>f<=0);if(n)throw new Error(`El ANOVA de Welch requiere varianza positiva en cada grupo. Revise ${n.nombre}.`);const s=o.map(f=>({...f,peso:f.n/f.varianza})),l=s.reduce((f,y)=>f+y.peso,0),i=s.reduce((f,y)=>f+y.peso*y.media,0)/l,c=o.length,d=c-1,p=s.reduce((f,y)=>f+y.peso*(y.media-i)**2,0)/d,m=s.reduce((f,y)=>f+(1-y.peso/l)**2/(y.n-1),0),b=1+2*(c-2)/(c**2-1)*m,g=p/b,v=(c**2-1)/(3*m),w=D(g,d,v),k=Math.max(0,d*(g-1)/(d*g+v+1)),x=1-a,h=w<x,$=ae(o,a);return $.recomendado=h,{id:"anova-welch",nombre:"ANOVA de Welch",metodo:"ANOVA robusto para tres o más grupos independientes sin exigir igualdad de varianzas.",grupos:o,...r,mediaPonderada:i,sumaPesos:l,estadistico:{simbolo:"F_W",valor:g},gradosLibertad:{numerador:d,denominador:v},valorP:w,nivelConfianza:a,alfa:x,significativo:h,componentesWelch:{numeradorBase:p,terminoCorreccion:m,denominadorCorreccion:b},tamanioEfecto:{omegaCuadradoAproximado:k,interpretacion:q(k),nota:"Estimación aproximada basada en el estadístico F de Welch y sus grados de libertad."},postHoc:$}}function le(e,t={}){const{nivelConfianza:a=.95}=t;G(a);const o=P(e),r=S(o),n=o.flatMap((x,h)=>x.valores.map($=>({valor:$,indiceGrupo:h}))),s=oe(n),l=new Array(o.length).fill(0);s.observaciones.forEach(({indiceGrupo:x,rango:h})=>{l[x]+=h});const i=12/(r.nTotal*(r.nTotal+1))*o.reduce((x,h,$)=>x+l[$]**2/h.n,0)-3*(r.nTotal+1),c=1-s.sumaCorreccionEmpates/(r.nTotal**3-r.nTotal),d=c<=0?0:i/c,p=o.length-1,m=ee(d,p),b=Math.max(0,(d-o.length+1)/(r.nTotal-o.length)),g=1-a,v=m<g,w=o.map((x,h)=>({...x,sumaRangos:l[h],rangoMedio:l[h]/x.n})),k=ne(o,l,r.nTotal,s.sumaCorreccionEmpates,a);return k.recomendado=v,{id:"kruskal-wallis",nombre:"Prueba de Kruskal–Wallis",metodo:"Comparación no paramétrica de tres o más grupos independientes mediante rangos.",grupos:w,...r,estadistico:{simbolo:"H",valor:d,sinCorreccion:i},gradosLibertad:{valor:p},valorP:m,nivelConfianza:a,alfa:g,significativo:v,empates:{factorCorreccion:c,sumaCorreccion:s.sumaCorreccionEmpates,cantidadGruposEmpatados:s.cantidadGruposEmpatados},tamanioEfecto:{epsilonCuadrado:b,interpretacion:q(b)},postHoc:k}}function ce({grupos:e,prueba:t,nivelConfianza:a=.95}){switch(t){case"anova-un-factor":case"anova":return se(e,{nivelConfianza:a});case"anova-welch":case"welch":return ie(e,{nivelConfianza:a});case"kruskal-wallis":return le(e,{nivelConfianza:a});default:throw new Error("La prueba solicitada no está disponible.")}}function we(){const e=document.createElement("section");e.className=`
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
                    ${z("ANOVA de un factor","Variable cuantitativa, normalidad aproximada y varianzas homogéneas.")}
                    ${z("ANOVA de Welch","Variable cuantitativa con varianzas desiguales o tamaños muestrales diferentes.")}
                    ${z("Kruskal–Wallis","Datos ordinales, distribuciones no normales o presencia importante de valores atípicos.")}
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
                    ${A(1)}
                    ${A(2)}
                    ${A(3)}
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
    `;const t=e.querySelector("#formulario-tres-grupos"),a=e.querySelector("#contenedor-grupos"),o=e.querySelector("#mensaje-error-tres-grupos"),r=e.querySelector("#resultados-tres-grupos");let n=4;const s=sessionStorage.getItem("kernel-prueba-tres-grupos");return["anova-un-factor","anova-welch","kruskal-wallis"].includes(s)&&(t.elements.prueba.value=s),sessionStorage.removeItem("kernel-prueba-tres-grupos"),t.addEventListener("submit",l=>{l.preventDefault(),j(o);try{const i=t.elements.prueba.value;if(!i)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const c=de(a),d=Number(t.elements.nivelConfianza.value),p=ce({grupos:c,prueba:i,nivelConfianza:d});r.innerHTML=be(p),r.classList.remove("hidden"),r.scrollIntoView({behavior:"smooth",block:"start"})}catch(i){r.classList.add("hidden"),O(o,i instanceof Error?i.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("input",l=>{l.target.matches("textarea[data-valores-grupo]")&&W(l.target.closest("[data-grupo]"))}),e.addEventListener("click",l=>{const i=l.target.closest("[data-action]");if(!i)return;const c=i.dataset.action;if(c==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(c==="agregar-grupo"){a.insertAdjacentHTML("beforeend",A(n)),n+=1,j(o);return}if(c==="eliminar-grupo"){if(a.querySelectorAll("[data-grupo]").length<=3){O(o,"El análisis requiere al menos tres grupos.");return}i.closest("[data-grupo]")?.remove(),r.classList.add("hidden"),j(o);return}if(c==="cargar-ejemplo"){me(t,a),n=4,j(o),r.classList.add("hidden");return}c==="limpiar"&&(t.reset(),a.innerHTML=`
                ${A(1)}
                ${A(2)}
                ${A(3)}
            `,n=4,r.innerHTML="",r.classList.add("hidden"),j(o))}),e}function z(e,t){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm leading-relaxed">
                ${t}
            </p>
        </article>
    `}function A(e){return`
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
    `}function de(e){return[...e.querySelectorAll("[data-grupo]")].map((t,a)=>{const o=t.querySelector("[data-nombre-grupo]").value.trim();if(!o)throw new Error(`El grupo ${a+1} debe tener un nombre.`);const r=t.querySelector("[data-valores-grupo]").value;return{nombre:o,valores:ue(r,o)}})}function ue(e,t){const a=e.trim();if(!a)throw new Error(`${t} no contiene datos.`);const o=a.split(/[\s;]+/).filter(Boolean),r=o.map(s=>Number(s.replace(",","."))),n=r.findIndex(s=>!Number.isFinite(s));if(n!==-1)throw new Error(`${t} contiene un valor no válido: "${o[n]}".`);if(r.length<2)throw new Error(`${t} debe contener al menos dos observaciones.`);return r}function pe(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function W(e){if(!e)return;const t=e.querySelector("[data-valores-grupo]"),a=e.querySelector("[data-contador-grupo]"),o=pe(t.value);a.textContent=o===1?"1 valor":`${o} valores`}function me(e,t){t.innerHTML=`
        ${A(1)}
        ${A(2)}
        ${A(3)}
    `;const a=[{nombre:"Método tradicional",valores:`72
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
88`}];[...t.querySelectorAll("[data-grupo]")].forEach((o,r)=>{o.querySelector("[data-nombre-grupo]").value=a[r].nombre,o.querySelector("[data-valores-grupo]").value=a[r].valores,W(o)}),e.elements.prueba.value||(e.elements.prueba.value="anova-un-factor")}function O(e,t){e.textContent=t,e.classList.remove("hidden")}function j(e){e.textContent="",e.classList.add("hidden")}function C(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(e,t=4){return e===1/0?"∞":Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):"—"}function K(e){return Number.isFinite(e)?e<.001?"< 0.001":u(e,4):"—"}function be(e){const t=e.alfa.toFixed(2),a=Math.round(e.nivelConfianza*100),o=e.significativo?`Se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${t}, correspondiente a un nivel de confianza del ${a} %.`:`No se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${t}, correspondiente a un nivel de confianza del ${a} %.`;return`
        <section class="rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-indigo-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-indigo-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${C(e.nombre)}
                </h2>
                <p class="text-indigo-100 mt-3 font-semibold">
                    ${C(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${T(e.estadistico.simbolo,u(e.estadistico.valor),"Estadístico global")}
                    ${T("p",K(e.valorP),"Valor de significación")}
                    ${T("k",e.numeroGrupos,"Número de grupos")}
                    ${T("N",e.nTotal,"Tamaño total")}
                </div>

                ${fe(e)}
                ${ge(e)}
                ${xe(e)}
                ${he(e)}

                <article class="mt-6 rounded-2xl border ${e.significativo?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${o}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La prueba global indica si existe al menos una diferencia, pero no identifica por sí sola cuáles grupos difieren. Las comparaciones post hoc deben interpretarse junto con sus valores p ajustados, intervalos de confianza, tamaños del efecto y relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function T(e,t,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-indigo-700 mb-1">
                ${C(e)}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${t}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${a}
            </p>
        </article>
    `}function fe(e){const t=e.id==="kruskal-wallis";return`
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
                        ${e.grupos.map(a=>`
                                    <tr>
                                        <td class="px-5 py-4 font-bold text-slate-900">
                                            ${C(a.nombre)}
                                        </td>
                                        <td class="px-4 py-4 text-right">${a.n}</td>
                                        <td class="px-4 py-4 text-right">${u(a.media)}</td>
                                        <td class="px-4 py-4 text-right">${u(a.mediana)}</td>
                                        <td class="px-4 py-4 text-right">${u(a.desviacionEstandar)}</td>
                                        <td class="px-4 py-4 text-right">${u(a.varianza)}</td>
                                        <td class="px-4 py-4 text-right">${u(a.minimo)}</td>
                                        <td class="px-4 py-4 text-right">${u(a.maximo)}</td>
                                        ${t?`<td class="px-4 py-4 text-right">${u(a.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function ge(e){if(e.id==="anova-un-factor"){const t=e.tablaAnova;return`
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
                            ${N("Entre grupos",t.entreGrupos)}
                            ${N("Dentro de grupos",t.dentroGrupos)}
                            ${N("Total",t.total)}
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
                    ${E("gl del numerador",u(e.gradosLibertad.numerador))}
                    ${E("gl del denominador",u(e.gradosLibertad.denominador))}
                    ${E("Media ponderada",u(e.mediaPonderada))}
                    ${E("Factor de corrección",u(e.componentesWelch.denominadorCorreccion))}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Rangos y corrección por empates
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${E("Grados de libertad",u(e.gradosLibertad.valor))}
                ${E("H sin corrección",u(e.estadistico.sinCorreccion))}
                ${E("Factor por empates",u(e.empates.factorCorreccion))}
                ${E("Grupos de valores empatados",e.empates.cantidadGruposEmpatados)}
            </dl>
        </article>
    `}function N(e,t){return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${e}
            </td>
            <td class="px-4 py-4 text-right">
                ${u(t.sumaCuadrados)}
            </td>
            <td class="px-4 py-4 text-right">
                ${u(t.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right">
                ${u(t.cuadradoMedio)}
            </td>
        </tr>
    `}function xe(e){let t;return e.id==="anova-un-factor"?t=[["Eta cuadrado, η²",e.tamanioEfecto.etaCuadrado],["Omega cuadrado, ω²",e.tamanioEfecto.omegaCuadrado]]:e.id==="anova-welch"?t=[["Omega cuadrado aproximado",e.tamanioEfecto.omegaCuadradoAproximado]]:t=[["Épsilon cuadrado, ε²",e.tamanioEfecto.epsilonCuadrado]],`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Tamaño del efecto
            </h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${t.map(([a,o])=>E(a,u(o))).join("")}
                ${E("Magnitud orientativa",C(e.tamanioEfecto.interpretacion))}
            </dl>
            ${e.tamanioEfecto.nota?`<p class="text-sm text-amber-900 mt-4">${C(e.tamanioEfecto.nota)}</p>`:""}
        </article>
    `}function he(e){const t=e.postHoc;return t?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 overflow-hidden">
            <div class="px-6 py-5 border-b border-fuchsia-200">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Comparaciones múltiples
                </p>
                <h3 class="text-xl font-black text-fuchsia-950">
                    ${C(t.nombre)}
                </h3>
                <p class="text-sm text-fuchsia-900 mt-2">
                    ${C(t.metodo)}
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
                        ${t.comparaciones.map(ve).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function ve(e){const t=e.diferenciaMedias??e.diferenciaRangos,a=e.estadisticoQ??e.estadisticoZ,o=e.valorPAjustado??e.valorP,r=e.intervaloConfianza?`${u(e.intervaloConfianza.inferior)} a ${u(e.intervaloConfianza.superior)}`:"—";return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${C(e.grupo1)} vs. ${C(e.grupo2)}
            </td>
            <td class="px-4 py-4 text-right">
                ${u(t)}
            </td>
            <td class="px-4 py-4 text-right">
                ${u(a)}
            </td>
            <td class="px-4 py-4 text-right">
                ${u(e.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right font-bold">
                ${K(o)}
            </td>
            <td class="px-4 py-4">
                ${r}
            </td>
            <td class="px-4 py-4 text-center">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${e.significativo?"bg-emerald-100 text-emerald-800":"bg-slate-200 text-slate-700"}">
                    ${e.significativo?"Significativa":"No significativa"}
                </span>
            </td>
        </tr>
    `}function E(e,t){return`
        <div>
            <dt class="text-xs uppercase tracking-widest font-black text-slate-500 mb-1">
                ${e}
            </dt>
            <dd class="text-lg font-black text-slate-900">
                ${t}
            </dd>
        </div>
    `}export{we as CalculadoraTresOMasGrupos};
