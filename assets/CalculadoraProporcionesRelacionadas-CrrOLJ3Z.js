import{j as I,a as Q}from"./jstat-DiDocX-r.js";import{p as B}from"./exportacionesCalculadoras-hyqGXsSg.js";import"./index-BvS_UurG.js";const q=I.jStat??Q?.jStat;if(!q)throw new Error("No fue posible cargar el motor estadístico jStat.");function A(e){return Math.min(1,Math.max(0,e))}function T(e,t,a){if(e===!0||e===1||e==="1")return 1;if(e===!1||e===0||e==="0")return 0;const o=String(e??"").trim().toLowerCase();if(["si","sí","yes","verdadero","true"].includes(o))return 1;if(["no","false","falso"].includes(o))return 0;throw new TypeError(`La observación de la fila ${t+1}, columna ${a+1} debe codificarse como 0 o 1.`)}function S(e,t=2){if(!Array.isArray(e)||e.length<2)throw new RangeError("Se requieren al menos dos participantes o unidades relacionadas.");const a=Array.isArray(e[0])?e[0].length:0;if(a<t)throw new RangeError(`Se requieren al menos ${t} mediciones o condiciones.`);const o=e.map((s,r)=>{if(!Array.isArray(s)||s.length!==a)throw new RangeError(`La fila ${r+1} no contiene ${a} observaciones.`);return s.map((d,i)=>T(d,r,i))});return{datos:o,n:o.length,k:a}}function z(e,t){if(e==null)return Array.from({length:t},(o,s)=>`Condición ${s+1}`);if(!Array.isArray(e)||e.length!==t)throw new RangeError(`Debe proporcionar exactamente ${t} etiquetas.`);const a=e.map((o,s)=>{const r=String(o??"").trim();if(!r)throw new Error(`La etiqueta ${s+1} está vacía.`);return r});if(new Set(a).size!==a.length)throw new Error("Las etiquetas de las condiciones deben ser diferentes.");return a}function _(e,t){const a=Math.min(t,e-t);let o=1;for(let s=1;s<=a;s+=1)o*=(e-a+s)/s;return o}function V(e,t){if(t===0)return 1;const a=Math.min(e,t-e);let o=0;for(let s=0;s<=a;s+=1)o+=_(t,s)*.5**t;return A(2*o)}function F(e,t){const a=e.length,o=e.reduce((m,x)=>m+x,0)/a,s=e.reduce((m,x)=>m+(x-o)**2,0)/Math.max(1,a-1),r=Math.sqrt(s/a),d=1-t,i=q.normal.inv(1-d/2,0,1);return{nivel:t,metodo:"Intervalo normal para la diferencia de proporciones pareadas",errorEstandar:r,inferior:Math.max(-1,o-i*r),superior:Math.min(1,o+i*r)}}function D(e,t){const a=e.length;return t.map((o,s)=>{const r=e.reduce((d,i)=>d+i[s],0);return{indice:s,etiqueta:o,exitos:r,fracasos:a-r,proporcion:r/a}})}function R(e,t={}){const{etiquetas:a=null,nivelConfianza:o=.95,metodo:s="automatico"}=t;if(!(o>0&&o<1))throw new RangeError("El nivel de confianza debe estar entre 0 y 1.");const{datos:r,n:d,k:i}=S(e,2);if(i!==2)throw new RangeError("La prueba de McNemar requiere exactamente dos mediciones relacionadas.");const m=z(a,2);let x=0,c=0,n=0,f=0;r.forEach(([$,M])=>{$===0&&M===0?x+=1:$===0&&M===1?c+=1:$===1&&M===0?n+=1:f+=1});const u=c+n,y=V(c,u),k=u===0?0:Math.max(0,Math.abs(c-n)-1)**2/u,g=u===0?1:A(1-q.chisquare.cdf(k,1)),v=s==="exacta"||s==="automatico"&&u<=25,C=v?y:g,l=r.map(([$,M])=>M-$),p=(c-n)/d,w=c===0||n===0?.5:0,P=(c+w)/(n+w);return{id:"mcnemar",nombre:v?"Prueba exacta de McNemar":"Prueba de McNemar",metodo:v?"Prueba binomial exacta bilateral sobre los pares discordantes":"Aproximación chi-cuadrado bilateral con corrección por continuidad",n:d,etiquetas:m,tablaPareada:{ambosNo:x,cambio01:c,cambio10:n,ambosSi:f},resumenCondiciones:D(r,m),discordantes:u,estadistico:{simbolo:v?"b":"χ²",valor:v?Math.min(c,n):k},gradosLibertad:v?null:1,valorP:C,valorPExacto:y,valorPAsintotico:g,significativo:C<1-o,diferenciaProporciones:p,intervaloConfianzaDiferencia:F(l,o),tamanioEfecto:{oddsRatioPareada:P,correccionHaldaneAnscombe:w,diferenciaProporciones:p},advertencias:u<10?["Hay pocos pares discordantes; la versión exacta es preferible."]:[]}}function G(e){const t=e.map((s,r)=>({comparacion:s,indice:r})).sort((s,r)=>s.comparacion.valorP-r.comparacion.valorP),a=t.length;let o=0;return t.forEach(({comparacion:s},r)=>{const d=Math.min(1,(a-r)*s.valorP);s.valorPAjustadoHolm=Math.max(o,d),o=s.valorPAjustadoHolm}),e}function O(e,t={}){const{etiquetas:a=null,nivelConfianza:o=.95,comparacionesPosteriores:s=!0}=t;if(!(o>0&&o<1))throw new RangeError("El nivel de confianza debe estar entre 0 y 1.");const{datos:r,n:d,k:i}=S(e,3),m=z(a,i),x=Array.from({length:i},(l,p)=>r.reduce((w,P)=>w+P[p],0)),c=r.map(l=>l.reduce((p,w)=>p+w,0)),n=x.reduce((l,p)=>l+p,0),f=i*n-c.reduce((l,p)=>l+p**2,0),u=(i-1)*(i*x.reduce((l,p)=>l+p**2,0)-n**2),y=f===0?0:u/f,k=i-1,g=f===0?1:A(1-q.chisquare.cdf(y,k)),v=1-o,C=[];if(s){for(let l=0;l<i-1;l+=1)for(let p=l+1;p<i;p+=1){const w=r.map($=>[$[l],$[p]]),P=R(w,{etiquetas:[m[l],m[p]],nivelConfianza:o,metodo:"exacta"});C.push({condicion1:m[l],condicion2:m[p],valorP:P.valorP,diferenciaProporciones:P.diferenciaProporciones,oddsRatioPareada:P.tamanioEfecto.oddsRatioPareada})}G(C),C.forEach(l=>{l.significativaAjustada=l.valorPAjustadoHolm<v})}return{id:"q-cochran",nombre:"Prueba Q de Cochran",metodo:"Comparación global de tres o más proporciones relacionadas mediante respuestas binarias",n:d,k:i,etiquetas:m,resumenCondiciones:D(r,m),totalesFilas:c,estadistico:{simbolo:"Q",valor:y},gradosLibertad:k,valorP:g,significativo:g<v,tamanioEfecto:{wKendallEquivalente:y/(d*(i-1))},comparacionesPosteriores:C,ajusteMultiplicidad:s?"Holm":null,advertencias:f===0?["Todas las unidades presentan el mismo patrón; no existe variación para contrastar."]:[]}}function K({matriz:e,etiquetas:t,prueba:a,nivelConfianza:o=.95,metodoMcNemar:s="automatico"}){if(a==="mcnemar")return R(e,{etiquetas:t,nivelConfianza:o,metodo:s});if(a==="q-cochran")return O(e,{etiquetas:t,nivelConfianza:o,comparacionesPosteriores:!0});throw new Error("La prueba de proporciones relacionadas solicitada no está disponible.")}const L="kernel-prueba-proporciones-relacionadas",U="kernel-calculadora-proporciones-relacionadas-activa";function b(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function h(e,t=4){return Number.isFinite(e)?e.toLocaleString("es-DO",{minimumFractionDigits:t,maximumFractionDigits:t}):"—"}function j(e){return Number.isFinite(e)?e<1e-4?"< 0.0001":h(e,4):"—"}function W(e,t){const a=e.split(/\r?\n/).map(o=>o.trim()).filter(Boolean);if(a.length<2)throw new Error("Introduzca al menos dos filas, una por participante o unidad relacionada.");return a.map((o,s)=>{const r=o.split(/[\s,;]+/).filter(Boolean);if(r.length!==t)throw new Error(`La fila ${s+1} debe contener exactamente ${t} valores.`);return r.map(d=>{const i=Number(d);if(i!==0&&i!==1)throw new Error(`La fila ${s+1} contiene "${d}". Utilice únicamente 0 y 1.`);return i})})}function J(e,t){const a=e.split(/[;,]+/).map(o=>o.trim()).filter(Boolean);if(!a.length)return Array.from({length:t},(o,s)=>`Condición ${s+1}`);if(a.length!==t)throw new Error(`Introduzca exactamente ${t} etiquetas separadas por comas.`);if(new Set(a).size!==a.length)throw new Error("Las etiquetas de las condiciones deben ser diferentes.");return a}function E(e,t,a=""){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs font-black uppercase tracking-widest text-slate-500">
                ${b(e)}
            </p>
            <p class="mt-2 text-2xl font-black text-slate-950">${b(t)}</p>
            ${a?`<p class="mt-2 text-sm leading-relaxed text-slate-600">${b(a)}</p>`:""}
        </article>
    `}function H(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="w-full border-collapse text-sm">
                <caption class="sr-only">
                    Frecuencias y proporciones observadas en cada condición relacionada
                </caption>
                <thead class="bg-slate-100 text-slate-700">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left font-black">Condición</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">Sí (1)</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">No (0)</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">Proporción</th>
                    </tr>
                </thead>
                <tbody>
                    ${e.map(t=>`
                        <tr class="border-t border-slate-200">
                            <th scope="row" class="px-4 py-3 text-left font-bold text-slate-800">
                                ${b(t.etiqueta)}
                            </th>
                            <td class="px-4 py-3 text-right text-slate-700">${t.exitos}</td>
                            <td class="px-4 py-3 text-right text-slate-700">${t.fracasos}</td>
                            <td class="px-4 py-3 text-right font-bold text-slate-900">
                                ${h(t.proporcion*100,2)} %
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function X(e){return e.length?`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="w-full border-collapse text-sm">
                <caption class="sr-only">
                    Comparaciones posteriores pareadas mediante McNemar exacta y ajuste de Holm
                </caption>
                <thead class="bg-slate-100 text-slate-700">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left font-black">Comparación</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">p exacta</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">p Holm</th>
                        <th scope="col" class="px-4 py-3 text-right font-black">Diferencia</th>
                        <th scope="col" class="px-4 py-3 text-center font-black">Conclusión</th>
                    </tr>
                </thead>
                <tbody>
                    ${e.map(t=>`
                        <tr class="border-t border-slate-200">
                            <th scope="row" class="px-4 py-3 text-left font-bold text-slate-800">
                                ${b(t.condicion1)} vs. ${b(t.condicion2)}
                            </th>
                            <td class="px-4 py-3 text-right">${j(t.valorP)}</td>
                            <td class="px-4 py-3 text-right font-bold">
                                ${j(t.valorPAjustadoHolm)}
                            </td>
                            <td class="px-4 py-3 text-right">
                                ${h(t.diferenciaProporciones*100,2)} pp
                            </td>
                            <td class="px-4 py-3 text-center">
                                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${t.significativaAjustada?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-700"}">
                                    ${t.significativaAjustada?"Significativa":"No significativa"}
                                </span>
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `:""}function Y(e){const t=e.tablaPareada,a=e.intervaloConfianzaDiferencia;return`
        <section class="overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-xl">
            <header class="bg-emerald-700 px-6 py-7 text-white md:px-9">
                <p class="text-xs font-black uppercase tracking-widest text-emerald-100">Resultado</p>
                <h2 class="mt-2 text-3xl font-black">${b(e.nombre)}</h2>
                <p class="mt-3 max-w-3xl leading-relaxed text-emerald-50">
                    ${b(e.metodo)}
                </p>
            </header>

            <div class="space-y-7 px-6 py-8 md:px-9">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    ${E(e.estadistico.simbolo,h(e.estadistico.valor),"Estadístico del contraste")}
                    ${E("Valor p",j(e.valorP),e.significativo?"Evidencia de cambio al nivel seleccionado":"No se detecta un cambio estadísticamente significativo")}
                    ${E("Pares discordantes",String(e.discordantes),"Son los pares que determinan la prueba")}
                    ${E("Diferencia pareada",`${h(e.diferenciaProporciones*100,2)} pp`,"Condición 2 menos condición 1")}
                </div>

                ${H(e.resumenCondiciones)}

                <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <article class="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                        <h3 class="text-lg font-black text-cyan-950">Tabla pareada</h3>
                        <dl class="mt-4 grid grid-cols-2 gap-3 text-sm">
                            <div class="rounded-xl bg-white p-3">
                                <dt class="font-bold text-slate-600">0 → 0</dt>
                                <dd class="mt-1 text-xl font-black">${t.ambosNo}</dd>
                            </div>
                            <div class="rounded-xl bg-white p-3">
                                <dt class="font-bold text-slate-600">0 → 1</dt>
                                <dd class="mt-1 text-xl font-black">${t.cambio01}</dd>
                            </div>
                            <div class="rounded-xl bg-white p-3">
                                <dt class="font-bold text-slate-600">1 → 0</dt>
                                <dd class="mt-1 text-xl font-black">${t.cambio10}</dd>
                            </div>
                            <div class="rounded-xl bg-white p-3">
                                <dt class="font-bold text-slate-600">1 → 1</dt>
                                <dd class="mt-1 text-xl font-black">${t.ambosSi}</dd>
                            </div>
                        </dl>
                    </article>

                    <article class="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                        <h3 class="text-lg font-black text-blue-950">Tamaño del efecto</h3>
                        <dl class="mt-4 space-y-3 text-sm text-blue-950">
                            <div>
                                <dt class="font-bold">Odds ratio pareada</dt>
                                <dd class="mt-1 text-xl font-black">
                                    ${h(e.tamanioEfecto.oddsRatioPareada)}
                                </dd>
                            </div>
                            <div>
                                <dt class="font-bold">IC de la diferencia</dt>
                                <dd class="mt-1 font-semibold">
                                    [${h(a.inferior*100,2)},
                                    ${h(a.superior*100,2)}] puntos porcentuales
                                </dd>
                            </div>
                        </dl>
                    </article>
                </div>

                ${e.advertencias.length?`
                        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
                            <h3 class="font-black">Advertencia metodológica</h3>
                            <ul class="mt-2 list-disc space-y-1 pl-5 text-sm">
                                ${e.advertencias.map(o=>`<li>${b(o)}</li>`).join("")}
                            </ul>
                        </div>
                    `:""}
            </div>
        </section>
    `}function Z(e){return`
        <section class="overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-xl">
            <header class="bg-violet-700 px-6 py-7 text-white md:px-9">
                <p class="text-xs font-black uppercase tracking-widest text-violet-100">
                    Resultado global
                </p>
                <h2 class="mt-2 text-3xl font-black">Prueba Q de Cochran</h2>
                <p class="mt-3 max-w-3xl leading-relaxed text-violet-50">
                    ${b(e.metodo)}
                </p>
            </header>

            <div class="space-y-7 px-6 py-8 md:px-9">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    ${E("Q",h(e.estadistico.valor),"Estadístico global")}
                    ${E("Grados de libertad",String(e.gradosLibertad),`${e.k} condiciones relacionadas`)}
                    ${E("Valor p",j(e.valorP),e.significativo?"Existen diferencias globales":"No se detectan diferencias globales")}
                    ${E("W equivalente",h(e.tamanioEfecto.wKendallEquivalente),"Indicador global del tamaño del efecto")}
                </div>

                ${H(e.resumenCondiciones)}

                <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 class="text-xl font-black text-slate-950">Comparaciones posteriores</h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-600">
                        Se aplicó McNemar exacta a cada par de condiciones y se controló
                        la multiplicidad mediante el ajuste de Holm.
                    </p>
                    <div class="mt-5">
                        ${X(e.comparacionesPosteriores)}
                    </div>
                </article>

                ${e.advertencias.length?`
                        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
                            <h3 class="font-black">Advertencia metodológica</h3>
                            <ul class="mt-2 list-disc space-y-1 pl-5 text-sm">
                                ${e.advertencias.map(t=>`<li>${b(t)}</li>`).join("")}
                            </ul>
                        </div>
                    `:""}
            </div>
        </section>
    `}function N(e,t){return`
        <article class="flex items-start gap-4">
            <span class="mt-1 h-3 w-3 shrink-0 rounded-full bg-fuchsia-500"></span>
            <div>
                <h3 class="font-black text-slate-900">${b(e)}</h3>
                <p class="mt-1 text-sm leading-relaxed">${b(t)}</p>
            </div>
        </article>
    `}function oe(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-10 md:px-8 font-sans",e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white shadow-2xl md:px-12 md:py-14">
            <div class="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-fuchsia-500/20"></div>
            <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-violet-700/20"></div>
            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-modulo"
                    class="mb-7 inline-flex items-center gap-2 font-black text-fuchsia-300 hover:text-white"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>
                <p class="mb-3 text-xs font-black uppercase tracking-[0.20em] text-fuchsia-300 md:text-sm">
                    Motor estadístico del Grupo El Kernel
                </p>
                <h1 class="mb-5 text-4xl font-black leading-tight md:text-6xl">
                    Proporciones relacionadas
                </h1>
                <p class="max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                    Compare respuestas dicotómicas de las mismas personas mediante McNemar o Q de Cochran.
                </p>
                <div class="mt-7 flex flex-wrap gap-3">
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">Datos 0/1</span>
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">Diseños antes-después</span>
                    <span class="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">Post hoc con Holm</span>
                </div>
            </div>
        </header>

        <section class="mt-8 grid grid-cols-1 gap-7 xl:grid-cols-[0.72fr_1.28fr]">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
                <p class="mb-2 text-xs font-black uppercase tracking-widest text-fuchsia-700">
                    Selección metodológica
                </p>
                <h2 class="mb-5 text-2xl font-black text-slate-900">
                    ¿Qué prueba corresponde?
                </h2>
                <div class="space-y-5 text-slate-600">
                    ${N("McNemar","Dos mediciones relacionadas de una misma respuesta dicotómica, por ejemplo antes y después.")}
                    ${N("Q de Cochran","Tres o más condiciones o momentos relacionados con respuesta binaria en cada participante.")}
                </div>
                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950">Estructura de los datos</h3>
                    <p class="mt-2 text-sm leading-relaxed text-amber-900">
                        Cada fila representa una persona y cada columna una condición.
                        Use 1 para presencia/éxito/sí y 0 para ausencia/fracaso/no.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-proporciones-relacionadas"
                class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8"
                novalidate
            >
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <label class="block">
                        <span class="mb-2 block text-sm font-black text-slate-800">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100"
                        >
                            <option value="mcnemar">McNemar: dos mediciones</option>
                            <option value="q-cochran">Q de Cochran: tres o más mediciones</option>
                        </select>
                    </label>

                    <label class="block" data-campo-condiciones>
                        <span class="mb-2 block text-sm font-black text-slate-800">
                            Número de condiciones
                        </span>
                        <input
                            type="number"
                            name="numeroCondiciones"
                            min="3"
                            max="8"
                            value="3"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100"
                        >
                    </label>

                    <label class="block" data-campo-metodo>
                        <span class="mb-2 block text-sm font-black text-slate-800">
                            Método de McNemar
                        </span>
                        <select
                            name="metodoMcNemar"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100"
                        >
                            <option value="automatico">Automático</option>
                            <option value="exacta">Exacto</option>
                            <option value="asintotica">Chi-cuadrado con continuidad</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="mb-2 block text-sm font-black text-slate-800">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <label class="mt-6 block">
                    <span class="mb-2 block text-sm font-black text-slate-800">
                        Etiquetas de las condiciones
                    </span>
                    <input
                        type="text"
                        name="etiquetas"
                        value="Antes, Después"
                        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100"
                    >
                    <span class="mt-2 block text-xs text-slate-500">
                        Separe las etiquetas mediante comas.
                    </span>
                </label>

                <label class="mt-6 block">
                    <span class="mb-2 flex items-center justify-between gap-3 text-sm font-black text-slate-800">
                        <span>Matriz de respuestas</span>
                        <span data-contador class="text-xs font-bold text-slate-500">0 filas</span>
                    </span>
                    <textarea
                        name="matriz"
                        rows="14"
                        placeholder="1 1&#10;1 0&#10;0 1&#10;0 0"
                        class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-100"
                    ></textarea>
                </label>

                <div
                    id="mensaje-error-proporciones"
                    class="mt-6 hidden rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="mt-7 flex flex-col flex-wrap gap-3 sm:flex-row">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center rounded-xl bg-fuchsia-700 px-7 py-4 font-black text-white shadow-lg hover:bg-fuchsia-800"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center rounded-xl border border-fuchsia-300 px-6 py-4 font-black text-fuchsia-700 hover:bg-fuchsia-50"
                    >
                        Cargar datos de ejemplo
                    </button>
                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 font-black text-slate-700 hover:bg-slate-50"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-proporciones-relacionadas"
            class="mt-8 hidden"
            aria-live="polite"
        ></section>
    `;const t=e.querySelector("#formulario-proporciones-relacionadas"),a=e.querySelector("#resultados-proporciones-relacionadas"),o=e.querySelector("#mensaje-error-proporciones"),s=e.querySelector("[data-contador]"),r=e.querySelector("[data-campo-condiciones]"),d=e.querySelector("[data-campo-metodo]"),i=()=>{const c=t.elements.prueba.value==="mcnemar";r.classList.toggle("hidden",c),d.classList.toggle("hidden",!c);const n=c?2:Math.max(3,Math.min(8,Number(t.elements.numeroCondiciones.value)||3));t.elements.etiquetas.value=c?"Antes, Después":Array.from({length:n},(f,u)=>`Condición ${u+1}`).join(", "),a.classList.add("hidden")},m=()=>{const c=t.elements.matriz.value.split(/\r?\n/).filter(n=>n.trim()).length;s.textContent=`${c} ${c===1?"fila":"filas"}`},x=sessionStorage.getItem(L);return["mcnemar","q-cochran"].includes(x)&&(t.elements.prueba.value=x),sessionStorage.removeItem(L),i(),t.elements.prueba.addEventListener("change",i),t.elements.numeroCondiciones.addEventListener("change",i),t.elements.matriz.addEventListener("input",m),t.addEventListener("submit",c=>{c.preventDefault(),o.classList.add("hidden");try{const n=t.elements.prueba.value,f=n==="mcnemar"?2:Math.max(3,Math.min(8,Number(t.elements.numeroCondiciones.value)||3)),u=W(t.elements.matriz.value,f),y=J(t.elements.etiquetas.value,f),k={matriz:u,etiquetas:y,prueba:n,nivelConfianza:Number(t.elements.nivelConfianza.value),metodoMcNemar:t.elements.metodoMcNemar.value},g=K(k);a.innerHTML=n==="mcnemar"?Y(g):Z(g),a.classList.remove("hidden"),B({contenedor:a,nombre:n==="mcnemar"?"mcnemar":"q-cochran",datos:{solicitud:k,resultado:g}}),a.scrollIntoView({behavior:"smooth",block:"start"})}catch(n){a.classList.add("hidden"),o.textContent=n instanceof Error?n.message:"No fue posible ejecutar el análisis.",o.classList.remove("hidden")}}),e.addEventListener("click",c=>{const n=c.target.closest("[data-action]");if(n){if(n.dataset.action==="volver-modulo"){sessionStorage.removeItem(U),window.location.hash="/comparacionGrupos";return}if(n.dataset.action==="cargar-ejemplo"){t.elements.prueba.value==="mcnemar"?(t.elements.etiquetas.value="Antes, Después",t.elements.matriz.value=["1 1","1 1","1 0","0 1","0 1","0 1","0 1","0 1","0 1","0 1","0 0","0 0"].join(`
`)):(t.elements.numeroCondiciones.value="3",t.elements.etiquetas.value="Método A, Método B, Método C",t.elements.matriz.value=["1 1 0","1 1 0","1 1 0","1 0 0","1 0 0","1 0 0","1 1 1","1 1 0","0 1 0","1 0 0","1 0 1","0 0 0"].join(`
`)),m(),a.classList.add("hidden"),o.classList.add("hidden");return}n.dataset.action==="limpiar"&&(t.elements.matriz.value="",a.innerHTML="",a.classList.add("hidden"),o.classList.add("hidden"),m())}}),e}export{oe as CalculadoraProporcionesRelacionadas};
