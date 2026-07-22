import{j as F,a as H}from"./jstat-DiDocX-r.js";const k=F.jStat??H?.jStat;if(!k)throw new Error("No fue posible cargar el motor estadístico jStat.");function q(e){return Math.min(1,Math.max(0,e))}function W(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function B(e){return typeof e=="string"&&e.trim()===""?Number.NaN:Number(typeof e=="string"?e.trim().replace(",","."):e)}function h(e,t){if(!Array.isArray(e))throw new TypeError(`${t} debe ser un arreglo de valores.`);const o=e.map(B),a=o.findIndex(i=>!Number.isFinite(i));if(a!==-1)throw new TypeError(`${t} contiene un valor no numérico en la posición ${a+1}.`);if(o.length<2)throw new RangeError(`${t} debe contener al menos dos observaciones.`);return o}function A(e){return e.reduce((t,o)=>t+o,0)/e.length}function K(e){const t=[...e].sort((a,i)=>a-i),o=Math.floor(t.length/2);return t.length%2!==0?t[o]:(t[o-1]+t[o])/2}function Z(e,t){return e.reduce((a,i)=>a+(i-t)**2,0)/(e.length-1)}function y(e){const t=h(e,"La muestra"),o=A(t),a=Z(t,o);return{n:t.length,media:o,mediana:K(t),varianza:a,desviacionEstandar:Math.sqrt(a),minimo:Math.min(...t),maximo:Math.max(...t)}}function P(e,t){return q(2*(1-k.studentt.cdf(Math.abs(e),t)))}function T(e,t,o,a){W(a);const i=1-a,r=k.studentt.inv(1-i/2,o),n=r*t;return{nivel:a,valorCritico:r,inferior:e-n,superior:e+n}}function R(e,t,o,a,i){const r=a+i-2,n=((a-1)*t+(i-1)*o)/r,s=Math.sqrt(n);if(s===0)return{dCohen:0,gHedges:0,correccionHedges:1};const u=e/s,f=1-3/(4*r-1);return{dCohen:u,gHedges:f*u,correccionHedges:f}}function O(e,t,o={}){const{nivelConfianza:a=.95}=o,i=h(e,"El grupo 1"),r=h(t,"El grupo 2"),n=y(i),s=y(r),u=n.n+s.n-2,f=((n.n-1)*n.varianza+(s.n-1)*s.varianza)/u,p=Math.sqrt(f*(1/n.n+1/s.n));if(p===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const c=n.media-s.media,m=c/p,b=P(m,u);return{id:"t-student-independientes",nombre:"t de Student para muestras independientes",metodo:"Varianzas combinadas",grupo1:n,grupo2:s,diferenciaMedias:c,errorEstandar:p,varianzaCombinada:f,estadistico:{simbolo:"t",valor:m},gradosLibertad:u,valorP:b,intervaloConfianza:T(c,p,u,a),tamanioEfecto:R(c,n.varianza,s.varianza,n.n,s.n)}}function _(e,t,o={}){const{nivelConfianza:a=.95}=o,i=h(e,"El grupo 1"),r=h(t,"El grupo 2"),n=y(i),s=y(r),u=n.varianza/n.n,f=s.varianza/s.n,p=u+f,c=Math.sqrt(p);if(c===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const m=p**2,b=u**2/(n.n-1)+f**2/(s.n-1),x=m/b,g=n.media-s.media,w=g/c,E=P(w,x);return{id:"t-welch-independientes",nombre:"t de Welch para muestras independientes",metodo:"Varianzas no combinadas",grupo1:n,grupo2:s,diferenciaMedias:g,errorEstandar:c,estadistico:{simbolo:"t",valor:w},gradosLibertad:x,valorP:E,intervaloConfianza:T(g,c,x,a),tamanioEfecto:R(g,n.varianza,s.varianza,n.n,s.n)}}function J(e,t){const o=[...e.map(r=>({valor:r,grupo:1,rango:0})),...t.map(r=>({valor:r,grupo:2,rango:0}))].sort((r,n)=>r.valor-n.valor);let a=0,i=0;for(;a<o.length;){let r=a+1;for(;r<o.length&&o[r].valor===o[a].valor;)r+=1;const n=r-a,s=(a+1+r)/2;for(let u=a;u<r;u+=1)o[u].rango=s;n>1&&(i+=n**3-n),a=r}return{observaciones:o,correccionEmpates:i}}function Q(e,t){const o=h(e,"El grupo 1"),a=h(t,"El grupo 2"),i=y(o),r=y(a),{observaciones:n,correccionEmpates:s}=J(o,a),u=n.filter(({grupo:v})=>v===1).reduce((v,C)=>v+C.rango,0),f=n.filter(({grupo:v})=>v===2).reduce((v,C)=>v+C.rango,0),p=i.n,c=r.n,m=p+c,b=u-p*(p+1)/2,x=f-c*(c+1)/2,g=Math.min(b,x),w=p*c/2,E=p*c/12*(m+1-s/(m*(m-1)));if(E<=0)throw new Error("No puede calcularse Mann–Whitney porque todos los valores son idénticos.");const G=Math.sqrt(E),z=b-w,V=z===0?0:Math.sign(z)*.5,M=(z-V)/G,U=q(2*(1-k.normal.cdf(Math.abs(M),0,1))),N=2*b/(p*c)-1;return{id:"mann-whitney",nombre:"Prueba U de Mann–Whitney",metodoValorP:"Aproximación normal bilateral con corrección por continuidad y empates",grupo1:i,grupo2:r,sumaRangos1:u,sumaRangos2:f,estadistico:{simbolo:"U",valor:g,u1:b,u2:x},estadisticoZ:M,valorP:U,correccionEmpates:s,tamanioEfecto:{deltaCliff:N,correlacionBiserialRangos:N,r:M/Math.sqrt(m)}}}function X({grupo1:e,grupo2:t,prueba:o,nivelConfianza:a=.95}){switch(o){case"student":return O(e,t,{nivelConfianza:a});case"welch":return _(e,t,{nivelConfianza:a});case"mann-whitney":return Q(e,t);default:throw new Error("La prueba solicitada no está disponible.")}}function ne(){const e=document.createElement("section");e.className=`
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
    `;const t=e.querySelector("#formulario-dos-grupos"),o=e.querySelector("#mensaje-error"),a=e.querySelector("#resultados-dos-grupos"),i=["student","welch","mann-whitney"],r=sessionStorage.getItem("kernel-prueba-dos-grupos");i.includes(r)&&(t.elements.prueba.value=r),sessionStorage.removeItem("kernel-prueba-dos-grupos");const n=t.elements.grupo1,s=t.elements.grupo2,u=e.querySelector("#contador-grupo-1"),f=e.querySelector("#contador-grupo-2"),p=()=>{u.textContent=D(S(n.value)),f.textContent=D(S(s.value))};return n.addEventListener("input",p),s.addEventListener("input",p),t.addEventListener("submit",c=>{c.preventDefault(),j(o);try{const m=t.elements.prueba.value;if(!m)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const b=L(n.value,"El grupo 1"),x=L(s.value,"El grupo 2"),g=Number(t.elements.nivelConfianza.value),w=X({grupo1:b,grupo2:x,prueba:m,nivelConfianza:g});a.innerHTML=te(w,g),a.classList.remove("hidden"),a.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){a.classList.add("hidden"),Y(o,m instanceof Error?m.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",c=>{const m=c.target.closest("[data-action]");if(!m)return;const b=m.dataset.action;if(b==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(b==="cargar-ejemplo"){t.elements.prueba.value||(t.elements.prueba.value="welch"),n.value=`18
20
17.5
19
21
16
22
18.5`,s.value=`14
15
17
13.5
18
16
15.5
14.5`,p(),j(o),a.classList.add("hidden");return}b==="limpiar"&&(t.reset(),n.value="",s.value="",p(),j(o),a.innerHTML="",a.classList.add("hidden"))}),e}function L(e,t){const o=e.trim();if(!o)throw new Error(`${t} no contiene datos.`);const a=o.split(/[\s;]+/).filter(Boolean),i=a.map(n=>Number(n.replace(",","."))),r=i.findIndex(n=>!Number.isFinite(n));if(r!==-1)throw new Error(`${t} contiene un valor no válido: "${a[r]}".`);if(i.length<2)throw new Error(`${t} debe contener al menos dos observaciones.`);return i}function S(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function D(e){return e===1?"1 valor":`${e} valores`}function Y(e,t){e.textContent=t,e.classList.remove("hidden")}function j(e){e.textContent="",e.classList.add("hidden")}function l(e,t=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):"—"}function ee(e){return Number.isFinite(e)?e<.001?"< 0.001":l(e,4):"—"}function te(e,t=.95){const o=1-t,a=e.valorP<o,i=o.toFixed(2),r=Math.round(t*100),n=a?`Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${i}, correspondiente a un nivel de confianza del ${r} %.`:`No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${i}, correspondiente a un nivel de confianza del ${r} %.`;return`
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
                    ${$(e.estadistico.simbolo,l(e.estadistico.valor),"Estadístico")}

                    ${$("p",ee(e.valorP),"Valor bilateral")}

                    ${$("n₁",e.grupo1.n,"Grupo 1")}

                    ${$("n₂",e.grupo2.n,"Grupo 2")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${I("Grupo 1",e.grupo1)}

                    ${I("Grupo 2",e.grupo2)}
                </div>

                ${ae(e)}

                <article class="mt-6 rounded-2xl border ${a?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
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
    `}function $(e,t,o){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-blue-700 mb-1">
                ${e}
            </p>

            <p class="text-2xl font-black text-slate-900">
                ${t}
            </p>

            <p class="text-sm text-slate-500 mt-1">
                ${o}
            </p>
        </article>
    `}function I(e,t){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${e}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${d("Media",l(t.media))}

                ${d("Mediana",l(t.mediana))}

                ${d("Desviación estándar",l(t.desviacionEstandar))}

                ${d("Varianza",l(t.varianza))}

                ${d("Mínimo",l(t.minimo))}

                ${d("Máximo",l(t.maximo))}
            </dl>
        </article>
    `}function ae(e){if(e.id==="mann-whitney")return`
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${d("Suma de rangos, grupo 1",l(e.sumaRangos1))}

                    ${d("Suma de rangos, grupo 2",l(e.sumaRangos2))}

                    ${d("U₁",l(e.estadistico.u1))}

                    ${d("U₂",l(e.estadistico.u2))}

                    ${d("z",l(e.estadisticoZ))}

                    ${d("Delta de Cliff",l(e.tamanioEfecto.deltaCliff))}

                    ${d("Correlación r",l(e.tamanioEfecto.r))}
                </dl>
            </article>
        `;const t=e.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${d("Diferencia de medias",l(e.diferenciaMedias))}

                ${d("Error estándar",l(e.errorEstandar))}

                ${d("Grados de libertad",l(e.gradosLibertad))}

                ${d(`IC ${t.nivel*100} %: límite inferior`,l(t.inferior))}

                ${d(`IC ${t.nivel*100} %: límite superior`,l(t.superior))}

                ${d("d de Cohen",l(e.tamanioEfecto.dCohen))}

                ${d("g de Hedges",l(e.tamanioEfecto.gHedges))}
            </dl>
        </article>
    `}function d(e,t){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>

            <dd class="text-lg font-black text-slate-900 mt-1">
                ${t}
            </dd>
        </div>
    `}export{ne as CalculadoraDosGrupos};
