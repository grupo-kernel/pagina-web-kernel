function k(e){return e.reduce((a,t)=>a+t,0)/e.length}function I(e){if(e.length<2)return null;const a=k(e);return e.reduce((t,n)=>t+(n-a)**2,0)/(e.length-1)}function L(e){const a=I(e);return a===null?null:Math.sqrt(Math.max(a,0))}function ae(e,a){const t=k(e),n=k(a);return e.reduce((i,s,r)=>i+(s-t)*(a[r]-n),0)/(e.length-1)}function R(e,a){const t=L(e),n=L(a);return t===null||n===null||t<1e-12||n<1e-12?null:Math.max(-1,Math.min(1,ae(e,a)/(t*n)))}function G(e){return e[0].map((a,t)=>e.map(n=>n[t]))}function K(e){return e.map(a=>a.reduce((t,n)=>t+n,0))}function V(e){const a=e[0].length;if(a<2)return null;const n=G(e).map(I),i=K(e),s=I(i);return s===null||s<1e-12||n.some(r=>r===null)?null:a/(a-1)*(1-n.reduce((r,o)=>r+o,0)/s)}function te(e){return e.map((a,t)=>e.map((n,i)=>t===i?1:R(a,n)??0))}function ne(e){const a=[];for(let t=0;t<e.length;t+=1)for(let n=t+1;n<e.length;n+=1)a.push(e[t][n]);return a.length?k(a):null}function ie(e,a){if(a===null)return null;const t=1+(e-1)*a;return Math.abs(t)<1e-12?null:e*a/t}function _(e,a){return e.map(t=>t.reduce((n,i,s)=>n+i*a[s],0))}function Y(e,a){return e.reduce((t,n,i)=>t+n*a[i],0)}function re(e){const a=e.length;let t=Array(a).fill(1/Math.sqrt(a));for(let l=0;l<300;l+=1){const u=_(e,t),c=Math.sqrt(Y(u,u));if(c<1e-12)break;const b=u.map(w=>w/c),E=Math.max(...b.map((w,$)=>Math.abs(w-t[$])));if(t=b,E<1e-11)break}t.reduce((l,u)=>l+u,0)<0&&(t=t.map(l=>-l));const n=Y(t,_(e,t)),i=Math.sqrt(Math.max(n,0)),s=t.map(l=>Math.max(-.999,Math.min(.999,i*l))),r=s.map(l=>Math.max(1-l**2,1e-12)),o=s.reduce((l,u)=>l+u,0),d=o**2/(o**2+r.reduce((l,u)=>l+u,0));return{valorPropio:n,proporcionVarianza:n/a,cargas:s,unicidades:r,omega:d}}function se(e,a){return e.map(t=>t.filter((n,i)=>i!==a))}function oe(e){const a=e.length,t=k(e),n=L(e);if(a<3||n===null||n<1e-12)return null;const i=e.reduce((s,r)=>s+((r-t)/n)**3,0);return a/((a-1)*(a-2))*i}function le(e){const a=Math.min(...e),t=Math.max(...e);if(Math.abs(t-a)<1e-12)return[{inferior:a,superior:t,frecuencia:e.length}];const n=Math.max(4,Math.min(12,Math.ceil(1+3.322*Math.log10(e.length)))),i=(t-a)/n,s=Array.from({length:n},(r,o)=>({inferior:a+o*i,superior:o===n-1?t:a+(o+1)*i,frecuencia:0}));return e.forEach(r=>{const o=Math.min(n-1,Math.floor((r-a)/i));s[o].frecuencia+=1}),s}function H(e,a){return e===null||!Number.isFinite(e)?`${a} no pudo calcularse con los datos disponibles.`:e<0?`${a} es negativo (${e.toFixed(3)}), lo que indica covariación incompatible con una escala homogénea o posibles ítems invertidos sin recodificar.`:e<.5?`${a} es muy bajo (${e.toFixed(3)}). La consistencia interna del instrumento requiere revisión profunda.`:e<.6?`${a} es bajo (${e.toFixed(3)}).`:e<.7?`${a} es cuestionable (${e.toFixed(3)}).`:e<.8?`${a} alcanza un nivel generalmente aceptable (${e.toFixed(3)}).`:e<.9?`${a} muestra buena consistencia interna (${e.toFixed(3)}).`:`${a} es muy alto (${e.toFixed(3)}); además de buena consistencia, conviene revisar posible redundancia entre ítems.`}function ce(e,a){if(!Array.isArray(e)||e.length<5)throw new Error("Se requieren al menos cinco participantes con respuestas completas.");if(!Array.isArray(e[0])||e[0].length<3)throw new Error("El cuestionario debe contener al menos tres ítems.");const t=e[0].length;if(!e.every(s=>Array.isArray(s)&&s.length===t))throw new Error("Todas las filas deben contener la misma cantidad de ítems.");const n=e.map((s,r)=>s.map((o,d)=>{const l=Number(o);if(!Number.isFinite(l))throw new Error(`La respuesta de la fila ${r+1}, ítem ${d+1}, no es numérica.`);return l})),i=Array.from({length:t},(s,r)=>a?.[r]?.trim()||`Ítem ${r+1}`);return{matriz:n,nombres:i}}function de(e,a,t,n){const i=new Set(a);return e.map(s=>s.map((r,o)=>i.has(o)?t+n-r:r))}function me(e){const a=e.map(i=>i.reduce((s,r,o)=>o%2===0?s+r:s,0)),t=e.map(i=>i.reduce((s,r,o)=>o%2===1?s+r:s,0)),n=R(a,t);return n===null||Math.abs(1+n)<1e-12?{correlacionMitades:n,spearmanBrown:null}:{correlacionMitades:n,spearmanBrown:2*n/(1+n)}}function ue({matriz:e,nombresItems:a=[],itemsInvertidos:t=[],minimoEscala:n=1,maximoEscala:i=5,filasExcluidas:s=0}){const r=ce(e,a),o=Number(n),d=Number(i);if(!Number.isFinite(o)||!Number.isFinite(d)||d<=o)throw new Error("Los límites de la escala deben ser numéricos y el máximo debe superar al mínimo.");const l=r.matriz[0].length,u=[...new Set(t.map(Number))];if(u.some(m=>!Number.isInteger(m)||m<0||m>=l))throw new Error("La lista de ítems invertidos contiene una posición no válida.");r.matriz.forEach((m,f)=>{m.forEach((N,M)=>{if(N<o||N>d)throw new Error(`La respuesta de la fila ${f+1}, ${r.nombres[M]}, está fuera del rango ${o}–${d}.`)})});const c=de(r.matriz,u,o,d),b=G(c),E=b.map(I),w=E.map((m,f)=>({valor:m,indice:f})).filter(({valor:m})=>m===null||m<1e-12);if(w.length)throw new Error(`Los siguientes ítems no presentan variabilidad: ${w.map(({indice:m})=>r.nombres[m]).join(", ")}. Deben revisarse antes de calcular la fiabilidad.`);const $=te(b),h=ne($),j=V(c),J=ie(l,h),v=re($),y=K(c),B=me(c),O=b.map((m,f)=>{const N=c.map(W=>W.reduce((U,Z,ee)=>ee===f?U:U+Z,0)),M=R(m,N),q=V(se(c,f)),S=[];return M===null?S.push("No fue posible calcular la correlación ítem–total."):M<0?S.push("Correlación ítem–total negativa; revise redacción o inversión."):M<.3&&S.push("Correlación ítem–total inferior a 0.30."),j!==null&&q!==null&&q>j+.02&&S.push("La eliminación del ítem aumentaría el alfa de forma apreciable."),{indice:f+1,nombre:r.nombres[f],invertido:u.includes(f),media:k(m),varianza:E[f],desviacion:L(m),minimo:Math.min(...m),maximo:Math.max(...m),asimetria:oe(m),correlacionItemTotal:M,alfaSiSeElimina:q,cargaUnFactor:v.cargas[f],unicidad:v.unicidades[f],alertas:S}}),z=["La consistencia interna no demuestra por sí sola validez, unidimensionalidad ni estabilidad temporal.","El omega informado es una aproximación de un factor basada en la matriz de correlaciones; debe complementarse con análisis factorial cuando la dimensionalidad sea relevante."];c.length<30&&z.push("La muestra contiene menos de 30 participantes; las estimaciones pueden ser inestables."),s>0&&z.push(`Se excluyeron ${s} filas por contener datos ausentes o incompletos.`),v.proporcionVarianza<.4&&z.push("El primer componente explica menos del 40 % de la varianza estandarizada; la aproximación unidimensional debe interpretarse con cautela.");const Q=[H(j,"El alfa de Cronbach"),H(v.omega,"El omega total aproximado"),h===null?"La correlación interítem media no está disponible.":h<.15?`La correlación interítem media es baja (${h.toFixed(3)}), lo que puede reflejar poca homogeneidad.`:h>.5?`La correlación interítem media es elevada (${h.toFixed(3)}); revise posible redundancia.`:`La correlación interítem media es ${h.toFixed(3)}, dentro del intervalo orientativo de 0.15 a 0.50.`,O.some(m=>m.correlacionItemTotal<.3)?"Existen ítems con correlación ítem–total corregida inferior a 0.30 que requieren revisión sustantiva.":"Todos los ítems alcanzan una correlación ítem–total corregida de al menos 0.30.",`El primer componente explica ${(v.proporcionVarianza*100).toFixed(2)} % de la varianza de la matriz de correlaciones.`];return{tipoAnalisis:"fiabilidad-cuestionario",n:c.length,k:l,nombresItems:r.nombres,itemsInvertidos:u.map(m=>m+1),escala:{minimo:o,maximo:d},filasExcluidas:s,matrizRecodificada:c,puntuacionesTotales:y,distribucionTotal:le(y),fiabilidad:{alfaCronbach:j,alfaEstandarizado:J,omegaTotalAproximado:v.omega,correlacionInteritemMedia:h,correlacionMitades:B.correlacionMitades,spearmanBrown:B.spearmanBrown,mediaPuntuacionTotal:k(y),desviacionPuntuacionTotal:L(y),varianzaPuntuacionTotal:I(y),minimoPuntuacionTotal:Math.min(...y),maximoPuntuacionTotal:Math.max(...y)},dimensionalidadAproximada:{valorPropioPrincipal:v.valorPropio,proporcionVarianzaPrimerComponente:v.proporcionVarianza,cargas:v.cargas,unicidades:v.unicidades},correlaciones:$,items:O,interpretacion:Q,advertencias:z}}function x(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function g(e,a=3){return Number.isFinite(Number(e))?Number(e).toLocaleString("es-DO",{maximumFractionDigits:a}):"—"}function A(e,a,t){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm text-slate-500 mb-6 leading-relaxed">
                ${a}
            </p>
            ${t}
        </article>
    `}function pe(e){const a=e.items.map(n=>n.correlacionItemTotal??0),t=Math.max(1,...a.map(n=>Math.abs(n)));return A("Correlación ítem–total corregida","Valores inferiores a 0.30 requieren revisión. Los valores negativos suelen señalar inversión no corregida, ambigüedad o falta de coherencia con la escala.",`<div class="space-y-4">
            ${e.items.map(n=>{const i=n.correlacionItemTotal,s=i===null?0:Math.min(100,Math.abs(i)/t*100),r=i===null?"bg-slate-300":i<0?"bg-red-600":i<.3?"bg-amber-500":"bg-emerald-600";return`
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <span class="font-black text-slate-800 truncate" title="${x(n.nombre)}">
                                ${x(n.nombre)}
                            </span>
                            <span class="font-mono text-sm font-black text-slate-700">
                                ${g(i)}
                            </span>
                        </div>
                        <div class="h-5 rounded-full bg-slate-100 overflow-hidden">
                            <div class="h-full rounded-full ${r}" style="width:${Math.max(i===null?0:4,s)}%"></div>
                        </div>
                    </div>
                `}).join("")}
        </div>`)}function be(e){const a=e.items.map(s=>s.alfaSiSeElimina).filter(Number.isFinite),t=Math.min(e.fiabilidad.alfaCronbach??0,...a,0),n=Math.max(e.fiabilidad.alfaCronbach??1,...a,1),i=Math.max(n-t,.1);return A("Alfa si se elimina el ítem","Compare cada valor con el alfa global. Un aumento apreciable puede justificar revisar el contenido del ítem, pero no eliminarlo automáticamente.",`<div class="space-y-4">
            <div class="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sky-950">
                <strong>Alfa global:</strong>
                ${g(e.fiabilidad.alfaCronbach)}
            </div>
            ${e.items.map(s=>{const r=s.alfaSiSeElimina,o=r===null?0:Math.max(0,Math.min(100,(r-t)/i*100)),d=r!==null&&e.fiabilidad.alfaCronbach!==null&&r>e.fiabilidad.alfaCronbach+.02;return`
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <span class="font-black text-slate-800 truncate" title="${x(s.nombre)}">
                                ${x(s.nombre)}
                            </span>
                            <span class="font-mono text-sm font-black ${d?"text-red-700":"text-slate-700"}">
                                ${g(r)}
                            </span>
                        </div>
                        <div class="h-5 rounded-full bg-slate-100 overflow-hidden">
                            <div class="h-full rounded-full ${d?"bg-red-600":"bg-indigo-600"}" style="width:${Math.max(r===null?0:4,o)}%"></div>
                        </div>
                    </div>
                `}).join("")}
        </div>`)}function fe(e){const a=Math.max(e.escala.maximo-e.escala.minimo,1e-12);return A("Medias de los ítems","Las medias se ubican dentro del rango de la escala después de recodificar los ítems invertidos.",`<div class="flex items-end gap-3 h-72 border-b border-l border-slate-300 px-4 pt-5 overflow-x-auto">
            ${e.items.map(t=>{const n=(t.media-e.escala.minimo)/a,i=Math.max(4,Math.min(205,n*205));return`
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">
                            ${g(t.media,2)}
                        </span>
                        <div class="w-9 bg-sky-700 rounded-t-md" style="height:${i}px" title="${x(t.nombre)}: media ${g(t.media,3)}"></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all">
                            ${x(t.nombre)}
                        </span>
                    </div>
                `}).join("")}
        </div>`)}function xe(e){const a=Math.max(...e.distribucionTotal.map(t=>t.frecuencia),1);return A("Distribución de la puntuación total","El histograma resume las puntuaciones obtenidas al sumar los ítems después de aplicar la recodificación indicada.",`<div class="flex items-end gap-1 h-72 border-b border-l border-slate-300 px-4 pt-5 overflow-x-auto">
            ${e.distribucionTotal.map(t=>{const n=Math.max(4,t.frecuencia/a*205),i=Math.abs(t.superior-t.inferior)<1e-12?g(t.inferior,2):`${g(t.inferior,1)}–${g(t.superior,1)}`;return`
                    <div class="flex flex-col items-center justify-end min-w-[62px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">
                            ${t.frecuencia}
                        </span>
                        <div class="w-full bg-violet-600 rounded-t-sm" style="height:${n}px" title="${i}: ${t.frecuencia} participantes"></div>
                        <span class="text-[9px] text-slate-500 mt-2 text-center">
                            ${i}
                        </span>
                    </div>
                `}).join("")}
        </div>`)}function he(e){return A("Cargas del componente principal","Estas cargas sustentan la aproximación unidimensional utilizada para calcular omega. No sustituyen un análisis factorial confirmatorio.",`<div class="space-y-4">
            ${e.items.map(a=>{const t=a.cargaUnFactor,n=Math.min(100,Math.abs(t)*100),i=t<0?"bg-red-600":t<.4?"bg-amber-500":"bg-cyan-700";return`
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <span class="font-black text-slate-800 truncate" title="${x(a.nombre)}">
                                ${x(a.nombre)}
                            </span>
                            <span class="font-mono text-sm font-black text-slate-700">
                                ${g(t)}
                            </span>
                        </div>
                        <div class="h-5 rounded-full bg-slate-100 overflow-hidden">
                            <div class="h-full rounded-full ${i}" style="width:${Math.max(4,n)}%"></div>
                        </div>
                    </div>
                `}).join("")}
        </div>`)}function ge(e){const a=Math.min(1,Math.abs(e));return e>=0?`rgba(2, 132, 199, ${.1+a*.75})`:`rgba(220, 38, 38, ${.1+a*.75})`}function ve(e){const a=e.k;return A("Mapa de correlaciones interítem","Los tonos azules representan relaciones positivas y los rojos relaciones negativas. Revise especialmente correlaciones negativas o extremadamente altas.",`<div class="overflow-x-auto">
            <table class="border-collapse text-xs min-w-max">
                <thead>
                    <tr>
                        <th class="p-2 text-left text-slate-500">Ítem</th>
                        ${e.nombresItems.map((t,n)=>`
                            <th class="p-2 text-center text-slate-500">
                                ${n+1}
                            </th>
                        `).join("")}
                    </tr>
                </thead>
                <tbody>
                    ${e.correlaciones.map((t,n)=>`
                        <tr>
                            <th class="p-2 text-left font-black text-slate-700 max-w-[180px] truncate" title="${x(e.nombresItems[n])}">
                                ${n+1}. ${x(e.nombresItems[n])}
                            </th>
                            ${t.map((i,s)=>`
                                <td
                                    class="w-12 h-12 border border-white text-center font-black ${Math.abs(i)>.55?"text-white":"text-slate-900"}"
                                    style="background:${ge(i)}"
                                    title="${x(e.nombresItems[n])} × ${x(e.nombresItems[s])}: ${g(i)}"
                                >
                                    ${n===s?"1":g(i,2)}
                                </td>
                            `).join("")}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
            <p class="text-xs text-slate-500 mt-4">
                Matriz de ${a} × ${a} ítems.
            </p>
        </div>`)}function we(e){return`
        <section class="mt-10">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                Diagnóstico visual
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Gráficos de fiabilidad y comportamiento de los ítems
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Examine conjuntamente las correlaciones ítem–total, el cambio del alfa, las medias, las cargas y la relación entre los ítems antes de tomar decisiones sobre el instrumento.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${pe(e)}
                ${be(e)}
                ${fe(e)}
                ${xe(e)}
                ${he(e)}
                ${ve(e)}
            </div>
        </section>
    `}function Le(){const e=document.createElement("section");let a=null;e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-amber-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-violet-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-amber-300 text-xs md:text-sm font-black mb-3">
                    Evaluación de instrumentos
                </p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Cuestionarios y fiabilidad
                </h1>
                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Examine la consistencia interna, la contribución de cada ítem y la estructura unidimensional aproximada de una escala o cuestionario.
                </p>
                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Alfa de Cronbach</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Omega aproximado</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Análisis de ítems</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Ítems invertidos</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.68fr_1.32fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                    Organización de los datos
                </p>
                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Una persona por fila y un ítem por columna
                </h2>
                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${T("Encabezados","La primera fila puede contener los nombres de los ítems. Si no existen, se asignarán Ítem 1, Ítem 2, etc.")}
                    ${T("Ítems invertidos","Indique sus posiciones —por ejemplo 3, 6— o sus nombres. La herramienta aplicará la recodificación mínimo + máximo − respuesta.")}
                    ${T("Datos ausentes","Las filas con celdas vacías, NA, N/A, punto o null se excluyen completamente y se informa la cantidad descartada.")}
                    ${T("Interpretación","La fiabilidad no demuestra validez ni unidimensionalidad. Las decisiones deben considerar contenido, teoría, muestra y análisis factorial.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Requisito mínimo
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Se requieren al menos cinco participantes completos y tres ítems con variabilidad. Para conclusiones estables suele necesitarse una muestra considerablemente mayor.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-fiabilidad-cuestionarios"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Mínimo de la escala
                        </span>
                        <input
                            type="number"
                            step="any"
                            name="minimoEscala"
                            value="1"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        />
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Máximo de la escala
                        </span>
                        <input
                            type="number"
                            step="any"
                            name="maximoEscala"
                            value="5"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        />
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Ítems invertidos
                        </span>
                        <input
                            type="text"
                            name="itemsInvertidos"
                            placeholder="Ej.: 3, 6"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        />
                    </label>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Respuestas del cuestionario
                    </span>
                    <textarea
                        name="datos"
                        rows="16"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        placeholder="Ítem 1, Ítem 2, Ítem 3
4, 5, 4
3, 4, 3"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Para números decimales utilice punto.
                    </span>
                </label>

                <div class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 class="font-black text-slate-900">
                                Importar archivo
                            </h3>
                            <p class="text-sm text-slate-600 mt-1">
                                Admite CSV o TXT con la misma estructura de filas y columnas.
                            </p>
                        </div>
                        <input
                            type="file"
                            name="archivo"
                            accept=".csv,.txt,text/csv,text/plain"
                            class="block text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-slate-900 file:px-4 file:py-3 file:font-black file:text-white hover:file:bg-slate-800"
                        />
                    </div>
                </div>

                <div
                    id="mensaje-error-fiabilidad"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-amber-600 text-white font-black rounded-xl px-7 py-4 hover:bg-amber-700 transition-colors shadow-lg"
                    >
                        Analizar fiabilidad
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-amber-300 text-amber-800 font-black rounded-xl px-6 py-4 hover:bg-amber-50 transition-colors"
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
            id="resultados-fiabilidad-cuestionarios"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const t=e.querySelector("#formulario-fiabilidad-cuestionarios"),n=e.querySelector("#mensaje-error-fiabilidad"),i=e.querySelector("#resultados-fiabilidad-cuestionarios"),s=t.elements.archivo;return s.addEventListener("change",async()=>{const r=s.files?.[0];if(r)try{t.elements.datos.value=await r.text(),F(n)}catch{D(n,"No fue posible leer el archivo seleccionado.")}}),t.addEventListener("submit",r=>{r.preventDefault(),F(n);try{const o=ye(t);a=ue(o),i.innerHTML=Ce(a),i.classList.remove("hidden"),i.scrollIntoView({behavior:"smooth",block:"start"})}catch(o){i.classList.add("hidden"),D(n,o instanceof Error?o.message:"No fue posible analizar la fiabilidad.")}}),e.addEventListener("click",async r=>{const o=r.target.closest("[data-action]");if(!o)return;const d=o.dataset.action;if(d==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(d==="cargar-ejemplo"){Ee(t),i.classList.add("hidden"),F(n);return}if(d==="limpiar"){t.reset(),t.elements.minimoEscala.value="1",t.elements.maximoEscala.value="5",t.elements.datos.value="",i.classList.add("hidden"),F(n);return}if(a)if(d==="exportar-csv")Ie(a);else if(d==="copiar-reporte")try{await navigator.clipboard.writeText(Ae(a));const l=o.textContent;o.textContent="Reporte copiado",setTimeout(()=>{o.textContent=l},1600)}catch{D(n,"El navegador no permitió copiar el reporte.")}else d==="imprimir"&&window.print()}),e}function T(e,a){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${a}</p>
        </div>
    `}function $e(e){return e.includes("	")?"	":e.includes(";")?";":","}function X(e){const a=String(e??"").trim().toLowerCase();return["","na","n/a",".","null","missing"].includes(a)}function ye(e){const a=e.elements.datos.value.trim();if(!a)throw new Error("Introduzca las respuestas antes de analizar la fiabilidad.");const t=a.split(/\r?\n/).map(c=>c.trim()).filter(Boolean);if(t.length<6)throw new Error("Se requieren al menos cinco participantes y, opcionalmente, una fila de encabezados.");const n=$e(t[0]),i=t.map(c=>c.split(n).map(b=>b.trim())),r=i[0].every(c=>!X(c)&&Number.isFinite(Number(c)))?i[0].map((c,b)=>`Ítem ${b+1}`):i.shift(),o=r.length;if(o<3)throw new Error("El archivo debe contener al menos tres columnas de ítems.");if(!i.every(c=>c.length===o))throw new Error("Todas las filas deben contener la misma cantidad de columnas.");let d=0;const l=[];i.forEach((c,b)=>{if(c.some(X)){d+=1;return}const E=c.map((w,$)=>{const h=Number(w);if(!Number.isFinite(h))throw new Error(`La fila ${b+1}, columna ${$+1}, contiene un valor no numérico.`);return h});l.push(E)});const u=ke(e.elements.itemsInvertidos.value,r);return{matriz:l,nombresItems:r,itemsInvertidos:u,minimoEscala:Number(e.elements.minimoEscala.value),maximoEscala:Number(e.elements.maximoEscala.value),filasExcluidas:d}}function ke(e,a){if(!e.trim())return[];const t=new Map(a.map((n,i)=>[n.trim().toLowerCase(),i]));return e.split(/[,;\s]+/).map(n=>n.trim()).filter(Boolean).map(n=>{const i=Number(n);if(Number.isInteger(i)){if(i<1||i>a.length)throw new Error(`El ítem invertido ${n} no existe en el cuestionario.`);return i-1}const s=t.get(n.toLowerCase());if(s===void 0)throw new Error(`No se encontró el ítem invertido llamado “${n}”. Use su posición numérica cuando el nombre contenga espacios.`);return s})}function Ee(e){e.elements.minimoEscala.value="1",e.elements.maximoEscala.value="5",e.elements.itemsInvertidos.value="6",e.elements.datos.value=`Planificacion, Persistencia, Autonomia, Participacion, Confianza, Desmotivacion
4, 4, 3, 4, 4, 2
3, 4, 3, 3, 4, 2
5, 5, 4, 5, 5, 1
2, 3, 2, 3, 2, 4
4, 5, 4, 4, 5, 1
3, 3, 3, 4, 3, 3
5, 4, 5, 5, 4, 1
2, 2, 3, 2, 2, 5
4, 4, 4, 3, 4, 2
3, 4, 2, 3, 3, 3
5, 5, 5, 4, 5, 1
1, 2, 2, 2, 1, 5
4, 3, 4, 4, 4, 2
3, 3, 2, 4, 3, 3
5, 4, 4, 5, 5, 1
2, 3, 3, 2, 3, 4
4, 5, 3, 4, 4, 2
3, 2, 3, 3, 2, 4
5, 5, 4, 5, 4, 1
2, 2, 2, 3, 2, 5
4, 4, 5, 4, 5, 1
3, 3, 4, 3, 3, 3
5, 4, 5, 4, 5, 1
2, 3, 2, 2, 3, 4`}function p(e,a=4){return Number.isFinite(Number(e))?Number(e).toLocaleString("es-DO",{maximumFractionDigits:a}):"—"}function P(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function C(e,a,t){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900 break-words">
                ${a}
            </p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                ${t}
            </p>
        </article>
    `}function Me(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Ítem</th>
                        <th class="px-4 py-3 text-right">Media</th>
                        <th class="px-4 py-3 text-right">DE</th>
                        <th class="px-4 py-3 text-right">Ítem–total</th>
                        <th class="px-4 py-3 text-right">Alfa sin ítem</th>
                        <th class="px-4 py-3 text-right">Carga</th>
                        <th class="px-4 py-3 text-left">Revisión</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.items.map(a=>`
                        <tr class="${a.alertas.length?"bg-amber-50":""}">
                            <td class="px-4 py-3 font-black text-slate-900">
                                ${a.indice}. ${P(a.nombre)}
                                ${a.invertido?'<span class="ml-2 rounded-full bg-violet-100 px-2 py-1 text-[10px] text-violet-800">Invertido</span>':""}
                            </td>
                            <td class="px-4 py-3 text-right">${p(a.media,3)}</td>
                            <td class="px-4 py-3 text-right">${p(a.desviacion,3)}</td>
                            <td class="px-4 py-3 text-right font-black">${p(a.correlacionItemTotal,3)}</td>
                            <td class="px-4 py-3 text-right">${p(a.alfaSiSeElimina,3)}</td>
                            <td class="px-4 py-3 text-right">${p(a.cargaUnFactor,3)}</td>
                            <td class="px-4 py-3 text-slate-700 min-w-[260px]">
                                ${a.alertas.length?a.alertas.map(P).join(" "):"Sin alerta automática."}
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ce(e){return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">
                        Consistencia interna
                    </p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">
                        Resultados de fiabilidad
                    </h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        El análisis utilizó ${e.n} participantes y ${e.k} ítems. Se recodificaron ${e.itemsInvertidos.length} ítems invertidos.
                    </p>
                </div>
                <span class="inline-flex self-start rounded-2xl bg-amber-500/20 text-amber-200 border border-amber-400/30 px-5 py-3 font-black">
                    Alfa = ${p(e.fiabilidad.alfaCronbach,3)}
                </span>
            </div>
            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-7">
            ${C("Participantes",e.n,"Filas completas utilizadas")}
            ${C("Ítems",e.k,"Variables que forman la escala")}
            ${C("Alfa",p(e.fiabilidad.alfaCronbach,4),"Consistencia interna no estandarizada")}
            ${C("Alfa est.",p(e.fiabilidad.alfaEstandarizado,4),"Basado en correlaciones interítem")}
            ${C("Omega",p(e.fiabilidad.omegaTotalAproximado,4),"Aproximación unidimensional")}
            ${C("Spearman–Brown",p(e.fiabilidad.spearmanBrown,4),"División alternada de los ítems")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                Advertencias metodológicas
            </p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">
                Condiciones que deben considerarse
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${e.advertencias.map(a=>`
                    <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950 leading-relaxed">
                        ${P(a)}
                    </div>
                `).join("")}
            </div>
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                Diagnóstico por ítem
            </p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">
                Estadísticos y contribución de cada ítem
            </h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Las alertas automáticas orientan la revisión, pero la eliminación de un ítem debe justificarse mediante contenido, teoría y evidencia adicional.
            </p>
            ${Me(e)}
        </section>

        ${we(e)}

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Interpretación guiada
            </p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">
                Lectura general del instrumento
            </h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(a=>`
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${P(a)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Criterio metodológico
            </h2>
            <p>
                No establezca puntos de corte rígidos como única evidencia. Informe el alfa y el omega, describa la muestra, especifique los ítems invertidos, revise la dimensionalidad y presente las correlaciones ítem–total. Cuando el instrumento tenga varias dimensiones, calcule la fiabilidad por subescala en lugar de combinar indiscriminadamente todos los ítems.
            </p>
        </section>
    `}function Ae(e){const a=["CUESTIONARIOS Y FIABILIDAD — LABORATORIO KERNEL","",`Participantes: ${e.n}`,`Ítems: ${e.k}`,`Ítems invertidos: ${e.itemsInvertidos.join(", ")||"ninguno"}`,`Alfa de Cronbach: ${p(e.fiabilidad.alfaCronbach,4)}`,`Alfa estandarizado: ${p(e.fiabilidad.alfaEstandarizado,4)}`,`Omega total aproximado: ${p(e.fiabilidad.omegaTotalAproximado,4)}`,`Spearman–Brown: ${p(e.fiabilidad.spearmanBrown,4)}`,`Correlación interítem media: ${p(e.fiabilidad.correlacionInteritemMedia,4)}`,"","Interpretación:"];return e.interpretacion.forEach(t=>a.push(`- ${t}`)),a.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),a.join(`
`)}function Se(e){return`"${String(e??"").replaceAll('"','""')}"`}function Ie(e){const t=[["CUESTIONARIOS Y FIABILIDAD"],["Participantes",e.n],["Ítems",e.k],["Alfa de Cronbach",e.fiabilidad.alfaCronbach],["Alfa estandarizado",e.fiabilidad.alfaEstandarizado],["Omega total aproximado",e.fiabilidad.omegaTotalAproximado],["Spearman-Brown",e.fiabilidad.spearmanBrown],["Correlación interítem media",e.fiabilidad.correlacionInteritemMedia],[],["Ítem","Invertido","Media","DE","Correlación ítem-total","Alfa si se elimina","Carga un factor","Unicidad","Alertas"],...e.items.map(r=>[r.nombre,r.invertido?"Sí":"No",r.media,r.desviacion,r.correlacionItemTotal,r.alfaSiSeElimina,r.cargaUnFactor,r.unicidad,r.alertas.join(" ")]),[],["Puntuación total por participante"],...e.puntuacionesTotales.map((r,o)=>[o+1,r]),[],["Créditos","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(r=>r.map(Se).join(",")).join(`
`),n=new Blob(["\uFEFF",t],{type:"text/csv;charset=utf-8"}),i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download="fiabilidad-cuestionario-kernel.csv",document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function D(e,a){e.textContent=a,e.classList.remove("hidden")}function F(e){e.textContent="",e.classList.add("hidden")}export{Le as CalculadoraFiabilidadCuestionarios};
