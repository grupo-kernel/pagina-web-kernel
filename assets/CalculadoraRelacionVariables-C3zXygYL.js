import{j as ue,a as be}from"./jstat-DiDocX-r.js";const X=ue.jStat??be?.jStat;if(!X)throw new Error("No fue posible cargar el motor estadístico jStat.");const K=e=>Math.min(1,Math.max(0,e));function j(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function xe(e){if(typeof e=="string"){const a=e.trim();return a?Number(a.replace(",",".")):Number.NaN}return Number(e)}function B(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe proporcionarse mediante un arreglo.`);const o=e.map(xe),t=o.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);return o}function _(e,a,o,t,n=3){const i=B(e,o),r=B(a,t);if(i.length!==r.length)throw new RangeError("Las dos variables deben contener la misma cantidad de observaciones y conservar la correspondencia fila por fila.");if(i.length<n)throw new RangeError(`El análisis requiere al menos ${n} pares completos.`);return{x:i,y:r,n:i.length}}function V(e){return e.reduce((a,o)=>a+o,0)/e.length}function ve(e){const a=[...e].sort((t,n)=>t-n),o=Math.floor(a.length/2);return a.length%2?a[o]:(a[o-1]+a[o])/2}function U(e,a=V(e)){return e.reduce((o,t)=>o+(t-a)**2,0)/(e.length-1)}function E(e){const a=V(e),o=U(e,a);return{n:e.length,media:a,mediana:ve(e),varianza:o,desviacionEstandar:Math.sqrt(o),minimo:Math.min(...e),maximo:Math.max(...e)}}function fe(e,a,o=V(e),t=V(a)){return e.reduce((n,i,r)=>n+(i-o)*(a[r]-t),0)/(e.length-1)}function H(e,a){const o=V(e),t=V(a),n=U(e,o),i=U(a,t);if(n===0||i===0)throw new RangeError("No es posible calcular una correlación cuando una de las variables no presenta variación.");const r=fe(e,a,o,t),s=r/Math.sqrt(n*i);return{r:Math.max(-1,Math.min(1,s)),covarianza:r,mediaX:o,mediaY:t,varianzaX:n,varianzaY:i}}function O(e,a){const o=a-2;if(Math.abs(e)>=1)return{valor:e<0?-1/0:1/0,gradosLibertad:o,valorP:0};const t=e*Math.sqrt(o/(1-e**2)),n=K(2*(1-X.studentt.cdf(Math.abs(t),o)));return{valor:t,gradosLibertad:o,valorP:n}}function Q(e,a,o){if(a<=3)return{disponible:!1,nivel:o,inferior:null,superior:null,metodo:"La transformación z de Fisher requiere más de tres pares para obtener un intervalo finito."};const t=1-o,n=X.normal.inv(1-t/2,0,1),i=Math.max(-1+1e-15,Math.min(1-1e-15,e)),r=Math.atanh(i),s=1/Math.sqrt(a-3),l=Math.tanh(r-n*s),d=Math.tanh(r+n*s);return{disponible:!0,nivel:o,inferior:l,superior:d,errorEstandar:s,metodo:"Intervalo aproximado mediante la transformación z de Fisher."}}function T(e){const a=Math.abs(e);return a<.1?"Prácticamente nula":a<.3?"Pequeña":a<.5?"Moderada":a<.7?"Grande":"Muy grande"}function I(e){return e>0?"Positiva":e<0?"Negativa":"Sin dirección"}function J(e,a){return e.map((o,t)=>({x:o,y:a[t],indice:t+1}))}function ae(e){const a=e.map((i,r)=>({valor:i,indice:r,rango:0})).sort((i,r)=>i.valor-r.valor),o=[];let t=0;for(;t<a.length;){let i=t+1;for(;i<a.length&&a[i].valor===a[t].valor;)i+=1;const r=i-t,s=(t+1+i)/2;for(let l=t;l<i;l+=1)a[l].rango=s;r>1&&o.push({valor:a[t].valor,cantidad:r}),t=i}const n=new Array(e.length);return a.forEach(({indice:i,rango:r})=>{n[i]=r}),{rangos:n,gruposEmpatados:o,cantidadValoresEmpatados:o.reduce((i,r)=>i+r.cantidad,0)}}function te(e){const a=new Map;return e.forEach(o=>{const t=typeof o=="number"?`n:${o}`:`s:${String(o)}`;a.set(t,(a.get(t)||0)+1)}),[...a.values()].filter(o=>o>1)}function Y(e,a){return e.reduce((o,t)=>o+a(t),0)}function ge(e,a,o){const t=1-o,n=X.normal.inv(1-t/2,0,1);return{disponible:Number.isFinite(a),nivel:o,inferior:Number.isFinite(a)?Math.max(-1,e-n*a):null,superior:Number.isFinite(a)?Math.min(1,e+n*a):null,errorEstandar:a,metodo:"Intervalo asintótico basado en la aproximación normal."}}function he(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe proporcionarse mediante un arreglo.`);return e.map((o,t)=>{const n=String(o??"").trim();if(!n)throw new TypeError(`${a} contiene una categoría vacía en la posición ${t+1}.`);return n})}function ye(e,a,o={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:i="Variable Y"}=o;j(t);const r=_(e,a,n,i),s=H(r.x,r.y),l=O(s.r,r.n),d=1-t;return{id:"pearson",nombre:"Correlación de Pearson",metodo:"Coeficiente producto-momento para cuantificar una relación lineal entre dos variables cuantitativas.",n:r.n,variables:{x:{nombre:n,valores:r.x,...E(r.x)},y:{nombre:i,valores:r.y,...E(r.y)}},coeficiente:{simbolo:"r",valor:s.r},estadistico:{simbolo:"t",valor:l.valor},gradosLibertad:l.gradosLibertad,valorP:l.valorP,nivelConfianza:t,alfa:d,significativo:l.valorP<d,intervaloConfianza:Q(s.r,r.n,t),tamanioEfecto:{valor:s.r,magnitud:T(s.r),direccion:I(s.r),rCuadrado:s.r**2},detalles:{covarianza:s.covarianza,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["Revise el diagrama de dispersión para confirmar linealidad.","Examine valores atípicos influyentes y la independencia de las observaciones.","Para la inferencia clásica conviene considerar la normalidad bivariada."],datosGrafico:J(r.x,r.y)}}function $e(e,a,o={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:i="Variable Y"}=o;j(t);const r=_(e,a,n,i),s=ae(r.x),l=ae(r.y),d=H(s.rangos,l.rangos),p=O(d.r,r.n),b=1-t;return{id:"spearman",nombre:"Rho de Spearman",metodo:"Correlación de rangos para cuantificar una relación monotónica sin exigir normalidad.",n:r.n,variables:{x:{nombre:n,valores:r.x,rangos:s.rangos,...E(r.x)},y:{nombre:i,valores:r.y,rangos:l.rangos,...E(r.y)}},coeficiente:{simbolo:"ρ_s",valor:d.r},estadistico:{simbolo:"t",valor:p.valor},gradosLibertad:p.gradosLibertad,valorP:p.valorP,nivelConfianza:t,alfa:b,significativo:p.valorP<b,intervaloConfianza:Q(d.r,r.n,t),tamanioEfecto:{valor:d.r,magnitud:T(d.r),direccion:I(d.r)},empates:{variableX:s.gruposEmpatados,variableY:l.gruposEmpatados,cantidadValoresEmpatadosX:s.cantidadValoresEmpatados,cantidadValoresEmpatadosY:l.cantidadValoresEmpatados},detalles:{aproximacionInferencial:"Valor p bilateral aproximado mediante una transformación t del coeficiente de rangos."},diagnosticos:["Spearman resume relaciones monotónicas, no relaciones curvas que cambian de dirección.","Los empates se tratan mediante rangos promedio.","Revise un diagrama de dispersión para interpretar la forma de la relación."],datosGrafico:J(r.x,r.y)}}function we(e,a){const o=e*(e-1)/2;let t=[1];for(let s=2;s<=e;s+=1){const l=s*(s-1)/2,d=Array(l+1).fill(0);for(let p=0;p<t.length;p+=1)for(let b=0;b<s;b+=1)d[p+b]+=t[p];t=d}const n=Math.abs(a);let i=0,r=0;return t.forEach((s,l)=>{const d=o-2*l;r+=s,Math.abs(d)>=n&&(i+=s)}),K(i/r)}function Ee(e,a,o={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:i="Variable Y"}=o;j(t);const r=_(e,a,n,i);let s=0,l=0,d=0,p=0,b=0;for(let c=0;c<r.n-1;c+=1)for(let P=c+1;P<r.n;P+=1){const F=Math.sign(r.x[P]-r.x[c]),A=Math.sign(r.y[P]-r.y[c]);F===0&&A===0?b+=1:F===0?d+=1:A===0?p+=1:F===A?s+=1:l+=1}const h=r.n*(r.n-1)/2,m=te(r.x),v=te(r.y),y=Y(m,c=>c*(c-1)/2),u=Y(v,c=>c*(c-1)/2),k=Math.sqrt((h-y)*(h-u));if(k===0)throw new RangeError("No es posible calcular tau-b porque una de las variables está completamente empatada.");const C=s-l,M=C/k,$=Y(m,c=>c*(c-1)),w=Y(v,c=>c*(c-1)),le=Y(m,c=>c*(c-1)*(2*c+5)),ce=Y(v,c=>c*(c-1)*(2*c+5)),de=Y(m,c=>c*(c-1)*(c-2)),pe=Y(v,c=>c*(c-1)*(c-2));let L=(r.n*(r.n-1)*(2*r.n+5)-le-ce)/18;L+=$*w/(2*r.n*(r.n-1)),r.n>2&&(L+=de*pe/(9*r.n*(r.n-1)*(r.n-2)));const R=Math.sqrt(Math.max(0,L)),W=R===0?0:C/R,S=m.length===0&&v.length===0&&r.n<=50,Z=S?we(r.n,C):K(2*(1-X.normal.cdf(Math.abs(W),0,1))),me=R/k,ee=1-t;return{id:"kendall",nombre:"Tau-b de Kendall",metodo:"Coeficiente ordinal basado en pares concordantes y discordantes con corrección por empates.",n:r.n,variables:{x:{nombre:n,valores:r.x,...E(r.x)},y:{nombre:i,valores:r.y,...E(r.y)}},coeficiente:{simbolo:"τ_b",valor:M},estadistico:{simbolo:S?"S":"z",valor:S?C:W},gradosLibertad:null,valorP:Z,nivelConfianza:t,alfa:ee,significativo:Z<ee,intervaloConfianza:ge(M,me,t),tamanioEfecto:{valor:M,magnitud:T(M),direccion:I(M)},pares:{total:h,concordantes:s,discordantes:l,empatesSoloX:d,empatesSoloY:p,empatesAmbas:b,empatadosX:y,empatadosY:u},empates:{tamaniosVariableX:m,tamaniosVariableY:v},detalles:{s:C,varianzaS:L,aproximacionInferencial:S?"Distribución exacta bilateral de Kendall sin empates.":"Aproximación normal bilateral con corrección de la varianza por empates."},diagnosticos:["Tau-b resulta especialmente útil con escalas ordinales y numerosos empates.","Las observaciones deben ser independientes entre pares.","La dirección depende del orden numérico asignado a las categorías ordinales."],datosGrafico:J(r.x,r.y)}}function ke(e,a,o={}){const{nivelConfianza:t=.95,nombreCategoria:n="Variable dicotómica",nombreCuantitativa:i="Variable cuantitativa",categoriaPositiva:r=null}=o;j(t);const s=he(e,n),l=B(a,i);if(s.length!==l.length)throw new RangeError("La variable dicotómica y la variable cuantitativa deben contener la misma cantidad de observaciones.");if(s.length<3)throw new RangeError("El análisis requiere al menos tres pares completos.");const d=[...new Set(s)];if(d.length!==2)throw new RangeError("La variable dicotómica debe contener exactamente dos categorías diferentes.");let p=r===null?d[1]:String(r).trim();if(!d.includes(p))throw new Error("La categoría positiva seleccionada no aparece en los datos.");const b=d.find($=>$!==p),h=s.map($=>$===p?1:0),m=H(h,l),v=O(m.r,s.length),y=l.filter(($,w)=>h[w]===0),u=l.filter(($,w)=>h[w]===1),k=E(y),C=E(u),M=1-t;return{id:"punto-biserial",nombre:"Correlación punto-biserial",metodo:"Correlación entre una variable dicotómica genuina y una variable cuantitativa.",n:s.length,variables:{dicotomica:{nombre:n,valores:s,categorias:[b,p],categoriaCero:b,categoriaUno:p},cuantitativa:{nombre:i,valores:l,...E(l)}},coeficiente:{simbolo:"r_pb",valor:m.r},estadistico:{simbolo:"t",valor:v.valor},gradosLibertad:v.gradosLibertad,valorP:v.valorP,nivelConfianza:t,alfa:M,significativo:v.valorP<M,intervaloConfianza:Q(m.r,s.length,t),tamanioEfecto:{valor:m.r,magnitud:T(m.r),direccion:I(m.r),rCuadrado:m.r**2},grupos:{categoriaCero:{categoria:b,codigo:0,...k},categoriaUno:{categoria:p,codigo:1,...C},diferenciaMedias:C.media-k.media},detalles:{interpretacionDireccion:`Un coeficiente positivo indica valores más altos de ${i} en la categoría "${p}" respecto de "${b}".`,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["La variable dicotómica debe representar dos categorías reales, no una división artificial de una variable continua.","Revise valores atípicos dentro de cada categoría y la independencia de las observaciones.","La dirección del coeficiente depende de cuál categoría se codifique como 1."],datosGrafico:s.map(($,w)=>({categoria:$,codigo:h[w],valor:l[w],indice:w+1}))}}function Ce({x:e,y:a,prueba:o,nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:i="Variable Y",categoriaPositiva:r=null}){switch(o){case"pearson":return ye(e,a,{nivelConfianza:t,nombreX:n,nombreY:i});case"spearman":case"rho-spearman":return $e(e,a,{nivelConfianza:t,nombreX:n,nombreY:i});case"kendall":case"tau-kendall":return Ee(e,a,{nivelConfianza:t,nombreX:n,nombreY:i});case"punto-biserial":return ke(e,a,{nivelConfianza:t,nombreCategoria:n,nombreCuantitativa:i,categoriaPositiva:r});default:throw new Error("La prueba solicitada no está disponible.")}}function Re(){const e=document.createElement("section");e.className=`
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
                    ${z("Pearson","Dos variables cuantitativas, relación aproximadamente lineal y ausencia de valores atípicos influyentes.")}
                    ${z("Spearman","Variables ordinales o cuantitativas con relación monotónica, sin exigir normalidad.")}
                    ${z("Kendall","Variables ordinales, muestras pequeñas o presencia importante de valores empatados.")}
                    ${z("Punto-biserial","Una variable dicotómica genuina y una variable cuantitativa.")}
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
                    ${oe("x","Variable X")}
                    ${oe("y","Variable Y")}
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
    `;const a=e.querySelector("#formulario-relacion-variables"),o=e.querySelector("#mensaje-error-relacion"),t=e.querySelector("#resultados-relacion-variables"),n=e.querySelector("#campo-categoria-positiva"),i=sessionStorage.getItem("kernel-prueba-relacion-variables");return["pearson","spearman","kendall","punto-biserial"].includes(i)&&(a.elements.prueba.value=i),sessionStorage.removeItem("kernel-prueba-relacion-variables"),N(a,n),a.elements.prueba.addEventListener("change",()=>{N(a,n),t.classList.add("hidden"),D(o)}),a.addEventListener("submit",r=>{r.preventDefault(),D(o);try{const s=a.elements.prueba.value;if(!s)throw new Error("Seleccione el coeficiente de relación que desea calcular.");const l=a.elements.nombreX.value.trim()||"Variable X",d=a.elements.nombreY.value.trim()||"Variable Y",p=a.elements.valoresX.value,b=a.elements.valoresY.value,m=s==="punto-biserial"?Me(p,l):re(p,l),v=re(b,d),y=a.elements.categoriaPositiva.value.trim()||null,u=Number(a.elements.nivelConfianza.value),k=Ce({x:m,y:v,prueba:s,nivelConfianza:u,nombreX:l,nombreY:d,categoriaPositiva:y});t.innerHTML=Xe(k),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(s){t.classList.add("hidden"),Te(o,s instanceof Error?s.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",r=>{const s=r.target.closest("[data-action]");if(!s)return;const l=s.dataset.action;if(l==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}if(l==="cargar-ejemplo"){Ye(a),N(a,n),G(a),t.classList.add("hidden"),D(o);return}l==="limpiar"&&(a.reset(),a.elements.nombreX.value="Variable X",a.elements.nombreY.value="Variable Y",N(a,n),G(a),t.innerHTML="",t.classList.add("hidden"),D(o))}),a.addEventListener("input",()=>G(a)),e}function z(e,a){return`
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
    `}function oe(e,a){const o=e.toUpperCase();return`
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
                    name="nombre${o}"
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
                    name="valores${o}"
                    rows="11"
                    placeholder="12&#10;15&#10;18&#10;20"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                ></textarea>
            </label>
        </article>
    `}function N(e,a){const t=e.elements.prueba.value==="punto-biserial",n=e.querySelector('[data-etiqueta-valores="x"]'),i=e.querySelector('[data-etiqueta-valores="y"]'),r=e.elements.valoresX;a.classList.toggle("hidden",!t),n.textContent=t?"Categorías dicotómicas":"Valores de Variable X",i.textContent=t?"Valores cuantitativos":"Valores de Variable Y",r.placeholder=t?`Sin tutoría
Tutoría
Sin tutoría
Tutoría`:`12
15
18
20`}function re(e,a){const o=e.trim();if(!o)throw new Error(`${a} no contiene datos.`);const t=o.split(/[\s;]+/).filter(Boolean),n=t.map(r=>Number(r.replace(",","."))),i=n.findIndex(r=>!Number.isFinite(r));if(i!==-1)throw new Error(`${a} contiene un valor no válido: "${t[i]}".`);return n}function Me(e,a){const o=e.trim();if(!o)throw new Error(`${a} no contiene categorías.`);const t=o.split(/\n|;/).map(n=>n.trim()).filter(Boolean);if(t.length<3)throw new Error(`${a} debe contener al menos tres categorías emparejadas.`);return t}function ne(e,a){return e.trim()?e.trim().split(a?/\n|;/:/[\s;]+/).map(o=>o.trim()).filter(Boolean).length:0}function G(e){const a=e.elements.prueba.value==="punto-biserial",o=ne(e.elements.valoresX.value,a),t=ne(e.elements.valoresY.value,!1);e.querySelector('[data-contador="x"]').textContent=`${o} ${o===1?"valor":"valores"}`,e.querySelector('[data-contador="y"]').textContent=`${t} ${t===1?"valor":"valores"}`}function Ye(e){const a=e.elements.prueba.value||"pearson";if(e.elements.prueba.value=a,e.elements.nivelConfianza.value="0.95",a==="punto-biserial"){e.elements.nombreX.value="Participación en tutoría",e.elements.nombreY.value="Calificación final",e.elements.valoresX.value=`Sin tutoría
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
3`}function f(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function Ve(e){return Number.isFinite(e)?e<.001?"< 0.001":f(e,4):"—"}function g(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Xe(e){const a=Math.round(e.nivelConfianza*100),o=e.significativo,t=o?`Se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${g(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${g(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${q(e.coeficiente.simbolo,f(e.coeficiente.valor),"Coeficiente")}
                    ${q("p",Ve(e.valorP),"Valor p bilateral")}
                    ${q("n",e.n,"Pares completos")}
                    ${q(e.estadistico.simbolo,f(e.estadistico.valor),e.gradosLibertad===null?"Estadístico inferencial":`gl = ${e.gradosLibertad}`)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${Le(e)}
                    ${Se(e)}
                </div>

                ${qe(e)}
                ${Pe(e)}
                ${ze(e)}
                ${Ne(e)}

                <article class="mt-6 rounded-2xl border ${o?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
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
    `}function q(e,a,o){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${o}
            </p>
        </article>
    `}function Le(e){const a=e.tamanioEfecto.rCuadrado;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Magnitud y dirección
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${x("Coeficiente",e.tamanioEfecto.valor)}
                ${x("Magnitud",e.tamanioEfecto.magnitud,!0)}
                ${x("Dirección",e.tamanioEfecto.direccion,!0)}
                ${Number.isFinite(a)?x("R² descriptivo",a):""}
            </dl>
        </article>
    `}function Se(e){const a=e.intervaloConfianza;return`
        <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Intervalo de confianza
            </h3>
            ${a?.disponible?`
                        <dl class="grid grid-cols-2 gap-4">
                            ${x("Límite inferior",a.inferior)}
                            ${x("Límite superior",a.superior)}
                        </dl>
                    `:`
                        <p class="text-blue-900 leading-relaxed">
                            El intervalo no está disponible para este tamaño muestral.
                        </p>
                    `}
            <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                ${g(a?.metodo||"")}
            </p>
        </article>
    `}function x(e,a,o=!1){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${o?g(a):f(a)}
            </dd>
        </div>
    `}function Pe(e){if(e.id==="punto-biserial"){const a=e.grupos.categoriaCero,o=e.grupos.categoriaUno;return`
            <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <h3 class="text-xl font-black text-slate-900">
                        Descriptivos por categoría
                    </h3>
                </header>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[700px] text-sm">
                        <caption class="sr-only">
                            Estadísticos descriptivos de la variable cuantitativa por categoría
                        </caption>
                        <thead class="bg-slate-100 text-slate-700">
                            <tr>
                                <th scope="col" class="text-left px-5 py-3">Categoría</th>
                                <th scope="col" class="text-right px-5 py-3">n</th>
                                <th scope="col" class="text-right px-5 py-3">Media</th>
                                <th scope="col" class="text-right px-5 py-3">Mediana</th>
                                <th scope="col" class="text-right px-5 py-3">DE</th>
                                <th scope="col" class="text-right px-5 py-3">Mínimo</th>
                                <th scope="col" class="text-right px-5 py-3">Máximo</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            ${se(a)}
                            ${se(o)}
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
                    <caption class="sr-only">
                        Estadísticos descriptivos de las variables analizadas
                    </caption>
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th scope="col" class="text-left px-5 py-3">Variable</th>
                            <th scope="col" class="text-right px-5 py-3">Media</th>
                            <th scope="col" class="text-right px-5 py-3">Mediana</th>
                            <th scope="col" class="text-right px-5 py-3">DE</th>
                            <th scope="col" class="text-right px-5 py-3">Mínimo</th>
                            <th scope="col" class="text-right px-5 py-3">Máximo</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${ie(e.variables.x)}
                        ${ie(e.variables.y)}
                    </tbody>
                </table>
            </div>
        </article>
    `}function ie(e){return`
        <tr>
            <th scope="row" class="px-5 py-3 text-left font-bold text-slate-900">
                ${g(e.nombre)}
            </th>
            <td class="px-5 py-3 text-right">${f(e.media)}</td>
            <td class="px-5 py-3 text-right">${f(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${f(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${f(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${f(e.maximo)}</td>
        </tr>
    `}function se(e){return`
        <tr>
            <th scope="row" class="px-5 py-3 text-left font-bold text-slate-900">
                ${g(e.categoria)}
            </th>
            <td class="px-5 py-3 text-right">${e.n}</td>
            <td class="px-5 py-3 text-right">${f(e.media)}</td>
            <td class="px-5 py-3 text-right">${f(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${f(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${f(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${f(e.maximo)}</td>
        </tr>
    `}function ze(e){return e.id==="pearson"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Detalles de Pearson
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${x("Covarianza",e.detalles.covarianza)}
                    ${x("R²",e.tamanioEfecto.rCuadrado)}
                    ${x("Grados de libertad",e.gradosLibertad)}
                </dl>
            </article>
        `:e.id==="spearman"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Rangos y empates
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${x("Valores empatados en X",e.empates.cantidadValoresEmpatadosX)}
                    ${x("Valores empatados en Y",e.empates.cantidadValoresEmpatadosY)}
                </dl>
            </article>
        `:e.id==="kendall"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Pares concordantes, discordantes y empates
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${x("Total de pares",e.pares.total)}
                    ${x("Concordantes",e.pares.concordantes)}
                    ${x("Discordantes",e.pares.discordantes)}
                    ${x("Empates solo en X",e.pares.empatesSoloX)}
                    ${x("Empates solo en Y",e.pares.empatesSoloY)}
                    ${x("Empates en ambas",e.pares.empatesAmbas)}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <h3 class="text-xl font-black text-sky-950 mb-4">
                Comparación entre categorías
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${x("Diferencia de medias",e.grupos.diferenciaMedias)}
                ${x("Categoría codificada como 1",e.variables.dicotomica.categoriaUno,!0)}
            </dl>
            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                ${g(e.detalles.interpretacionDireccion)}
            </p>
        </article>
    `}function Ne(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Comprobaciones metodológicas
            </h3>
            <ul class="space-y-3 text-amber-950">
                ${e.diagnosticos.map(a=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black" aria-hidden="true">•</span>
                                <span>${g(a)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function qe(e){return e.id==="punto-biserial"?je(e):De(e)}function De(e){const a=e.datosGrafico,o=760,t=380,n=55,i=a.map(u=>u.x),r=a.map(u=>u.y),s=Math.min(...i),l=Math.max(...i),d=Math.min(...r),p=Math.max(...r),b=l-s||1,h=p-d||1,m=u=>n+(u-s)/b*(o-2*n),v=u=>t-n-(u-d)/h*(t-2*n),y=a.map(u=>`
                <circle
                    cx="${m(u.x)}"
                    cy="${v(u.y)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${g(`${u.x}, ${u.y}`)}</title>
                </circle>
            `).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Diagrama de dispersión
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${o} ${t}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Diagrama de dispersión de las variables"
                >
                    <line x1="${n}" y1="${t-n}" x2="${o-n}" y2="${t-n}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${n}" y1="${n}" x2="${n}" y2="${t-n}" class="stroke-slate-400" stroke-width="2"></line>
                    ${y}
                    <text x="${o/2}" y="${t-12}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${g(e.variables.x.nombre)}
                    </text>
                    <text x="18" y="${t/2}" text-anchor="middle" transform="rotate(-90 18 ${t/2})" class="fill-slate-700 text-sm font-bold">
                        ${g(e.variables.y.nombre)}
                    </text>
                </svg>
            </div>
        </article>
    `}function je(e){const a=e.datosGrafico,o=e.variables.dicotomica.categorias,t=760,n=380,i=60,r=a.map(m=>m.valor),s=Math.min(...r),d=Math.max(...r)-s||1,p=[t*.32,t*.68],b=m=>n-i-(m-s)/d*(n-2*i),h=a.map((m,v)=>{const y=m.codigo===0?p[0]:p[1],u=(v%5-2)*6;return`
                <circle
                    cx="${y+u}"
                    cy="${b(m.valor)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${g(`${m.categoria}: ${m.valor}`)}</title>
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
                    <line x1="${i}" y1="${n-i}" x2="${t-i}" y2="${n-i}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${i}" y1="${i}" x2="${i}" y2="${n-i}" class="stroke-slate-400" stroke-width="2"></line>
                    ${h}
                    <text x="${p[0]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${g(o[0])}
                    </text>
                    <text x="${p[1]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${g(o[1])}
                    </text>
                </svg>
            </div>
        </article>
    `}function Te(e,a){e.textContent=a,e.classList.remove("hidden")}function D(e){e.textContent="",e.classList.add("hidden")}export{Re as CalculadoraRelacionVariables};
