import{p as fe}from"./exportacionesCalculadoras-BiNXW7QL.js";const w=1e-12;function A(e){return e.reduce((a,t)=>a+t,0)/e.length}function R(e){if(e.length<2)return null;const a=A(e);return e.reduce((t,n)=>t+(n-a)**2,0)/(e.length-1)}function F(e){const a=R(e);return a===null?null:Math.sqrt(Math.max(a,0))}function xe(e,a){const t=A(e),n=A(a);return e.reduce((i,r,o)=>i+(r-t)*(a[o]-n),0)/(e.length-1)}function _(e,a){const t=F(e),n=F(a);return t===null||n===null||t<w||n<w?null:Math.max(-1,Math.min(1,xe(e,a)/(t*n)))}function se(e){return e[0].map((a,t)=>e.map(n=>n[t]))}function le(e){return e.map(a=>a.reduce((t,n)=>t+n,0))}function J(e){const a=e[0].length;if(a<2)return null;const n=se(e).map(R),i=le(e),r=R(i);return r===null||r<w||n.some(o=>o===null)?null:a/(a-1)*(1-n.reduce((o,s)=>o+s,0)/r)}function he(e){return e.map((a,t)=>e.map((n,i)=>t===i?1:_(a,n)??0))}function ge(e){const a=[];for(let t=0;t<e.length;t+=1)for(let n=t+1;n<e.length;n+=1)a.push(e[t][n]);return a.length?A(a):null}function ve(e,a){if(a===null)return null;const t=1+(e-1)*a;return Math.abs(t)<w?null:e*a/t}function Q(e,a){return e.map(t=>t.reduce((n,i,r)=>n+i*a[r],0))}function W(e,a){return e.reduce((t,n,i)=>t+n*a[i],0)}function $e(e){const a=e.length;let t=Array(a).fill(1/Math.sqrt(a));for(let c=0;c<300;c+=1){const l=Q(e,t),m=Math.sqrt(W(l,l));if(m<w)break;const x=l.map(h=>h/m),y=Math.max(...x.map((h,k)=>Math.abs(h-t[k])));if(t=x,y<1e-11)break}t.reduce((c,l)=>c+l,0)<0&&(t=t.map(c=>-c));const n=W(t,Q(e,t)),i=Math.sqrt(Math.max(n,0)),r=t.map(c=>Math.max(-.999,Math.min(.999,i*c))),o=r.map(c=>Math.max(1-c**2,w)),s=r.reduce((c,l)=>c+l,0),d=s**2/(s**2+o.reduce((c,l)=>c+l,0));return{valorPropio:n,proporcionVarianza:n/a,cargas:r,unicidades:o,omega:d}}function we(e,a){return e.map(t=>t.filter((n,i)=>i!==a))}function ye(e){const a=e.length,t=A(e),n=F(e);if(a<3||n===null||n<w)return null;const i=e.reduce((r,o)=>r+((o-t)/n)**3,0);return a/((a-1)*(a-2))*i}function ke(e){const a=Math.min(...e),t=Math.max(...e);if(Math.abs(t-a)<w)return[{inferior:a,superior:t,frecuencia:e.length}];const n=Math.max(4,Math.min(12,Math.ceil(1+3.322*Math.log10(e.length)))),i=(t-a)/n,r=Array.from({length:n},(o,s)=>({inferior:a+s*i,superior:s===n-1?t:a+(s+1)*i,frecuencia:0}));return e.forEach(o=>{const s=Math.min(n-1,Math.floor((o-a)/i));r[s].frecuencia+=1}),r}function Z(e,a){return e===null||!Number.isFinite(e)?`${a} no pudo calcularse con los datos disponibles.`:e<0?`${a} es negativo (${e.toFixed(3)}), lo que indica covariación incompatible con una escala homogénea o posibles ítems invertidos sin recodificar.`:e<.5?`${a} es muy bajo (${e.toFixed(3)}). La consistencia interna del instrumento requiere revisión profunda.`:e<.6?`${a} es bajo (${e.toFixed(3)}).`:e<.7?`${a} es cuestionable (${e.toFixed(3)}).`:e<.8?`${a} alcanza un nivel generalmente aceptable (${e.toFixed(3)}).`:e<.9?`${a} muestra buena consistencia interna (${e.toFixed(3)}).`:`${a} es muy alto (${e.toFixed(3)}); además de buena consistencia, conviene revisar posible redundancia entre ítems.`}function Me(e,a){if(!Array.isArray(e)||e.length<5)throw new Error("Se requieren al menos cinco participantes con respuestas completas.");if(!Array.isArray(e[0])||e[0].length<3)throw new Error("El cuestionario debe contener al menos tres ítems.");const t=e[0].length;if(!e.every(r=>Array.isArray(r)&&r.length===t))throw new Error("Todas las filas deben contener la misma cantidad de ítems.");const n=e.map((r,o)=>r.map((s,d)=>{const c=Number(s);if(!Number.isFinite(c))throw new Error(`La respuesta de la fila ${o+1}, ítem ${d+1}, no es numérica.`);return c})),i=Array.from({length:t},(r,o)=>a?.[o]?.trim()||`Ítem ${o+1}`);return{matriz:n,nombres:i}}function Ee(e,a,t,n){const i=new Set(a);return e.map(r=>r.map((o,s)=>i.has(s)?t+n-o:o))}function Ce(e){const a=e.map(i=>i.reduce((r,o,s)=>s%2===0?r+o:r,0)),t=e.map(i=>i.reduce((r,o,s)=>s%2===1?r+o:r,0)),n=_(a,t);return n===null||Math.abs(1+n)<w?{correlacionMitades:n,spearmanBrown:null}:{correlacionMitades:n,spearmanBrown:2*n/(1+n)}}function Ae({matriz:e,nombresItems:a=[],itemsInvertidos:t=[],minimoEscala:n=1,maximoEscala:i=5,filasExcluidas:r=0}){const o=Me(e,a),s=Number(n),d=Number(i);if(!Number.isFinite(s)||!Number.isFinite(d)||d<=s)throw new Error("Los límites de la escala deben ser numéricos y el máximo debe superar al mínimo.");const c=o.matriz[0].length,l=[...new Set(t.map(Number))];if(l.some(u=>!Number.isInteger(u)||u<0||u>=c))throw new Error("La lista de ítems invertidos contiene una posición no válida.");o.matriz.forEach((u,b)=>{u.forEach((P,I)=>{if(P<s||P>d)throw new Error(`La respuesta de la fila ${b+1}, ${o.nombres[I]}, está fuera del rango ${s}–${d}.`)})});const m=Ee(o.matriz,l,s,d),x=se(m),y=x.map(R),h=y.map((u,b)=>({valor:u,indice:b})).filter(({valor:u})=>u===null||u<w);if(h.length)throw new Error(`Los siguientes ítems no presentan variabilidad: ${h.map(({indice:u})=>o.nombres[u]).join(", ")}. Deben revisarse antes de calcular la fiabilidad.`);const k=he(x),v=ge(k),T=J(m),de=ve(c,v),$=$e(k),E=le(m),Y=Ce(m),X=x.map((u,b)=>{const P=m.map(ue=>ue.reduce((G,pe,be)=>be===b?G:G+pe,0)),I=_(u,P),D=J(we(m,b)),j=[];return I===null?j.push("No fue posible calcular la correlación ítem–total."):I<0?j.push("Correlación ítem–total negativa; revise redacción o inversión."):I<.3&&j.push("Correlación ítem–total inferior a 0.30."),T!==null&&D!==null&&D>T+.02&&j.push("La eliminación del ítem aumentaría el alfa de forma apreciable."),{indice:b+1,nombre:o.nombres[b],invertido:l.includes(b),media:A(u),varianza:y[b],desviacion:F(u),minimo:Math.min(...u),maximo:Math.max(...u),asimetria:ye(u),correlacionItemTotal:I,alfaSiSeElimina:D,cargaUnFactor:$.cargas[b],unicidad:$.unicidades[b],alertas:j}}),B=["La consistencia interna no demuestra por sí sola validez, unidimensionalidad ni estabilidad temporal.","El omega informado es una aproximación de un factor basada en la matriz de correlaciones; debe complementarse con análisis factorial cuando la dimensionalidad sea relevante."];m.length<30&&B.push("La muestra contiene menos de 30 participantes; las estimaciones pueden ser inestables."),r>0&&B.push(`Se excluyeron ${r} filas por contener datos ausentes o incompletos.`),$.proporcionVarianza<.4&&B.push("El primer componente explica menos del 40 % de la varianza estandarizada; la aproximación unidimensional debe interpretarse con cautela.");const me=[Z(T,"El alfa de Cronbach"),Z($.omega,"El omega total aproximado"),v===null?"La correlación interítem media no está disponible.":v<.15?`La correlación interítem media es baja (${v.toFixed(3)}), lo que puede reflejar poca homogeneidad.`:v>.5?`La correlación interítem media es elevada (${v.toFixed(3)}); revise posible redundancia.`:`La correlación interítem media es ${v.toFixed(3)}, dentro del intervalo orientativo de 0.15 a 0.50.`,X.some(u=>u.correlacionItemTotal<.3)?"Existen ítems con correlación ítem–total corregida inferior a 0.30 que requieren revisión sustantiva.":"Todos los ítems alcanzan una correlación ítem–total corregida de al menos 0.30.",`El primer componente explica ${($.proporcionVarianza*100).toFixed(2)} % de la varianza de la matriz de correlaciones.`];return{tipoAnalisis:"fiabilidad-cuestionario",n:m.length,k:c,nombresItems:o.nombres,itemsInvertidos:l.map(u=>u+1),escala:{minimo:s,maximo:d},filasExcluidas:r,matrizRecodificada:m,puntuacionesTotales:E,distribucionTotal:ke(E),fiabilidad:{alfaCronbach:T,alfaEstandarizado:de,omegaTotalAproximado:$.omega,correlacionInteritemMedia:v,correlacionMitades:Y.correlacionMitades,spearmanBrown:Y.spearmanBrown,mediaPuntuacionTotal:A(E),desviacionPuntuacionTotal:F(E),varianzaPuntuacionTotal:R(E),minimoPuntuacionTotal:Math.min(...E),maximoPuntuacionTotal:Math.max(...E)},dimensionalidadAproximada:{valorPropioPrincipal:$.valorPropio,proporcionVarianzaPrimerComponente:$.proporcionVarianza,cargas:$.cargas,unicidades:$.unicidades},correlaciones:k,items:X,interpretacion:me,advertencias:B}}const C=1e-12;function U(e){return e.reduce((a,t)=>a+t,0)/e.length}function z(e){if(e.length<2)return null;const a=U(e);return e.reduce((t,n)=>t+(n-a)**2,0)/(e.length-1)}function H(e){return e[0].map((a,t)=>e.map(n=>n[t]))}function ce(e){return e.map(a=>a.reduce((t,n)=>t+n,0))}function Ie(e){if(!e.length||e[0].length<2)return null;const a=e[0].length,t=H(e).map(z),n=z(ce(e));return n===null||n<C||t.some(i=>i===null)?null:a/(a-1)*(1-t.reduce((i,r)=>i+r,0)/n)}function ze(e,a){const t=U(e),n=U(a);return e.reduce((i,r,o)=>i+(r-t)*(a[o]-n),0)/(e.length-1)}function Ne(e,a){const t=z(e),n=z(a);return t===null||n===null||t<C||n<C?null:Math.max(-1,Math.min(1,ze(e,a)/Math.sqrt(t*n)))}function Le(e){const a=H(e);return a.map((t,n)=>a.map((i,r)=>n===r?1:Ne(t,i)??0))}function ee(e,a){return e.map(t=>t.reduce((n,i,r)=>n+i*a[r],0))}function ae(e,a){return e.reduce((t,n,i)=>t+n*a[i],0)}function je(e){const a=Le(e),t=a.length;let n=Array(t).fill(1/Math.sqrt(t));for(let l=0;l<200;l+=1){const m=ee(a,n),x=Math.sqrt(ae(m,m));if(x<C)return null;const y=m.map(k=>k/x),h=Math.max(...y.map((k,v)=>Math.abs(k-n[v])));if(n=y,h<1e-10)break}n.reduce((l,m)=>l+m,0)<0&&(n=n.map(l=>-l));const i=ae(n,ee(a,n)),r=Math.sqrt(Math.max(i,0)),o=n.map(l=>Math.max(-.999,Math.min(.999,r*l))),s=o.map(l=>Math.max(1-l**2,C)),d=o.reduce((l,m)=>l+m,0),c=d**2+s.reduce((l,m)=>l+m,0);return c>C?d**2/c:null}function Se(e){if(!e.flat().every(r=>r===0||r===1))return{aplica:!1,valor:null,razon:"KR-20 solo se calcula cuando todos los ítems están codificados con 0 y 1."};const t=e[0].length,n=H(e).map(z),i=z(ce(e));return i===null||i<C||n.some(r=>r===null)?{aplica:!0,valor:null,razon:"La puntuación total no presenta variabilidad suficiente para calcular KR-20."}:{aplica:!0,valor:t/(t-1)*(1-n.reduce((r,o)=>r+o,0)/i),razon:"Todos los ítems son dicotómicos; KR-20 coincide con el alfa calculado sobre las puntuaciones 0/1."}}function Re(e){let a=Number(e)>>>0;return()=>{a+=1831565813;let t=a;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function te(e,a){if(!e.length)return null;if(a<=0)return e[0];if(a>=1)return e.at(-1);const t=(e.length-1)*a,n=Math.floor(t),i=Math.ceil(t);return n===i?e[n]:e[n]*(i-t)+e[i]*(t-n)}function ne(e,a){const t=e.filter(Number.isFinite).sort((i,r)=>i-r);if(t.length<20)return{inferior:null,superior:null,remuestrasValidas:t.length};const n=(1-a)/2;return{inferior:te(t,n),superior:te(t,1-n),remuestrasValidas:t.length}}function Fe({matriz:e,numeroRemuestras:a,nivelConfianza:t,semilla:n}){const i=Re(n),r=e.length,o=[],s=[];for(let d=0;d<a;d+=1){const c=Array.from({length:r},()=>e[Math.floor(i()*r)]),l=Ie(c),m=je(c);Number.isFinite(l)&&o.push(l),Number.isFinite(m)&&s.push(m)}return{metodo:"bootstrap percentil",nivelConfianza:t,numeroRemuestras:a,alfa:ne(o,t),omega:ne(s,t)}}function Te(e,a){const t=[],n=[];for(let i=0;i<e.length;i+=1)for(let r=i+1;r<e.length;r+=1){const o={itemA:a[i],itemB:a[r],correlacion:e[i][r]};o.correlacion>=.8&&t.push(o),o.correlacion<=-.2&&n.push(o)}return{paresRedundantes:t.sort((i,r)=>r.correlacion-i.correlacion),paresNegativos:n.sort((i,r)=>i.correlacion-r.correlacion)}}function Be({numeroRemuestras:e=500,nivelConfianzaBootstrap:a=.95,semillaBootstrap:t=20260721,...n}){const i=Ae(n),r=Math.max(100,Math.min(2e3,Math.trunc(Number(e)||500))),o=Number(a);if(!(o>0&&o<1))throw new Error("El nivel de confianza bootstrap debe estar entre 0 y 1.");const s=Se(i.matrizRecodificada),d=Fe({matriz:i.matrizRecodificada,numeroRemuestras:r,nivelConfianza:o,semilla:t}),c=Te(i.correlaciones,i.nombresItems),l=[...i.advertencias];return c.paresRedundantes.length&&l.push(`Se detectaron ${c.paresRedundantes.length} pares de ítems con correlación interítem de 0.80 o más; revise posible redundancia de contenido.`),c.paresNegativos.length&&l.push(`Se detectaron ${c.paresNegativos.length} pares con correlación igual o inferior a −0.20; revise codificación, inversión y coherencia del constructo.`),{...i,fiabilidad:{...i.fiabilidad,kr20:s.valor},kr20:s,intervalosBootstrap:d,diagnosticosAvanzados:c,advertencias:l}}function f(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function g(e,a=3){return Number.isFinite(Number(e))?Number(e).toLocaleString("es-DO",{maximumFractionDigits:a}):"—"}function L(e,a,t,n){return`
        <article
            data-grafico-exportable="true"
            data-grafico-id="${e}"
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden"
        >
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                ${a}
            </h3>
            <p class="text-sm text-slate-500 mb-6 leading-relaxed">
                ${t}
            </p>
            ${n}
        </article>
    `}function Pe(e){const a=e.items.map(n=>n.correlacionItemTotal??0),t=Math.max(1,...a.map(n=>Math.abs(n)));return L("correlacion-item-total","Correlación ítem–total corregida","Valores inferiores a 0.30 requieren revisión. Los valores negativos suelen señalar inversión no corregida, ambigüedad o falta de coherencia con la escala.",`<div class="space-y-4">
            ${e.items.map(n=>{const i=n.correlacionItemTotal,r=i===null?0:Math.min(100,Math.abs(i)/t*100),o=i===null?"bg-slate-300":i<0?"bg-red-600":i<.3?"bg-amber-500":"bg-emerald-600";return`
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <span class="font-black text-slate-800 truncate" title="${f(n.nombre)}">
                                ${f(n.nombre)}
                            </span>
                            <span class="font-mono text-sm font-black text-slate-700">
                                ${g(i)}
                            </span>
                        </div>
                        <div class="h-5 rounded-full bg-slate-100 overflow-hidden">
                            <div class="h-full rounded-full ${o}" style="width:${Math.max(i===null?0:4,r)}%"></div>
                        </div>
                    </div>
                `}).join("")}
        </div>`)}function qe(e){const a=e.items.map(r=>r.alfaSiSeElimina).filter(Number.isFinite),t=Math.min(e.fiabilidad.alfaCronbach??0,...a,0),n=Math.max(e.fiabilidad.alfaCronbach??1,...a,1),i=Math.max(n-t,.1);return L("alfa-si-elimina-item","Alfa si se elimina el ítem","Compare cada valor con el alfa global. Un aumento apreciable puede justificar revisar el contenido del ítem, pero no eliminarlo automáticamente.",`<div class="space-y-4">
            <div class="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sky-950">
                <strong>Alfa global:</strong>
                ${g(e.fiabilidad.alfaCronbach)}
            </div>
            ${e.items.map(r=>{const o=r.alfaSiSeElimina,s=o===null?0:Math.max(0,Math.min(100,(o-t)/i*100)),d=o!==null&&e.fiabilidad.alfaCronbach!==null&&o>e.fiabilidad.alfaCronbach+.02;return`
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <span class="font-black text-slate-800 truncate" title="${f(r.nombre)}">
                                ${f(r.nombre)}
                            </span>
                            <span class="font-mono text-sm font-black ${d?"text-red-700":"text-slate-700"}">
                                ${g(o)}
                            </span>
                        </div>
                        <div class="h-5 rounded-full bg-slate-100 overflow-hidden">
                            <div class="h-full rounded-full ${d?"bg-red-600":"bg-indigo-600"}" style="width:${Math.max(o===null?0:4,s)}%"></div>
                        </div>
                    </div>
                `}).join("")}
        </div>`)}function De(e){const a=Math.max(e.escala.maximo-e.escala.minimo,1e-12);return L("medias-items","Medias de los ítems","Las medias se ubican dentro del rango de la escala después de recodificar los ítems invertidos.",`<div class="flex items-end gap-3 h-72 border-b border-l border-slate-300 px-4 pt-5 overflow-x-auto">
            ${e.items.map(t=>{const n=(t.media-e.escala.minimo)/a,i=Math.max(4,Math.min(205,n*205));return`
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">
                            ${g(t.media,2)}
                        </span>
                        <div class="w-9 bg-sky-700 rounded-t-md" style="height:${i}px" title="${f(t.nombre)}: media ${g(t.media,3)}"></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all">
                            ${f(t.nombre)}
                        </span>
                    </div>
                `}).join("")}
        </div>`)}function Oe(e){const a=Math.max(...e.distribucionTotal.map(t=>t.frecuencia),1);return L("distribucion-puntuacion-total","Distribución de la puntuación total","El histograma resume las puntuaciones obtenidas al sumar los ítems después de aplicar la recodificación indicada.",`<div class="flex items-end gap-1 h-72 border-b border-l border-slate-300 px-4 pt-5 overflow-x-auto">
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
        </div>`)}function Ve(e){return L("cargas-componente-principal","Cargas del componente principal","Estas cargas sustentan la aproximación unidimensional utilizada para calcular omega. No sustituyen un análisis factorial confirmatorio.",`<div class="space-y-4">
            ${e.items.map(a=>{const t=a.cargaUnFactor,n=Math.min(100,Math.abs(t)*100),i=t<0?"bg-red-600":t<.4?"bg-amber-500":"bg-cyan-700";return`
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <span class="font-black text-slate-800 truncate" title="${f(a.nombre)}">
                                ${f(a.nombre)}
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
        </div>`)}function Ue(e){const a=Math.min(1,Math.abs(e));return e>=0?`rgba(2, 132, 199, ${.1+a*.75})`:`rgba(220, 38, 38, ${.1+a*.75})`}function Ke(e){const a=e.k;return L("mapa-correlaciones-interitem","Mapa de correlaciones interítem","Los tonos azules representan relaciones positivas y los rojos relaciones negativas. Revise especialmente correlaciones negativas o extremadamente altas.",`<div class="overflow-x-auto">
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
                            <th class="p-2 text-left font-black text-slate-700 max-w-[180px] truncate" title="${f(e.nombresItems[n])}">
                                ${n+1}. ${f(e.nombresItems[n])}
                            </th>
                            ${t.map((i,r)=>`
                                <td
                                    class="w-12 h-12 border border-white text-center font-black ${Math.abs(i)>.55?"text-white":"text-slate-900"}"
                                    style="background:${Ue(i)}"
                                    title="${f(e.nombresItems[n])} × ${f(e.nombresItems[r])}: ${g(i)}"
                                >
                                    ${n===r?"1":g(i,2)}
                                </td>
                            `).join("")}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
            <p class="text-xs text-slate-500 mt-4">
                Matriz de ${a} × ${a} ítems.
            </p>
        </div>`)}function _e(e){return`
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
                ${Pe(e)}
                ${qe(e)}
                ${De(e)}
                ${Oe(e)}
                ${Ve(e)}
                ${Ke(e)}
            </div>
        </section>
    `}function na(){const e=document.createElement("section");let a=null;e.className=`
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
                    Examine la consistencia interna, la contribución de cada ítem, la precisión de las estimaciones y la estructura unidimensional aproximada de una escala.
                </p>
                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Alfa de Cronbach</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Omega aproximado</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">KR-20</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Bootstrap</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Análisis de ítems</span>
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
                    ${S("Encabezados","La primera fila puede contener nombres. En ausencia de encabezados se asignarán Ítem 1, Ítem 2, etc.")}
                    ${S("Ítems invertidos","Indique posiciones separadas por coma —por ejemplo 3, 6— o nombres completos separados por punto y coma.")}
                    ${S("Datos ausentes","Las filas con celdas vacías, NA, N/A, punto, null o missing se excluyen mediante eliminación listwise.")}
                    ${S("KR-20","Se calcula automáticamente cuando todos los ítems recodificados contienen únicamente 0 y 1.")}
                    ${S("Bootstrap","Los intervalos percentiles cuantifican la incertidumbre muestral de alfa y omega; no corrigen problemas de dimensionalidad.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">Advertencia metodológica</h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La consistencia interna no demuestra validez, unidimensionalidad ni estabilidad temporal. No elimine ítems únicamente para aumentar un coeficiente.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-fiabilidad-cuestionarios"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
                    ${ie("Mínimo de la escala","minimoEscala","1")}
                    ${ie("Máximo de la escala","maximoEscala","5")}

                    <label class="block xl:col-span-2">
                        <span class="block text-sm font-black text-slate-800 mb-2">Ítems invertidos</span>
                        <input
                            type="text"
                            name="itemsInvertidos"
                            placeholder="Ej.: 3, 6"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        />
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Confianza</span>
                        <select name="nivelBootstrap" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100">
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-[0.45fr_1.55fr] gap-5 mt-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">Remuestras bootstrap</span>
                        <select name="numeroRemuestras" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100">
                            <option value="200">200 — rápida</option>
                            <option value="500" selected>500 — recomendada</option>
                            <option value="1000">1,000 — más estable</option>
                        </select>
                    </label>

                    <div class="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-950 leading-relaxed">
                        Las remuestras se generan con una semilla reproducible. Con muestras pequeñas, los intervalos pueden ser amplios o inestables.
                    </div>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">Respuestas del cuestionario</span>
                    <textarea
                        name="datos"
                        rows="16"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
                        placeholder="Ítem 1, Ítem 2, Ítem 3
4, 5, 4
3, 4, 3"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Para decimales utilice punto.
                    </span>
                </label>

                <div class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 class="font-black text-slate-900">Importar archivo</h3>
                            <p class="text-sm text-slate-600 mt-1">Admite CSV o TXT con la misma estructura.</p>
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
                        data-action="analizar"
                        class="inline-flex items-center justify-center bg-amber-700 text-white font-black rounded-xl px-7 py-4 hover:bg-amber-800 transition-colors shadow-lg disabled:opacity-60"
                    >
                        Analizar fiabilidad
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button type="button" data-action="cargar-ejemplo" class="inline-flex items-center justify-center border border-amber-300 text-amber-800 font-black rounded-xl px-6 py-4 hover:bg-amber-50 transition-colors">Cargar ejemplo</button>
                    <button type="button" data-action="cargar-dicotomico" class="inline-flex items-center justify-center border border-violet-300 text-violet-800 font-black rounded-xl px-6 py-4 hover:bg-violet-50 transition-colors">Ejemplo KR-20</button>
                    <button type="button" data-action="limpiar" class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors">Limpiar</button>
                </div>
            </form>
        </section>

        <section id="resultados-fiabilidad-cuestionarios" class="hidden mt-8" aria-live="polite"></section>
    `;const t=e.querySelector("#formulario-fiabilidad-cuestionarios"),n=e.querySelector("#mensaje-error-fiabilidad"),i=e.querySelector("#resultados-fiabilidad-cuestionarios"),r=t.elements.archivo,o=t.querySelector("[data-action='analizar']");return r.addEventListener("change",async()=>{const s=r.files?.[0];if(s)try{t.elements.datos.value=await s.text(),K(n)}catch{V(n,"No fue posible leer el archivo seleccionado.")}}),t.addEventListener("submit",async s=>{s.preventDefault(),K(n);const d=o.innerHTML;o.disabled=!0,o.textContent="Calculando intervalos…";try{await new Promise(l=>window.requestAnimationFrame(l));const c=Ye(t);a=Be(c),i.innerHTML=We(a),fe({contenedor:i,nombre:"fiabilidad-cuestionarios",datos:{solicitud:c,resultado:a}}),i.classList.remove("hidden"),i.scrollIntoView({behavior:"smooth",block:"start"})}catch(c){i.classList.add("hidden"),V(n,c instanceof Error?c.message:"No fue posible analizar la fiabilidad.")}finally{o.disabled=!1,o.innerHTML=d}}),e.addEventListener("click",async s=>{const d=s.target.closest("[data-action]");if(!d)return;const c=d.dataset.action;if(c==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(c==="cargar-ejemplo"){Ge(t),O(i,n);return}if(c==="cargar-dicotomico"){Je(t),O(i,n);return}if(c==="limpiar"){t.reset(),t.elements.minimoEscala.value="1",t.elements.maximoEscala.value="5",t.elements.nivelBootstrap.value="0.95",t.elements.numeroRemuestras.value="500",t.elements.datos.value="",O(i,n);return}if(a)if(c==="exportar-csv")aa(a);else if(c==="copiar-reporte")try{await navigator.clipboard.writeText(Ze(a));const l=d.textContent;d.textContent="Reporte copiado",setTimeout(()=>{d.textContent=l},1600)}catch{V(n,"El navegador no permitió copiar el reporte.")}else c==="imprimir"&&window.print()}),e}function ie(e,a,t){return`
        <label class="block">
            <span class="block text-sm font-black text-slate-800 mb-2">${e}</span>
            <input
                type="number"
                step="any"
                name="${a}"
                value="${t}"
                class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-amber-100 focus:border-amber-500"
            />
        </label>
    `}function S(e,a){return`<div><h3 class="font-black text-slate-900 mb-1">${e}</h3><p>${a}</p></div>`}function He(e){return e.includes("	")?"	":e.includes(";")?";":","}function re(e){return["","na","n/a",".","null","missing"].includes(String(e??"").trim().toLowerCase())}function Ye(e){const a=e.elements.datos.value.trim();if(!a)throw new Error("Introduzca las respuestas antes de analizar la fiabilidad.");const t=a.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);if(t.length<5)throw new Error("Se requieren al menos cinco participantes completos.");const n=He(t[0]),i=t.map(l=>l.split(n).map(m=>m.trim())),o=i[0].every(l=>!re(l)&&Number.isFinite(Number(l)))?i[0].map((l,m)=>`Ítem ${m+1}`):i.shift(),s=o.length;if(s<3)throw new Error("El cuestionario debe contener al menos tres columnas de ítems.");if(!i.every(l=>l.length===s))throw new Error("Todas las filas deben contener la misma cantidad de columnas.");let d=0;const c=[];return i.forEach((l,m)=>{if(l.some(re)){d+=1;return}c.push(l.map((x,y)=>{const h=Number(x);if(!Number.isFinite(h))throw new Error(`La fila ${m+1}, columna ${y+1}, contiene un valor no numérico.`);return h}))}),{matriz:c,nombresItems:o,itemsInvertidos:Xe(e.elements.itemsInvertidos.value,o),minimoEscala:Number(e.elements.minimoEscala.value),maximoEscala:Number(e.elements.maximoEscala.value),filasExcluidas:d,numeroRemuestras:Number(e.elements.numeroRemuestras.value),nivelConfianzaBootstrap:Number(e.elements.nivelBootstrap.value)}}function Xe(e,a){if(!e.trim())return[];const t=new Map(a.map((n,i)=>[n.trim().toLowerCase(),i]));return e.split(/[,;]+/).map(n=>n.trim()).filter(Boolean).map(n=>{const i=Number(n);if(Number.isInteger(i)){if(i<1||i>a.length)throw new Error(`El ítem invertido ${n} no existe.`);return i-1}const r=t.get(n.toLowerCase());if(r===void 0)throw new Error(`No se encontró el ítem invertido llamado “${n}”.`);return r})}function Ge(e){e.elements.minimoEscala.value="1",e.elements.maximoEscala.value="5",e.elements.itemsInvertidos.value="6",e.elements.datos.value=`Planificacion, Persistencia, Autonomia, Participacion, Confianza, Desmotivacion
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
2, 3, 2, 2, 3, 4`}function Je(e){e.elements.minimoEscala.value="0",e.elements.maximoEscala.value="1",e.elements.itemsInvertidos.value="",e.elements.datos.value=`Item1, Item2, Item3, Item4, Item5, Item6
1,1,1,1,1,1
1,1,1,0,1,1
1,1,0,1,1,1
1,0,1,1,1,0
0,1,1,1,0,1
1,1,1,1,1,0
0,0,1,1,0,1
1,0,1,0,1,0
0,1,0,1,0,1
1,1,0,0,1,0
0,0,1,0,0,1
1,0,0,1,1,0
0,1,1,0,0,1
0,0,0,1,0,0
1,1,1,1,0,1
0,1,0,0,1,0
1,0,1,1,0,1
0,0,1,0,1,0
1,1,0,1,1,1
0,1,1,0,1,0
1,0,0,1,0,1
0,0,0,0,0,0
1,1,1,0,1,1
0,1,0,1,0,0
1,0,1,0,1,1
0,0,1,1,0,0
1,1,0,1,1,0
0,1,1,0,0,0
1,0,0,1,0,0
0,0,0,0,1,0`}function O(e,a){e.classList.add("hidden"),e.innerHTML="",K(a)}function p(e,a=4){return Number.isFinite(Number(e))?Number(e).toLocaleString("es-DO",{maximumFractionDigits:a}):"—"}function N(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function M(e,a,t){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">${e}</p>
            <p class="text-2xl font-black text-slate-900 break-words">${a}</p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">${t}</p>
        </article>
    `}function q(e){return!Number.isFinite(e?.inferior)||!Number.isFinite(e?.superior)?"No disponible":`[${p(e.inferior,4)}, ${p(e.superior,4)}]`}function Qe(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Estadísticos de fiabilidad y revisión por ítem
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Ítem</th>
                        <th scope="col" class="px-4 py-3 text-right">Media</th>
                        <th scope="col" class="px-4 py-3 text-right">DE</th>
                        <th scope="col" class="px-4 py-3 text-right">Ítem–total</th>
                        <th scope="col" class="px-4 py-3 text-right">Alfa sin ítem</th>
                        <th scope="col" class="px-4 py-3 text-right">Carga</th>
                        <th scope="col" class="px-4 py-3 text-left">Revisión</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.items.map(a=>`
                        <tr class="${a.alertas.length?"bg-amber-50":""}">
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">
                                ${a.indice}. ${N(a.nombre)}
                                ${a.invertido?'<span class="ml-2 rounded-full bg-violet-100 px-2 py-1 text-[10px] text-violet-800">Invertido</span>':""}
                            </th>
                            <td class="px-4 py-3 text-right">${p(a.media,3)}</td>
                            <td class="px-4 py-3 text-right">${p(a.desviacion,3)}</td>
                            <td class="px-4 py-3 text-right font-black">${p(a.correlacionItemTotal,3)}</td>
                            <td class="px-4 py-3 text-right">${p(a.alfaSiSeElimina,3)}</td>
                            <td class="px-4 py-3 text-right">${p(a.cargaUnFactor,3)}</td>
                            <td class="px-4 py-3 text-slate-700 min-w-[260px]">
                                ${a.alertas.length?a.alertas.map(N).join(" "):"Sin alerta automática."}
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function oe(e,a,t){const n=t==="negativo"?"border-red-200 bg-red-50 text-red-950":"border-violet-200 bg-violet-50 text-violet-950";return a.length?`
        <div class="rounded-2xl border ${n} p-5">
            <h3 class="font-black mb-3">${e}</h3>
            <div class="space-y-2 text-sm">
                ${a.map(i=>`
                    <p>
                        <strong>${N(i.itemA)}</strong> –
                        <strong>${N(i.itemB)}</strong>:
                        r = ${p(i.correlacion,3)}
                    </p>
                `).join("")}
            </div>
        </div>
    `:`
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                <strong>${e}:</strong> no se detectaron pares mediante el criterio automático.
            </div>
        `}function We(e){const a=e.intervalosBootstrap,t=e.kr20;return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">Consistencia interna</p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">Resultados de fiabilidad</h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        Se analizaron ${e.n} participantes y ${e.k} ítems. Se recodificaron ${e.itemsInvertidos.length} ítems invertidos y se excluyeron ${e.filasExcluidas} filas incompletas.
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

        <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4 mt-7">
            ${M("Participantes",e.n,"Filas completas")}
            ${M("Ítems",e.k,"Componentes de la escala")}
            ${M("Alfa",p(e.fiabilidad.alfaCronbach,4),"No estandarizado")}
            ${M("Alfa est.",p(e.fiabilidad.alfaEstandarizado,4),"Matriz de correlaciones")}
            ${M("Omega",p(e.fiabilidad.omegaTotalAproximado,4),"Aproximación de un factor")}
            ${M("KR-20",t.aplica?p(t.valor,4):"No aplica","Ítems dicotómicos 0/1")}
            ${M("Spearman–Brown",p(e.fiabilidad.spearmanBrown,4),"División par–impar")}
        </section>

        <section class="mt-8 rounded-3xl border border-sky-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">Precisión muestral</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Intervalos bootstrap</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Método percentil con ${a.numeroRemuestras.toLocaleString("es-DO")} remuestras y nivel de confianza de ${(a.nivelConfianza*100).toFixed(0)} %.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                ${M("IC del alfa",q(a.alfa),`${a.alfa.remuestrasValidas} remuestras válidas`)}
                ${M("IC del omega",q(a.omega),`${a.omega.remuestrasValidas} remuestras válidas`)}
            </div>
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 class="text-2xl font-black text-amber-950 mb-4">Advertencias metodológicas</h2>
            <ul class="space-y-3 text-amber-950 leading-relaxed">
                ${e.advertencias.map(n=>`
                    <li class="flex gap-3"><span class="font-black">!</span><span>${N(n)}</span></li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Diagnóstico por ítem</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Contribución de cada ítem</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Revise conjuntamente la correlación ítem–total, el alfa si se elimina, la carga aproximada y el contenido sustantivo.
            </p>
            ${Qe(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">Relaciones interítem</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Redundancia y correlaciones negativas</h2>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
                ${oe("Pares potencialmente redundantes (r ≥ 0.80)",e.diagnosticosAvanzados.paresRedundantes,"redundante")}
                ${oe("Pares con correlación negativa (r ≤ −0.20)",e.diagnosticosAvanzados.paresNegativos,"negativo")}
            </div>
        </section>

        ${_e(e)}

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del instrumento</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(n=>`
                    <li class="flex gap-3"><span class="font-black text-emerald-700">✓</span><span>${N(n)}</span></li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                Alfa, omega y KR-20 evalúan consistencia interna bajo supuestos diferentes, pero ninguno demuestra por sí solo validez. Antes de modificar el instrumento, examine la dimensionalidad, el contenido, la formulación de los ítems, la población y el propósito de la medición.
            </p>
        </section>
    `}function Ze(e){const a=e.intervalosBootstrap,t=["CUESTIONARIOS Y FIABILIDAD — LABORATORIO KERNEL","",`Participantes: ${e.n}`,`Ítems: ${e.k}`,`Alfa de Cronbach: ${p(e.fiabilidad.alfaCronbach,4)}`,`IC bootstrap del alfa: ${q(a.alfa)}`,`Alfa estandarizado: ${p(e.fiabilidad.alfaEstandarizado,4)}`,`Omega aproximado: ${p(e.fiabilidad.omegaTotalAproximado,4)}`,`IC bootstrap del omega: ${q(a.omega)}`,`KR-20: ${e.kr20.aplica?p(e.kr20.valor,4):"No aplica"}`,`Spearman–Brown: ${p(e.fiabilidad.spearmanBrown,4)}`,`Correlación interítem media: ${p(e.fiabilidad.correlacionInteritemMedia,4)}`,"","Interpretación:"];return e.interpretacion.forEach(n=>t.push(`- ${n}`)),t.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),t.join(`
`)}function ea(e){return`"${String(e??"").replaceAll('"','""')}"`}function aa(e){const a=e.intervalosBootstrap,n=[["CUESTIONARIOS Y FIABILIDAD"],["Participantes",e.n],["Ítems",e.k],["Alfa de Cronbach",e.fiabilidad.alfaCronbach],["IC alfa inferior",a.alfa.inferior],["IC alfa superior",a.alfa.superior],["Alfa estandarizado",e.fiabilidad.alfaEstandarizado],["Omega aproximado",e.fiabilidad.omegaTotalAproximado],["IC omega inferior",a.omega.inferior],["IC omega superior",a.omega.superior],["KR-20",e.kr20.valor],["Spearman-Brown",e.fiabilidad.spearmanBrown],["Correlación interítem media",e.fiabilidad.correlacionInteritemMedia],[],["Ítem","Invertido","Media","DE","Ítem-total","Alfa sin ítem","Carga","Unicidad","Alertas"],...e.items.map(s=>[s.nombre,s.invertido?"Sí":"No",s.media,s.desviacion,s.correlacionItemTotal,s.alfaSiSeElimina,s.cargaUnFactor,s.unicidad,s.alertas.join(" ")]),[],["Pares redundantes"],["Ítem A","Ítem B","Correlación"],...e.diagnosticosAvanzados.paresRedundantes.map(s=>[s.itemA,s.itemB,s.correlacion]),[],["Créditos","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(s=>s.map(ea).join(",")).join(`
`),i=new Blob(["\uFEFF",n],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(i),o=document.createElement("a");o.href=r,o.download="fiabilidad-cuestionario-kernel.csv",document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}function V(e,a){e.textContent=a,e.classList.remove("hidden")}function K(e){e.textContent="",e.classList.add("hidden")}export{na as CalculadoraFiabilidadCuestionarios};
