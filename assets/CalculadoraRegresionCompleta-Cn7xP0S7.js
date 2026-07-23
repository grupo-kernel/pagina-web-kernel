import{p as ze}from"./exportacionesCalculadoras-BiNXW7QL.js";const C=1e-12;function pe(e,t){if(!Array.isArray(t)||t.length<3)throw new Error(`${e} debe contener al menos tres observaciones.`);const a=t.map(r=>r==null||typeof r=="string"&&r.trim()===""?NaN:Number(r));if(!a.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return a}function he(e){return e[0].map((t,a)=>e.map(r=>r[a]))}function oe(e,t){return e.map(a=>t[0].map((r,i)=>a.reduce((c,n,l)=>c+n*t[l][i],0)))}function ae(e,t){return e.map(a=>a.reduce((r,i,c)=>r+i*t[c],0))}function je(e,t){const a=e.length,r=e[0].length,i=e.map(o=>[...o]),c=[...t],n=[];for(let o=0;o<r;o+=1){let d=0;for(let u=o;u<a;u+=1)d=Math.hypot(d,i[u][o]);const p=Number.EPSILON*Math.max(a,r)*Math.max(1,...n.map(Math.abs))*100;if(!(d>p))throw new Error("La matriz de predictores es singular. Elimine variables redundantes o perfectamente colineales.");const m=i[o][o]>=0?1:-1,v=Array.from({length:a-o},(u,$)=>i[o+$][o]);v[0]+=m*d;const h=v.reduce((u,$)=>u+$**2,0);if(!(h>0))throw new Error("La matriz de predictores es singular. Elimine variables redundantes o perfectamente colineales.");for(let u=o;u<r;u+=1){let $=0;for(let k=0;k<v.length;k+=1)$+=v[k]*i[o+k][u];const q=2*$/h;for(let k=0;k<v.length;k+=1)i[o+k][u]-=q*v[k]}let y=0;for(let u=0;u<v.length;u+=1)y+=v[u]*c[o+u];const g=2*y/h;for(let u=0;u<v.length;u+=1)c[o+u]-=g*v[u];n.push(i[o][o])}const l=Array(r).fill(0);for(let o=r-1;o>=0;o-=1){let d=c[o];for(let p=o+1;p<r;p+=1)d-=i[o][p]*l[p];l[o]=d/i[o][o]}const s=Array.from({length:r},()=>Array(r).fill(0));for(let o=0;o<r;o+=1)for(let d=r-1;d>=0;d-=1){let p=d===o?1:0;for(let m=d+1;m<r;m+=1)p-=i[d][m]*s[m][o];s[d][o]=p/i[d][d]}return{coeficientes:l,inversaProducto:oe(s,he(s))}}function Ce(e,t){const a=e[0].length,r=e.map(s=>t?ne(s):0),i=e.map((s,o)=>{const d=r[o],p=Math.sqrt(s.reduce((v,h)=>v+(h-d)**2,0)/a),m=Math.max(1,...s.map(Math.abs));if(!(p>Number.EPSILON*m*10))throw new Error(`El predictor X${o+1} no presenta variabilidad suficiente para estimar el modelo.`);return p}),c=Array.from({length:a},(s,o)=>[...t?[1]:[],...e.map((d,p)=>(d[o]-r[p])/i[p])]),n=c[0].length,l=Array.from({length:n},()=>Array(n).fill(0));return t?(l[0][0]=1,e.forEach((s,o)=>{l[0][o+1]=-r[o]/i[o],l[o+1][o+1]=1/i[o]})):e.forEach((s,o)=>{l[o][o]=1/i[o]}),{matriz:c,transformacion:l,medias:r,escalas:i}}function ne(e){return e.reduce((t,a)=>t+a,0)/e.length}function qe(e,t=ne(e)){return e.reduce((a,r)=>a+(r-t)**2,0)}function H(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-H(1-e);let a=.9999999999998099;const r=e-1;t.forEach((c,n)=>{a+=c/(r+n+1)});const i=r+t.length-.5;return .5*Math.log(2*Math.PI)+(r+.5)*Math.log(i)-i+Math.log(a)}function me(e,t,a){const n=e+t,l=e+1,s=e-1;let o=1,d=1-n*a/l;Math.abs(d)<1e-300&&(d=1e-300),d=1/d;let p=d;for(let m=1;m<=200;m+=1){const v=2*m;let h=m*(t-m)*a/((s+v)*(e+v));d=1+h*d,Math.abs(d)<1e-300&&(d=1e-300),o=1+h/o,Math.abs(o)<1e-300&&(o=1e-300),d=1/d,p*=d*o,h=-(e+m)*(n+m)*a/((e+v)*(l+v)),d=1+h*d,Math.abs(d)<1e-300&&(d=1e-300),o=1+h/o,Math.abs(o)<1e-300&&(o=1e-300),d=1/d;const y=d*o;if(p*=y,Math.abs(y-1)<3e-14)break}return p}function ce(e,t,a){if(e<=0)return 0;if(e>=1)return 1;const r=Math.exp(H(t+a)-H(t)-H(a)+t*Math.log(e)+a*Math.log(1-e));return e<(t+1)/(t+a+2)?r*me(t,a,e)/t:1-r*me(a,t,1-e)/a}function Le(e,t){if(!Number.isFinite(e))return 0;const a=t/(t+e**2);return Math.min(1,ce(a,t/2,.5))}function Re(e,t,a){if(!Number.isFinite(e))return 0;if(e<=0)return 1;const r=a/(a+t*e);return ce(r,a/2,t/2)}function xe(e,t){if(e===0)return .5;if(e===1/0)return 1;if(e===-1/0)return 0;const a=t/(t+e**2),r=.5*ce(a,t/2,.5);return e>0?1-r:r}function ge(e,t){if(!(e>0&&e<1)||!(t>0))throw new Error("No fue posible calcular el cuantil de la distribución t.");if(e===.5)return 0;if(e<.5)return-ge(1-e,t);let a=0,r=1;for(;xe(r,t)<e&&r<1e12;)r*=2;for(let i=0;i<120;i+=1){const c=(a+r)/2;xe(c,t)<e?a=c:r=c}return(a+r)/2}function Ae(e,t){const a=e[0].length;return Array.from({length:a},(r,i)=>[...t?[1]:[],...e.map(c=>c[i])])}function Ne(e,t){return e.length<2?[]:e.map((a,r)=>{const i=e.filter((c,n)=>n!==r);try{const c=ve({y:a,X:i,nombresPredictores:t.filter((l,s)=>s!==r),incluirIntercepto:!0,nivelConfianza:.95,calcularDiagnosticos:!1,calcularVif:!1}),n=Math.max(1-c.ajuste.r2,C);return{variable:t[r],tolerancia:n,vif:1/n}}catch{return{variable:t[r],tolerancia:0,vif:1/0}}})}function ve({y:e,X:t,nombresPredictores:a=[],incluirIntercepto:r=!0,nivelConfianza:i=.95,calcularDiagnosticos:c=!0,calcularVif:n=!0}){const l=pe("La variable dependiente",e);if(!Array.isArray(t)||!t.length)throw new Error("Debe proporcionar al menos una variable predictora.");const s=t.map((x,b)=>pe(a[b]||`X${b+1}`,x));if(!s.every(x=>x.length===l.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(i>0&&i<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");const o=s.map((x,b)=>a[b]||`X${b+1}`),d=ne(l),p=qe(l,d),m=Math.max(1,...l.map(Math.abs));if(Math.sqrt(p/l.length)<=Number.EPSILON*m*10)throw new Error("La variable dependiente no presenta variabilidad; no es posible ajustar una regresión.");const v=Ae(s,r),h=Ce(s,r),y=l.length,g=v[0].length,u=y-g;if(u<=0)throw new Error("No hay suficientes observaciones para estimar el modelo.");const $=je(h.matriz,l),q=ae(h.transformacion,$.coeficientes),k=oe(oe(h.transformacion,$.inversaProducto),he(h.transformacion));if(!q.every(Number.isFinite)||!k.flat().every(Number.isFinite))throw new Error("El ajuste produjo resultados no finitos. Revise la escala, colinealidad y valores extremos de los predictores.");const F=ae(h.matriz,$.coeficientes),z=l.map((x,b)=>x-F[b]),V=r?p:l.reduce((x,b)=>x+b**2,0),T=z.reduce((x,b)=>x+b**2,0),B=Math.max(V-T,0),G=V>C?1-T/V:1,le=r?1-(1-G)*(y-1)/u:1-(1-G)*y/u,j=T/u,Q=Math.sqrt(j),ye=z.reduce((x,b)=>x+Math.abs(b),0)/y,L=g-(r?1:0),O=L>0&&j>C?B/L/j:1/0,A=L>0?Re(O,L,u):null,de=ge(.5+i/2,u),K=1-i,$e=[...r?["Intercepto"]:[],...o],we=q.map((x,b)=>{const w=Math.sqrt(Math.max(j*k[b][b],0)),X=w>C?x/w:x===0?0:1/0,te=Le(Math.abs(X),u);return{termino:$e[b],estimacion:x,errorEstandar:w,t:X,p:te,intervaloConfianza:{inferior:x-de*w,superior:x+de*w,nivel:i}}}),S=h.matriz.map(x=>{const b=ae($.inversaProducto,x);return x.reduce((w,X,te)=>w+X*b[te],0)}),Z=z.map((x,b)=>{const w=Math.sqrt(Math.max(j*(1-S[b]),C));return x/w}),J=z.map((x,b)=>{const w=S[b];return g>0&&j>C?x**2/(g*j)*w/Math.max((1-w)**2,C):0}),ue=z.reduce((x,b)=>x+b**2,0),ke=z.slice(1).reduce((x,b,w)=>x+(b-z[w])**2,0),Ee=ue>C?ke/ue:null,Y=n&&s.length>1?Ne(s,o):[],ee=c?J.map((x,b)=>({observacion:b+1,distanciaCook:x,leverage:S[b],residuoEstandarizado:Z[b]})).filter(x=>x.distanciaCook>4/y||Math.abs(x.residuoEstandarizado)>2||x.leverage>2*g/y):[],Me=[`El modelo explica ${(G*100).toFixed(2)} % de la variabilidad de la variable dependiente.`,`El R² ajustado es ${le.toFixed(4)} y el error estándar de estimación es ${Q.toFixed(4)}.`,A===null?"No se calculó una prueba global del modelo.":A<K?`El modelo global es estadísticamente significativo (F = ${O.toFixed(4)}, p ${A<.001?"< 0.001":`= ${A.toFixed(4)}`}).`:`El modelo global no alcanza significación estadística con α = ${K.toFixed(3)} (F = ${O.toFixed(4)}, p = ${A.toFixed(4)}).`,Y.some(x=>x.vif>=10)?"Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10).":Y.some(x=>x.vif>=5)?"Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5).":Y.length?"No se detectó multicolinealidad relevante mediante el criterio VIF.":"El VIF no aplica a un modelo con un solo predictor.",ee.length?`Se identificaron ${ee.length} observaciones potencialmente influyentes que deben revisarse.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos."];return{tipoModelo:s.length===1?"regresion-lineal-simple":"regresion-lineal-multiple",n:y,numeroPredictores:s.length,incluirIntercepto:r,nivelConfianza:i,alfa:K,nombresPredictores:o,estabilizacion:{medias:h.medias,escalas:h.escalas,coeficientesEstandarizados:$.coeficientes},coeficientes:we,ajuste:{r2:G,r2Ajustado:le,mae:ye,mse:j,rmse:Q,errorEstandarEstimacion:Q},anova:{sumaCuadradosModelo:B,sumaCuadradosError:T,sumaCuadradosTotal:V,gradosLibertadModelo:L,gradosLibertadError:u,gradosLibertadTotal:r?y-1:y,mediaCuadraticaModelo:L>0?B/L:null,mediaCuadraticaError:j,f:O,p:A},predichos:F,residuos:z,diagnosticos:{leverage:S,residuosEstandarizados:Z,distanciaCook:J,durbinWatson:Ee,vif:Y,observacionesInfluyentes:ee},datosGrafico:l.map((x,b)=>({observacion:b+1,observado:x,predicho:F[b],residuo:z[b],residuoEstandarizado:Z[b],leverage:S[b],distanciaCook:J[b],predictores:s.map(w=>w[b])})),interpretacion:Me}}function Ie(e,t){if(!e?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(t)||t.length!==e.numeroPredictores)throw new Error(`Debe proporcionar ${e.numeroPredictores} valores predictores.`);const a=t.map(c=>c==null||typeof c=="string"&&c.trim()===""?NaN:Number(c));if(!a.every(Number.isFinite))throw new Error("Los valores predictores deben ser numéricos.");if(e.estabilizacion?.medias?.length===e.numeroPredictores&&e.estabilizacion?.escalas?.length===e.numeroPredictores&&e.estabilizacion?.coeficientesEstandarizados?.length===e.coeficientes.length)return[...e.incluirIntercepto?[1]:[],...a.map((n,l)=>(n-e.estabilizacion.medias[l])/e.estabilizacion.escalas[l])].reduce((n,l,s)=>n+l*e.estabilizacion.coeficientesEstandarizados[s],0);const r=e.coeficientes.map(c=>c.estimacion);return[...e.incluirIntercepto?[1]:[],...a].reduce((c,n,l)=>c+n*r[l],0)}function E(e,t=3){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{maximumFractionDigits:t}).format(e):"—"}function ie(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function N(e,t=.08){const a=e.filter(Number.isFinite);let r=Math.min(...a),i=Math.max(...a);if(!a.length)return{minimo:0,maximo:1};if(Math.abs(i-r)<1e-12){const c=Math.max(Math.abs(i)*.1,1);r-=c,i+=c}else{const c=(i-r)*t;r-=c,i+=c}return{minimo:r,maximo:i}}function se(e,t,a,r){const i=Math.max(t-e,1e-12);return c=>a+(c-e)/i*(r-a)}function W({ancho:e,alto:t,margen:a,rangoX:r,rangoY:i,etiquetaX:c,etiquetaY:n}){const l=[],s=[],o=[],d=se(r.minimo,r.maximo,a.izquierdo,e-a.derecho),p=se(i.minimo,i.maximo,t-a.inferior,a.superior);for(let m=0;m<=4;m+=1){const v=m/4,h=r.minimo+v*(r.maximo-r.minimo),y=i.minimo+v*(i.maximo-i.minimo),g=d(h),u=p(y);l.push(`
            <line x1="${g}" y1="${a.superior}" x2="${g}" y2="${t-a.inferior}" stroke="#e2e8f0" stroke-width="1" />
            <line x1="${a.izquierdo}" y1="${u}" x2="${e-a.derecho}" y2="${u}" stroke="#e2e8f0" stroke-width="1" />
        `),s.push(`
            <text x="${g}" y="${t-a.inferior+20}" text-anchor="middle" font-size="10" fill="#64748b">
                ${E(h,2)}
            </text>
        `),o.push(`
            <text x="${a.izquierdo-10}" y="${u+4}" text-anchor="end" font-size="10" fill="#64748b">
                ${E(y,2)}
            </text>
        `)}return{x:d,y:p,contenido:`
            ${l.join("")}
            <line x1="${a.izquierdo}" y1="${a.superior}" x2="${a.izquierdo}" y2="${t-a.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${a.izquierdo}" y1="${t-a.inferior}" x2="${e-a.derecho}" y2="${t-a.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${s.join("")}
            ${o.join("")}
            <text x="${(a.izquierdo+e-a.derecho)/2}" y="${t-8}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">
                ${ie(c)}
            </text>
            <text x="17" y="${t/2}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 17 ${t/2})">
                ${ie(n)}
            </text>
        `}}function I(e,t,a,r){return`
        <article
            data-grafico-exportable="true"
            data-grafico-id="${e}"
            class="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-md overflow-hidden"
        >
            <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-2">
                ${t}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${a}
            </p>
            <div class="overflow-x-auto">
                ${r}
            </div>
        </article>
    `}function P(e,t){return`
        <svg
            viewBox="0 0 640 360"
            class="w-full min-w-[560px]"
            role="img"
            aria-label="${ie(t)}"
        >
            <rect x="0" y="0" width="640" height="360" rx="18" fill="#ffffff" />
            ${e}
        </svg>
    `}function be(e,t){const a=e.coeficientes.map(i=>i.estimacion);return[...e.incluirIntercepto?[1]:[],...t].reduce((i,c,n)=>i+c*a[n],0)}function Pe(e,t){if(e.numeroPredictores!==1)return"";const a=e.nombresPredictores[0]||"X",r=e.datosGrafico,i=r.map(g=>g.predictores[0]),c=r.map(g=>g.observado),n=N(i),l=N([...c,...r.map(g=>g.predicho)]),o=W({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:n,rangoY:l,etiquetaX:a,etiquetaY:t}),d=Math.min(...i),p=Math.max(...i),m=be(e,[d]),v=be(e,[p]),h=r.map(g=>`
        <line
            x1="${o.x(g.predictores[0])}"
            y1="${o.y(g.observado)}"
            x2="${o.x(g.predictores[0])}"
            y2="${o.y(g.predicho)}"
            stroke="#cbd5e1"
            stroke-width="1.5"
        />
    `).join(""),y=r.map((g,u)=>`
        <circle
            cx="${o.x(g.predictores[0])}"
            cy="${o.y(g.observado)}"
            r="5.5"
            fill="#4f46e5"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${u+1}: ${a} = ${E(g.predictores[0])}; ${t} = ${E(g.observado)}</title>
        </circle>
    `).join("");return I("dispersion-recta-ajustada","Dispersión y recta ajustada","Los puntos representan los datos observados; la línea muestra el modelo estimado y los segmentos verticales representan los residuos.",P(`
            ${o.contenido}
            ${h}
            <line
                x1="${o.x(d)}"
                y1="${o.y(m)}"
                x2="${o.x(p)}"
                y2="${o.y(v)}"
                stroke="#dc2626"
                stroke-width="4"
                stroke-linecap="round"
            />
            ${y}
        `,"Gráfico de dispersión con recta de regresión"))}function Fe(e,t){const a=e.datosGrafico.map(s=>s.observado),r=e.datosGrafico.map(s=>s.predicho),i=N([...a,...r]),n=W({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:i,rangoY:i,etiquetaX:"Valor predicho",etiquetaY:`Valor observado de ${t}`}),l=e.datosGrafico.map((s,o)=>`
        <circle
            cx="${n.x(s.predicho)}"
            cy="${n.y(s.observado)}"
            r="5.5"
            fill="#0f766e"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${o+1}: observado = ${E(s.observado)}; predicho = ${E(s.predicho)}</title>
        </circle>
    `).join("");return I("observado-predicho","Observado frente a predicho","Un ajuste adecuado concentra los puntos cerca de la línea diagonal de igualdad.",P(`
            ${n.contenido}
            <line
                x1="${n.x(i.minimo)}"
                y1="${n.y(i.minimo)}"
                x2="${n.x(i.maximo)}"
                y2="${n.y(i.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${l}
        `,"Gráfico de valores observados frente a valores predichos"))}function Se(e){const t=e.datosGrafico.map(s=>s.predicho),a=e.datosGrafico.map(s=>s.residuo),r=N(t),i=N([...a,0]),n=W({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:r,rangoY:i,etiquetaX:"Valor predicho",etiquetaY:"Residuo"}),l=e.datosGrafico.map((s,o)=>`
        <circle
            cx="${n.x(s.predicho)}"
            cy="${n.y(s.residuo)}"
            r="5"
            fill="${Math.abs(s.residuoEstandarizado)>2?"#dc2626":"#2563eb"}"
        >
            <title>Observación ${o+1}: residuo = ${E(s.residuo)}; residuo estandarizado = ${E(s.residuoEstandarizado)}</title>
        </circle>
    `).join("");return I("residuos-predichos","Residuos frente a valores predichos","Se espera una nube aproximadamente aleatoria alrededor de cero. Los puntos rojos tienen residuos estandarizados con magnitud mayor que 2.",P(`
            ${n.contenido}
            <line
                x1="${n.x(r.minimo)}"
                y1="${n.y(0)}"
                x2="${n.x(r.maximo)}"
                y2="${n.y(0)}"
                stroke="#0f172a"
                stroke-width="2"
                stroke-dasharray="7 5"
            />
            ${l}
        `,"Gráfico de residuos frente a valores predichos"))}function De(e){const t=e.residuos,a=t.length,r=Math.max(4,Math.ceil(Math.log2(a)+1)),i=Math.min(...t),c=Math.max(...t),l=Math.max(c-i,1e-9)/r,s=Array.from({length:r},(u,$)=>({inferior:i+$*l,superior:i+($+1)*l,frecuencia:0}));t.forEach(u=>{const $=Math.min(Math.floor((u-i)/l),r-1);s[$].frecuencia+=1});const o=Math.max(...s.map(u=>u.frecuencia),1),d=640,p=360,m={izquierdo:60,derecho:24,superior:24,inferior:68},v=d-m.izquierdo-m.derecho,h=p-m.superior-m.inferior,y=v/r,g=s.map((u,$)=>{const q=u.frecuencia/o*h,k=m.izquierdo+$*y,F=p-m.inferior-q;return`
            <rect
                x="${k+1}"
                y="${F}"
                width="${Math.max(y-2,1)}"
                height="${q}"
                fill="#7c3aed"
                opacity="0.86"
            >
                <title>[${E(u.inferior)}, ${E(u.superior)}]: ${u.frecuencia} observaciones</title>
            </rect>
            <text
                x="${k+y/2}"
                y="${p-m.inferior+18}"
                text-anchor="middle"
                font-size="9"
                fill="#64748b"
            >
                ${E(u.inferior,1)}
            </text>
        `}).join("");return I("histograma-residuos","Histograma de residuos","Permite examinar visualmente la simetría, concentración y posibles colas de la distribución residual.",P(`
            <line x1="${m.izquierdo}" y1="${m.superior}" x2="${m.izquierdo}" y2="${p-m.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${m.izquierdo}" y1="${p-m.inferior}" x2="${d-m.derecho}" y2="${p-m.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${g}
            <text x="${d/2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Residuo</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Frecuencia</text>
        `,"Histograma de los residuos"))}function Ve(e){const t=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],a=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],r=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],i=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],c=.02425,n=1-c;if(e<c){const o=Math.sqrt(-2*Math.log(e));return(((((r[0]*o+r[1])*o+r[2])*o+r[3])*o+r[4])*o+r[5])/((((i[0]*o+i[1])*o+i[2])*o+i[3])*o+1)}if(e>n){const o=Math.sqrt(-2*Math.log(1-e));return-(((((r[0]*o+r[1])*o+r[2])*o+r[3])*o+r[4])*o+r[5])/((((i[0]*o+i[1])*o+i[2])*o+i[3])*o+1)}const l=e-.5,s=l*l;return(((((t[0]*s+t[1])*s+t[2])*s+t[3])*s+t[4])*s+t[5])*l/(((((a[0]*s+a[1])*s+a[2])*s+a[3])*s+a[4])*s+1)}function Te(e){const t=[...e.diagnosticos.residuosEstandarizados].sort((l,s)=>l-s),a=t.map((l,s)=>Ve((s+.5)/t.length)),r=N([...t,...a]),c=W({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:r,rangoY:r,etiquetaX:"Cuantil normal teórico",etiquetaY:"Residuo estandarizado ordenado"}),n=t.map((l,s)=>`
        <circle
            cx="${c.x(a[s])}"
            cy="${c.y(l)}"
            r="4.5"
            fill="#0891b2"
        >
            <title>Cuantil teórico = ${E(a[s])}; residuo = ${E(l)}</title>
        </circle>
    `).join("");return I("qq-residuos","Gráfico Q–Q de residuos","La proximidad de los puntos a la diagonal ofrece una evaluación visual de la normalidad residual.",P(`
            ${c.contenido}
            <line
                x1="${c.x(r.minimo)}"
                y1="${c.y(r.minimo)}"
                x2="${c.x(r.maximo)}"
                y2="${c.y(r.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${n}
        `,"Gráfico cuantil cuantil de los residuos"))}function Ge(e){const t=e.diagnosticos.distanciaCook,a=4/e.n,r=Math.max(...t,a,1e-6),i=640,c=360,n={izquierdo:60,derecho:24,superior:24,inferior:58},s=(i-n.izquierdo-n.derecho)/t.length,o=se(0,r*1.1,c-n.inferior,n.superior),d=t.map((p,m)=>{const v=n.izquierdo+m*s,h=c-n.inferior-o(p);return`
            <rect
                x="${v+Math.max(s*.15,1)}"
                y="${o(p)}"
                width="${Math.max(s*.7,2)}"
                height="${Math.max(h,0)}"
                fill="${p>a?"#dc2626":"#f59e0b"}"
            >
                <title>Observación ${m+1}: distancia de Cook = ${E(p,4)}</title>
            </rect>
        `}).join("");return I("distancia-cook","Distancia de Cook",`El umbral orientativo mostrado es 4/n = ${E(a,4)}. Las barras rojas superan ese criterio y requieren revisión.`,P(`
            <line x1="${n.izquierdo}" y1="${n.superior}" x2="${n.izquierdo}" y2="${c-n.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${n.izquierdo}" y1="${c-n.inferior}" x2="${i-n.derecho}" y2="${c-n.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${n.izquierdo}" y1="${o(a)}" x2="${i-n.derecho}" y2="${o(a)}" stroke="#dc2626" stroke-width="2" stroke-dasharray="7 5" />
            ${d}
            <text x="${i/2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Número de observación</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Distancia de Cook</text>
        `,"Gráfico de distancia de Cook por observación"))}function Oe(e,t="Y"){return`
        <section class="mt-10" data-seccion-graficos-regresion="true">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Visualización estadística
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Ajuste y diagnóstico gráfico
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Examine simultáneamente la relación estimada, la precisión predictiva, la estructura de los residuos y la influencia de cada observación. Los gráficos son diagnósticos complementarios y deben interpretarse junto con los indicadores numéricos.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${[Pe(e,t),Fe(e,t),Se(e),De(e),Te(e),Ge(e)].filter(Boolean).join("")}
            </div>
        </section>
    `}function ot(){const e=document.createElement("section");let t=null,a=null;e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-sky-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-regresion"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a modelos de regresión
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-3">
                    Modelización y predicción
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión lineal y múltiple
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Estime relaciones lineales mediante mínimos cuadrados, evalúe la significación del modelo, examine sus supuestos y realice nuevas predicciones con una interpretación guiada.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Regresión simple</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Regresión múltiple</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Diagnósticos gráficos</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Predicción</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.70fr_1.30fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                    Preparación de datos
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Organice una observación por fila
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${_("Variable dependiente","La primera columna debe contener la variable que desea explicar o predecir.")}
                    ${_("Predictores","Coloque después una columna por cada variable explicativa. La regresión simple utiliza un predictor y la múltiple utiliza dos o más.")}
                    ${_("Encabezados","La primera fila puede contener nombres de variables. En ausencia de encabezados se asignarán Y, X1, X2, …")}
                    ${_("Separadores","Separe columnas con coma, punto y coma o tabulación. Para decimales utilice punto.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Antes de interpretar
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La regresión lineal supone relación aproximadamente lineal, independencia, varianza residual estable y ausencia de multicolinealidad severa. Los gráficos y diagnósticos del resultado ayudan a revisar estas condiciones.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Tipo de modelo
                        </span>
                        <select
                            name="tipoModelo"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="simple">Regresión lineal simple</option>
                            <option value="multiple">Regresión lineal múltiple</option>
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

                    <label class="flex items-end pb-3">
                        <span class="inline-flex items-center gap-3 text-sm font-black text-slate-800">
                            <input
                                type="checkbox"
                                name="incluirIntercepto"
                                checked
                                class="w-5 h-5 rounded border-slate-300 text-indigo-700 focus:ring-indigo-500"
                            />
                            Incluir intercepto
                        </span>
                    </label>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Datos por filas
                    </span>
                    <textarea
                        name="datos"
                        rows="14"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        placeholder="Rendimiento, Horas
55, 1
61, 2
64, 3"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Puede pegar datos desde Excel o Google Sheets utilizando tabulaciones.
                    </span>
                </label>

                <div class="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
                    <label class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-5 py-3 hover:bg-slate-50 transition-colors cursor-pointer">
                        <input
                            type="file"
                            name="archivoDatos"
                            accept=".csv,.txt,text/csv,text/plain"
                            class="hidden"
                        />
                        Importar CSV o TXT
                    </label>
                    <span data-nombre-archivo class="text-xs text-slate-500"></span>
                </div>

                <div
                    id="mensaje-error-regresion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-indigo-700 text-white font-black rounded-xl px-7 py-4 hover:bg-indigo-800 transition-colors shadow-lg"
                    >
                        Ajustar modelo
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-indigo-300 text-indigo-700 font-black rounded-xl px-6 py-4 hover:bg-indigo-50 transition-colors"
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
            id="resultados-regresion"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const r=e.querySelector("#formulario-regresion"),i=e.querySelector("#mensaje-error-regresion"),c=e.querySelector("#resultados-regresion"),n=e.querySelector("[data-nombre-archivo]");return r.elements.tipoModelo.addEventListener("change",()=>{re(r),c.classList.add("hidden"),D(i)}),r.elements.archivoDatos.addEventListener("change",async()=>{const l=r.elements.archivoDatos.files?.[0];if(l)try{r.elements.datos.value=await l.text(),n.textContent=`Archivo cargado: ${l.name}`,c.classList.add("hidden"),D(i)}catch{fe(i,"No fue posible leer el archivo seleccionado.")}}),r.addEventListener("submit",l=>{l.preventDefault(),D(i);try{const s=Xe(r);t=ve(s.solicitud),a=s.metadatos,c.innerHTML=Je(t,a),ze({contenedor:c,nombre:"regresion-lineal-multiple",datos:{solicitud:s.solicitud,metadatos:a,modelo:t}}),c.classList.remove("hidden"),c.scrollIntoView({behavior:"smooth",block:"start"})}catch(s){c.classList.add("hidden"),fe(i,s instanceof Error?s.message:"No fue posible ajustar el modelo.")}}),e.addEventListener("submit",l=>{if(l.target.id!=="formulario-prediccion-regresion")return;l.preventDefault();const s=e.querySelector("#resultado-prediccion-regresion");try{const o=[...l.target.querySelectorAll("[data-predictor]")].map(p=>p.value.trim()===""?NaN:Number(p.value)),d=Ie(t,o);s.innerHTML=`
                <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                        Predicción puntual
                    </p>
                    <p class="text-3xl font-black text-emerald-950">
                        ${M(a.nombreDependiente)} estimado = ${f(d,6)}
                    </p>
                    <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                        Esta es una estimación puntual basada en el modelo ajustado. Su uso fuera del rango observado de los predictores implica extrapolación y requiere especial cautela.
                    </p>
                </div>
            `}catch(o){s.innerHTML=`
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${M(o instanceof Error?o.message:"No fue posible calcular la predicción.")}
                </div>
            `}}),e.addEventListener("click",async l=>{const s=l.target.closest("[data-action]");if(!s)return;const o=s.dataset.action;if(o==="volver-regresion"){window.location.hash="/regresionModelos";return}if(o==="cargar-ejemplo"){_e(r),n.textContent="",c.classList.add("hidden"),D(i);return}if(o==="limpiar"){r.reset(),re(r),r.elements.datos.value="",n.textContent="",t=null,a=null,c.innerHTML="",c.classList.add("hidden"),D(i);return}if(!(!t||!a)){if(o==="exportar-csv"){at(t,a);return}if(o==="imprimir"){window.print();return}if(o==="copiar-reporte")try{await navigator.clipboard.writeText(et(t,a)),s.textContent="Reporte copiado",window.setTimeout(()=>{s.textContent="Copiar interpretación"},1800)}catch{s.textContent="No se pudo copiar"}}}),re(r),e}function _(e,t){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${t}</p>
        </div>
    `}function re(e){const t=e.elements.tipoModelo.value==="multiple";e.elements.datos.placeholder=t?`Rendimiento, Horas, Asistencia
65, 2, 70
72, 4, 78
80, 6, 85`:`Rendimiento, Horas
65, 2
72, 4
80, 6`}function Ye(e){return e.trim().split(/[,;\t]/).map(t=>t.trim())}function Xe(e){const t=e.elements.datos.value.trim();if(!t)throw new Error("Introduzca los datos antes de ajustar el modelo.");const a=t.split(/\r?\n+/).map(Ye).filter(s=>s.some(o=>o!==""));if(a.length<4)throw new Error("Se requieren al menos tres observaciones y, cuando se utilizan encabezados, una fila adicional para sus nombres.");const i=a[0].every(s=>s!==""&&Number.isFinite(Number(s)))?a[0].map((s,o)=>o===0?"Y":`X${o}`):a.shift().map((s,o)=>s||(o===0?"Y":`X${o}`)),c=i.length;if(c<2)throw new Error("Se requieren al menos dos columnas: la variable dependiente y un predictor.");if(!a.every(s=>s.length===c))throw new Error("Todas las filas deben contener la misma cantidad de columnas.");const n=a.map((s,o)=>s.map((d,p)=>{if(d==="")throw new Error(`La celda de la fila ${o+1}, columna ${p+1} está vacía.`);const m=Number(d);if(!Number.isFinite(m))throw new Error(`El valor de la fila ${o+1}, columna ${p+1} no es numérico.`);return m})),l=e.elements.tipoModelo.value;if(l==="simple"&&c!==2)throw new Error("La regresión lineal simple requiere exactamente dos columnas: Y y X.");if(l==="multiple"&&c<3)throw new Error("La regresión múltiple requiere la variable dependiente y al menos dos predictores.");return{solicitud:{y:n.map(s=>s[0]),X:Array.from({length:c-1},(s,o)=>n.map(d=>d[o+1])),nombresPredictores:i.slice(1),incluirIntercepto:e.elements.incluirIntercepto.checked,nivelConfianza:Number(e.elements.nivelConfianza.value)},metadatos:{nombreDependiente:i[0],nombresPredictores:i.slice(1),nivelConfianza:Number(e.elements.nivelConfianza.value),datosOriginales:n}}}function _e(e){const t=e.elements.tipoModelo.value==="multiple";e.elements.datos.value=t?`Rendimiento; Horas; Asistencia
58; 1; 62
63; 2; 68
67; 3; 70
71; 4; 74
74; 5; 79
79; 6; 82
83; 7; 86
86; 8; 90
89; 9; 92
93; 10; 96`:`Rendimiento; Horas
55; 1
61; 2
64; 3
70; 4
72; 5
78; 6
81; 7
87; 8
89; 9
94; 10`}function f(e,t=4){return e==null?"—":e===1/0?"∞":e===-1/0?"−∞":Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):"—"}function U(e){return e==null?"—":e<.001?"< 0.001":f(e,4)}function M(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function He(e,t){const a=[];return e.coeficientes.forEach((r,i)=>{const c=r.estimacion,n=f(Math.abs(c),6);if(i===0&&e.incluirIntercepto){a.push(f(c,6));return}const l=c>=0&&a.length?"+":"−",s=M(r.termino);a.length?a.push(`${l} ${n}·${s}`):a.push(`${c<0?"−":""}${n}·${s}`)}),`${M(t)}̂ = ${a.join(" ")}`}function R(e,t,a=""){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="uppercase tracking-widest text-slate-500 text-[11px] font-black mb-2">
                ${e}
            </p>
            <p class="text-3xl font-black text-slate-900">
                ${t}
            </p>
            ${a?`
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                    ${a}
                </p>
            `:""}
        </article>
    `}function Ue(e){const t=[],a=e.diagnosticos.vif.length?Math.max(...e.diagnosticos.vif.map(n=>n.vif)):null,r=e.diagnosticos.residuosEstandarizados.filter(n=>Math.abs(n)>2).length,i=e.diagnosticos.durbinWatson;a>=10?t.push({nivel:"alto",texto:"Se detectó multicolinealidad severa porque al menos un VIF es igual o superior a 10."}):a>=5&&t.push({nivel:"medio",texto:"Existe indicio de multicolinealidad moderada porque al menos un VIF es igual o superior a 5."}),e.diagnosticos.observacionesInfluyentes.length&&t.push({nivel:"medio",texto:`Se identificaron ${e.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`}),r&&t.push({nivel:"medio",texto:`${r} observaciones presentan residuos estandarizados con magnitud mayor que 2.`}),i!==null&&(i<1.5||i>2.5)&&t.push({nivel:"medio",texto:"El estadístico de Durbin–Watson se aleja del intervalo orientativo 1.5–2.5; revise la independencia serial de los residuos."}),e.n<20&&t.push({nivel:"informativo",texto:"El tamaño muestral es reducido; los intervalos, valores p y diagnósticos pueden ser sensibles a observaciones individuales."}),t.length||t.push({nivel:"favorable",texto:"Los criterios automáticos no muestran alertas importantes; confirme esta lectura mediante los gráficos y el contexto de la investigación."});const c={alto:"border-red-200 bg-red-50 text-red-950",medio:"border-amber-200 bg-amber-50 text-amber-950",informativo:"border-sky-200 bg-sky-50 text-sky-950",favorable:"border-emerald-200 bg-emerald-50 text-emerald-950"};return`
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${t.map(n=>`
                <div class="rounded-2xl border p-5 ${c[n.nivel]}">
                    <p class="font-bold leading-relaxed">
                        ${M(n.texto)}
                    </p>
                </div>
            `).join("")}
        </div>
    `}function We(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Coeficientes e inferencia del modelo de regresión lineal
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Término</th>
                        <th scope="col" class="px-4 py-3 text-right">Coeficiente</th>
                        <th scope="col" class="px-4 py-3 text-right">Error estándar</th>
                        <th scope="col" class="px-4 py-3 text-right">t</th>
                        <th scope="col" class="px-4 py-3 text-right">p</th>
                        <th scope="col" class="px-4 py-3 text-right">IC inferior</th>
                        <th scope="col" class="px-4 py-3 text-right">IC superior</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.coeficientes.map(t=>`
                        <tr>
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${M(t.termino)}</th>
                            <td class="px-4 py-3 text-right">${f(t.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${f(t.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${f(t.t,4)}</td>
                            <td class="px-4 py-3 text-right font-black ${t.p<(e.alfa??.05)?"text-emerald-700":"text-slate-700"}">${U(t.p)}</td>
                            <td class="px-4 py-3 text-right">${f(t.intervaloConfianza.inferior,6)}</td>
                            <td class="px-4 py-3 text-right">${f(t.intervaloConfianza.superior,6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Be(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Análisis de varianza del modelo de regresión lineal
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Fuente</th>
                        <th scope="col" class="px-4 py-3 text-right">Suma de cuadrados</th>
                        <th scope="col" class="px-4 py-3 text-right">gl</th>
                        <th scope="col" class="px-4 py-3 text-right">Media cuadrática</th>
                        <th scope="col" class="px-4 py-3 text-right">F</th>
                        <th scope="col" class="px-4 py-3 text-right">p</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[{fuente:"Modelo",sc:e.anova.sumaCuadradosModelo,gl:e.anova.gradosLibertadModelo,mc:e.anova.mediaCuadraticaModelo,f:e.anova.f,p:e.anova.p},{fuente:"Error",sc:e.anova.sumaCuadradosError,gl:e.anova.gradosLibertadError,mc:e.anova.mediaCuadraticaError,f:null,p:null},{fuente:"Total",sc:e.anova.sumaCuadradosTotal,gl:e.anova.gradosLibertadTotal,mc:null,f:null,p:null}].map(a=>`
                        <tr>
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${a.fuente}</th>
                            <td class="px-4 py-3 text-right">${f(a.sc,6)}</td>
                            <td class="px-4 py-3 text-right">${f(a.gl,0)}</td>
                            <td class="px-4 py-3 text-right">${f(a.mc,6)}</td>
                            <td class="px-4 py-3 text-right">${f(a.f,4)}</td>
                            <td class="px-4 py-3 text-right font-black">${U(a.p)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Qe(e){return e.diagnosticos.vif.length?`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Diagnóstico de multicolinealidad mediante tolerancia y VIF
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Predictor</th>
                        <th scope="col" class="px-4 py-3 text-right">Tolerancia</th>
                        <th scope="col" class="px-4 py-3 text-right">VIF</th>
                        <th scope="col" class="px-4 py-3 text-left">Lectura</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.diagnosticos.vif.map(t=>{const a=t.vif>=10?"Severa":t.vif>=5?"Moderada":"Sin evidencia relevante";return`
                            <tr>
                                <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${M(t.variable)}</th>
                                <td class="px-4 py-3 text-right">${f(t.tolerancia,4)}</td>
                                <td class="px-4 py-3 text-right font-black">${f(t.vif,4)}</td>
                                <td class="px-4 py-3">${a}</td>
                            </tr>
                        `}).join("")}
                </tbody>
            </table>
        </div>
    `:`
            <p class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                El VIF no aplica cuando el modelo contiene un solo predictor.
            </p>
        `}function Ke(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[440px]">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Diagnósticos de residuos e influencia por observación
                </caption>
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-right">Obs.</th>
                        <th scope="col" class="px-4 py-3 text-right">Observado</th>
                        <th scope="col" class="px-4 py-3 text-right">Predicho</th>
                        <th scope="col" class="px-4 py-3 text-right">Residuo</th>
                        <th scope="col" class="px-4 py-3 text-right">Residuo est.</th>
                        <th scope="col" class="px-4 py-3 text-right">Leverage</th>
                        <th scope="col" class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.datosGrafico.map(t=>`
                            <tr class="${Math.abs(t.residuoEstandarizado)>2||t.distanciaCook>4/e.n?"bg-red-50":""}">
                                <th scope="row" class="px-4 py-3 text-right font-black">${t.observacion}</th>
                                <td class="px-4 py-3 text-right">${f(t.observado,6)}</td>
                                <td class="px-4 py-3 text-right">${f(t.predicho,6)}</td>
                                <td class="px-4 py-3 text-right">${f(t.residuo,6)}</td>
                                <td class="px-4 py-3 text-right">${f(t.residuoEstandarizado,4)}</td>
                                <td class="px-4 py-3 text-right">${f(t.leverage,4)}</td>
                                <td class="px-4 py-3 text-right">${f(t.distanciaCook,5)}</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ze(e,t){return`
        <form id="formulario-prediccion-regresion" class="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Aplicación del modelo
            </p>
            <h2 class="text-2xl md:text-3xl font-black text-indigo-950 mb-3">
                Realizar una nueva predicción
            </h2>
            <p class="text-indigo-900 leading-relaxed mb-6 max-w-4xl">
                Introduzca un valor para cada predictor. Antes de usar el resultado, compruebe que los valores se encuentren dentro o cerca del rango estudiado.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${e.nombresPredictores.map((a,r)=>`
                    <label class="block">
                        <span class="block text-sm font-black text-indigo-950 mb-2">
                            ${M(a)}
                        </span>
                        <input
                            type="number"
                            step="any"
                            required
                            data-predictor="${r}"
                            class="w-full rounded-xl border border-indigo-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                            placeholder="Valor de ${M(a)}"
                        />
                    </label>
                `).join("")}
            </div>

            <button
                type="submit"
                class="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-700 px-7 py-4 text-white font-black hover:bg-indigo-800 transition-colors shadow-lg"
            >
                Calcular predicción
            </button>

            <div id="resultado-prediccion-regresion" class="mt-5" aria-live="polite"></div>
        </form>
    `}function Je(e,t){const a=e.anova.p!==null&&e.anova.p<(e.alfa??.05),r=f(e.ajuste.r2*100,2);return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-sky-300 text-xs font-black mb-2">
                        Modelo estimado
                    </p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">
                        ${e.tipoModelo==="regresion-lineal-simple"?"Regresión lineal simple":"Regresión lineal múltiple"}
                    </h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        El modelo utiliza ${e.n} observaciones y ${e.numeroPredictores} predictor${e.numeroPredictores===1?"":"es"}. Explica ${r} % de la variabilidad observada.
                    </p>
                </div>

                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${a?"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":"bg-amber-500/20 text-amber-200 border border-amber-400/30"}">
                    ${a?"Modelo global significativo":`Modelo global no significativo con α = ${(e.alfa??.05).toFixed(3)}`}
                </span>
            </div>

            <div class="mt-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-5 font-mono text-lg md:text-xl overflow-x-auto">
                ${He(e,t.nombreDependiente)}
            </div>

            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100 transition-colors">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            ${R("R²",f(e.ajuste.r2,4),"Proporción explicada por el modelo")}
            ${R("R² ajustado",f(e.ajuste.r2Ajustado,4),"Ajustado por cantidad de predictores")}
            ${R("RMSE",f(e.ajuste.rmse,4),"Error cuadrático medio en unidades de Y")}
            ${R("MAE",f(e.ajuste.mae,4),"Error absoluto medio")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${Ue(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Inferencia individual</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes del modelo</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Cada prueba t contrasta si el coeficiente correspondiente difiere de cero, manteniendo constantes los demás predictores.</p>
            ${We(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Prueba global</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">ANOVA de la regresión</h2>
            <p class="text-slate-600 leading-relaxed mb-6">La prueba F evalúa si el conjunto de predictores mejora la explicación de la variable dependiente frente a un modelo sin capacidad explicativa.</p>
            ${Be(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y factor de inflación de la varianza</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Como orientación, VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${Qe(e)}
        </section>

        <section class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            ${R("Durbin–Watson",f(e.diagnosticos.durbinWatson,4),"Valores cercanos a 2 son compatibles con ausencia de autocorrelación de primer orden")}
            ${R("Observaciones influyentes",f(e.diagnosticos.observacionesInfluyentes.length,0),"Criterios combinados de Cook, leverage y residuo estandarizado")}
            ${R("Error estándar",f(e.ajuste.errorEstandarEstimacion,4),"Desviación típica estimada de los residuos")}
        </section>

        ${Oe(e,t.nombreDependiente)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Valores ajustados y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo estandarizado elevado o distancia de Cook superior a 4/n.</p>
            ${Ke(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del análisis</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(i=>`
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${M(i)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8">
            ${Ze(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                Un valor p significativo o un R² elevado no demuestran causalidad ni garantizan utilidad predictiva externa. La validez del modelo depende del diseño de la investigación, la calidad de los datos, el cumplimiento razonable de los supuestos, la ausencia de sesgos importantes y la validación con información independiente cuando el objetivo sea predecir.
            </p>
        </section>
    `}function et(e,t){const a=["REGRESIÓN LINEAL Y MÚLTIPLE — LABORATORIO KERNEL","",`Variable dependiente: ${t.nombreDependiente}`,`Predictores: ${e.nombresPredictores.join(", ")}`,`n = ${e.n}`,`R² = ${f(e.ajuste.r2,4)}`,`R² ajustado = ${f(e.ajuste.r2Ajustado,4)}`,`F = ${f(e.anova.f,4)}`,`p del modelo = ${U(e.anova.p)}`,`RMSE = ${f(e.ajuste.rmse,4)}`,`Durbin–Watson = ${f(e.diagnosticos.durbinWatson,4)}`,"","Coeficientes:"];return e.coeficientes.forEach(r=>{a.push(`${r.termino}: b = ${f(r.estimacion,6)}, t = ${f(r.t,4)}, p ${U(r.p)}`)}),a.push("","Interpretación:"),e.interpretacion.forEach(r=>a.push(`- ${r}`)),a.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),a.join(`
`)}function tt(e){return`"${String(e??"").replaceAll('"','""')}"`}function at(e,t){const r=[["REGRESIÓN LINEAL Y MÚLTIPLE"],["Variable dependiente",t.nombreDependiente],["Predictores",e.nombresPredictores.join(", ")],["n",e.n],["R2",e.ajuste.r2],["R2 ajustado",e.ajuste.r2Ajustado],["RMSE",e.ajuste.rmse],["MAE",e.ajuste.mae],["F",e.anova.f],["p del modelo",e.anova.p],["Durbin-Watson",e.diagnosticos.durbinWatson],[],["Término","Coeficiente","Error estándar","t","p","IC inferior","IC superior"],...e.coeficientes.map(n=>[n.termino,n.estimacion,n.errorEstandar,n.t,n.p,n.intervaloConfianza.inferior,n.intervaloConfianza.superior]),[],["Observación","Observado","Predicho","Residuo","Residuo estandarizado","Leverage","Distancia de Cook"],...e.datosGrafico.map(n=>[n.observacion,n.observado,n.predicho,n.residuo,n.residuoEstandarizado,n.leverage,n.distanciaCook]),[],["Diseño y desarrollo","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(n=>n.map(tt).join(";")).join(`\r
`),i=new Blob([`\uFEFF${r}`],{type:"text/csv;charset=utf-8"}),c=document.createElement("a");c.href=URL.createObjectURL(i),c.download="regresion-lineal-multiple-kernel.csv",document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(c.href)}function fe(e,t){e.textContent=t,e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"center"})}function D(e){e.textContent="",e.classList.add("hidden")}export{ot as CalculadoraRegresionCompleta};
