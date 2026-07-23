import{p as ge}from"./exportacionesCalculadoras-C-2g2EIK.js";import"./index-D9akd3km.js";const k=1e-12,j=35;function oe(e,t,o=5){if(!Array.isArray(t)||t.length<o)throw new Error(`${e} debe contener al menos ${o} observaciones.`);const a=t.map(s=>s==null||typeof s=="string"&&s.trim()===""?NaN:Number(s));if(!a.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return a}function ve(e){return Array.from({length:e},(t,o)=>Array.from({length:e},(a,s)=>o===s?1:0))}function $e(e){return e[0].map((t,o)=>e.map(a=>a[o]))}function ye(e,t){return e.map(o=>t[0].map((a,s)=>o.reduce((l,i,c)=>l+i*t[c][s],0)))}function q(e,t){return e.map(o=>o.reduce((a,s,l)=>a+s*t[l],0))}function O(e,t){return e.reduce((o,a,s)=>o+a*t[s],0)}function K(e){const t=e.length,o=e.map((a,s)=>[...a.map(Number),...ve(t)[s]]);for(let a=0;a<t;a+=1){let s=a;for(let i=a+1;i<t;i+=1)Math.abs(o[i][a])>Math.abs(o[s][a])&&(s=i);if(Math.abs(o[s][a])<k)throw new Error("La matriz de información es singular. Elimine predictores redundantes o perfectamente colineales.");[o[a],o[s]]=[o[s],o[a]];const l=o[a][a];o[a]=o[a].map(i=>i/l);for(let i=0;i<t;i+=1){if(i===a)continue;const c=o[i][a];o[i]=o[i].map((r,n)=>r-c*o[a][n])}}return o.map(a=>a.slice(t))}function re(e,t){const o=e[0].length;return Array.from({length:o},(a,s)=>[...t?[1]:[],...e.map(l=>l[s])])}function T(e){const t=Math.max(-j,Math.min(j,e));if(t>=0)return 1/(1+Math.exp(-t));const o=Math.exp(t);return o/(1+o)}function S(e,t){return e.reduce((o,a,s)=>{const l=Math.max(k,Math.min(1-k,t[s]));return o+a*Math.log(l)+(1-a)*Math.log(1-l)},0)}function we(e){const t=e<0?-1:1,o=Math.abs(e)/Math.sqrt(2),a=1/(1+.3275911*o),n=1-((((1.061405429*a+-1.453152027)*a+1.421413741)*a+-.284496736)*a+.254829592)*a*Math.exp(-o*o);return .5*(1+t*n)}function ke(e){return Math.max(0,Math.min(1,2*(1-we(Math.abs(e)))))}function W(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-W(1-e);let o=.9999999999998099;const a=e-1;t.forEach((l,i)=>{o+=l/(a+i+1)});const s=a+t.length-.5;return .5*Math.log(2*Math.PI)+(a+.5)*Math.log(s)-s+Math.log(o)}function Me(e,t){if(t<=0)return 0;if(t<e+1){let c=1/e,r=c,n=e;for(let d=1;d<=300&&(n+=1,c*=t/n,r+=c,!(Math.abs(c)<Math.abs(r)*1e-14));d+=1);return r*Math.exp(-t+e*Math.log(t)-W(e))}let o=t+1-e,a=1/1e-300,s=1/o,l=s;for(let c=1;c<=300;c+=1){const r=-c*(c-e);o+=2,s=r*s+o,Math.abs(s)<1e-300&&(s=1e-300),a=o+r/a,Math.abs(a)<1e-300&&(a=1e-300),s=1/s;const n=s*a;if(l*=n,Math.abs(n-1)<1e-14)break}return 1-Math.exp(-t+e*Math.log(t)-W(e))*l}function ne(e,t){return!(e>=0)||!(t>0)?null:Math.max(0,Math.min(1,1-Me(t/2,e/2)))}function Ce(e){const t=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],o=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],a=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],s=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],l=.02425,i=1-l;if(e<=0||e>=1)throw new Error("La probabilidad debe estar entre 0 y 1.");if(e<l){const n=Math.sqrt(-2*Math.log(e));return(((((a[0]*n+a[1])*n+a[2])*n+a[3])*n+a[4])*n+a[5])/((((s[0]*n+s[1])*n+s[2])*n+s[3])*n+1)}if(e>i){const n=Math.sqrt(-2*Math.log(1-e));return-(((((a[0]*n+a[1])*n+a[2])*n+a[3])*n+a[4])*n+a[5])/((((s[0]*n+s[1])*n+s[2])*n+s[3])*n+1)}const c=e-.5,r=c*c;return(((((t[0]*r+t[1])*r+t[2])*r+t[3])*r+t[4])*r+t[5])*c/(((((o[0]*r+o[1])*r+o[2])*r+o[3])*r+o[4])*r+1)}function se(e,t){const o=e[0].length,a=Array.from({length:o},()=>Array(o).fill(0));return e.forEach((s,l)=>{const i=Math.max(t[l]*(1-t[l]),k);for(let c=0;c<o;c+=1)for(let r=0;r<o;r+=1)a[c][r]+=i*s[c]*s[r]}),a}function Ee(e,t,o={}){const a=o.maxIteraciones??100,s=o.tolerancia??1e-8,l=e[0].length;let i=Array(l).fill(0),c=e.map(()=>.5),r=S(t,c),n=!1,d=0;for(let v=1;v<=a;v+=1){d=v,c=e.map(w=>T(O(w,i)));const x=se(e,c),g=K(x),u=Array(l).fill(0);e.forEach((w,E)=>{const D=t[E]-c[E];w.forEach((P,R)=>{u[R]+=P*D})});const $=q(g,u);let y=1,L=i.map((w,E)=>w+$[E]),C=e.map(w=>T(O(w,L))),I=S(t,C);for(;I<r-1e-10&&y>1/1024;)y/=2,L=i.map((w,E)=>w+y*$[E]),C=e.map(w=>T(O(w,L))),I=S(t,C);const A=Math.max(...L.map((w,E)=>Math.abs(w-i[E]))),_=Math.abs(I-r);if(i=L,c=C,r=I,A<s&&_<s){n=!0;break}if(i.some(w=>Math.abs(w)>100))break}const p=se(e,c),b=K(p);if(!i.every(Number.isFinite)||!c.every(Number.isFinite)||!b.flat().every(Number.isFinite)||!Number.isFinite(r))throw new Error("El ajuste produjo resultados no finitos. Revise valores extremos, escala de los predictores y separación.");return{beta:i,probabilidades:c,logLik:r,covarianza:b,informacion:p,convergio:n,iteraciones:d}}function Le(e,t){if(!t){const l=e.map(()=>.5);return{probabilidades:l,logLik:S(e,l)}}const o=e.reduce((l,i)=>l+i,0)/e.length,a=Math.max(k,Math.min(1-k,o)),s=e.map(()=>a);return{probabilidades:s,logLik:S(e,s)}}function Re(e,t,o){let a=0,s=0,l=0,i=0;e.forEach((x,g)=>{const u=t[g]>=o?1:0;x===1&&u===1&&(a+=1),x===0&&u===0&&(s+=1),x===0&&u===1&&(l+=1),x===1&&u===0&&(i+=1)});const c=e.length,r=(x,g)=>g>0?x/g:null,n=r(a,a+i),d=r(s,s+l),p=r(a,a+l),b=r(s,s+i),v=p!==null&&n!==null&&p+n>0?2*p*n/(p+n):null;return{umbral:o,verdaderosPositivos:a,verdaderosNegativos:s,falsosPositivos:l,falsosNegativos:i,exactitud:(a+s)/c,sensibilidad:n,especificidad:d,precision:p,valorPredictivoNegativo:b,f1:v,exactitudBalanceada:n!==null&&d!==null?(n+d)/2:null}}function Pe(e,t){const o=e.map((r,n)=>({observado:r,probabilidad:t[n]})).sort((r,n)=>n.probabilidad-r.probabilidad),a=e.reduce((r,n)=>r+n,0),s=e.length-a,i=[1/0,...new Set(o.map(r=>r.probabilidad)),-1/0].map(r=>{let n=0,d=0;return o.forEach(p=>{const b=p.probabilidad>=r;b&&p.observado===1&&(n+=1),b&&p.observado===0&&(d+=1)}),{umbral:Number.isFinite(r)?r:null,sensibilidad:a>0?n/a:0,unoMenosEspecificidad:s>0?d/s:0}}).sort((r,n)=>r.unoMenosEspecificidad-n.unoMenosEspecificidad||r.sensibilidad-n.sensibilidad);let c=0;for(let r=1;r<i.length;r+=1){const n=i[r].unoMenosEspecificidad-i[r-1].unoMenosEspecificidad,d=(i[r].sensibilidad+i[r-1].sensibilidad)/2;c+=n*d}return{puntos:i,auc:Math.max(0,Math.min(1,c))}}function je(e,t){const o=e.map((c,r)=>({observado:c,probabilidad:t[r]})).sort((c,r)=>c.probabilidad-r.probabilidad),a=Math.min(10,Math.max(3,Math.floor(e.length/5))),s=[];for(let c=0;c<a;c+=1){const r=Math.floor(c*o.length/a),n=Math.floor((c+1)*o.length/a),d=o.slice(r,n);if(!d.length)continue;const p=d.reduce((g,u)=>g+u.observado,0),b=d.reduce((g,u)=>g+u.probabilidad,0),v=d.length-p,x=d.length-b;s.push({grupo:s.length+1,n:d.length,probabilidadMedia:d.reduce((g,u)=>g+u.probabilidad,0)/d.length,observadosPositivos:p,esperadosPositivos:b,observadosNegativos:v,esperadosNegativos:x})}const l=s.reduce((c,r)=>{const n=r.esperadosPositivos>k?(r.observadosPositivos-r.esperadosPositivos)**2/r.esperadosPositivos:0,d=r.esperadosNegativos>k?(r.observadosNegativos-r.esperadosNegativos)**2/r.esperadosNegativos:0;return c+n+d},0),i=Math.max(s.length-2,1);return{estadistico:l,gradosLibertad:i,p:ne(l,i),grupos:s}}function Ne(e,t,o,a){const s=e[0].length,l=e.map((n,d)=>{const p=q(a,n);return o[d]*(1-o[d])*O(n,p)}),i=t.map((n,d)=>{const p=Math.max(o[d]*(1-o[d]),k);return(n-o[d])/Math.sqrt(p)}),c=t.map((n,d)=>{const p=Math.max(k,Math.min(1-k,o[d])),b=n===1?2*Math.log(1/p):2*Math.log(1/(1-p));return Math.sign(n-p)*Math.sqrt(Math.max(b,0))}),r=i.map((n,d)=>{const p=Math.min(l[d],1-k);return n**2*p/(s*Math.max((1-p)**2,k))});return{leverage:l,residuosPearson:i,residuosDeviance:c,distanciaCook:r}}function Ie(e,t){return e.length<2?[]:e.map((o,a)=>{const s=e.filter((r,n)=>n!==a),l=re(s,!0),i=$e(l),c=ye(i,l);try{const r=K(c),n=q(i,o),d=q(r,n),p=q(l,d),b=o.reduce(($,y)=>$+y,0)/o.length,v=o.reduce(($,y)=>$+(y-b)**2,0),x=o.reduce(($,y,L)=>$+(y-p[L])**2,0),g=v>k?Math.max(0,1-x/v):1,u=Math.max(1-g,k);return{variable:t[a],tolerancia:u,vif:1/u}}catch{return{variable:t[a],tolerancia:0,vif:1/0}}})}function ze({y:e,X:t,nombresPredictores:o=[],incluirIntercepto:a=!0,nivelConfianza:s=.95,umbral:l=.5,maxIteraciones:i=100,tolerancia:c=1e-8}){const r=oe("La variable dependiente",e,8);if(!r.every(f=>f===0||f===1))throw new Error("La variable dependiente debe estar codificada exclusivamente con 0 y 1.");const n=r.reduce((f,h)=>f+h,0),d=r.length-n;if(n===0||d===0)throw new Error("La variable dependiente debe contener observaciones de ambas categorías: 0 y 1.");if(!Array.isArray(t)||!t.length)throw new Error("Debe proporcionar al menos una variable predictora.");const p=t.map((f,h)=>oe(o[h]||`X${h+1}`,f,8));if(!p.every(f=>f.length===r.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(s>0&&s<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");if(!(l>0&&l<1))throw new Error("El umbral de clasificación debe estar entre 0 y 1.");const b=p.map((f,h)=>o[h]||`X${h+1}`),v=re(p,a),x=r.length,g=v[0].length;if(x<=g+2)throw new Error("No hay suficientes observaciones para estimar el modelo logístico con esta cantidad de predictores.");const u=Ee(v,r,{maxIteraciones:i,tolerancia:c});if(!u.convergio)throw new Error("El algoritmo no alcanzó convergencia. Revise separación perfecta, predictores extremos, colinealidad o tamaño muestral insuficiente.");const $=Le(r,a),y=p.length,L=Math.max(0,2*(u.logLik-$.logLik)),C=ne(L,y),I=Ce(.5+s/2),A=1-s,_=[...a?["Intercepto"]:[],...b],w=u.beta.map((f,h)=>{const z=Math.sqrt(Math.max(u.covarianza[h][h],0)),ee=z>k?f/z:f===0?0:1/0,he=ke(ee),te=f-I*z,ae=f+I*z;return{termino:_[h],estimacion:f,errorEstandar:z,z:ee,p:he,intervaloConfianza:{inferior:te,superior:ae,nivel:s},oddsRatio:Math.exp(Math.max(-j,Math.min(j,f))),intervaloOddsRatio:{inferior:Math.exp(Math.max(-j,Math.min(j,te))),superior:Math.exp(Math.max(-j,Math.min(j,ae))),nivel:s}}}),E=Re(r,u.probabilidades,l),D=Pe(r,u.probabilidades),P=je(r,u.probabilidades),R=Ne(v,r,u.probabilidades,u.covarianza),V=Ie(p,b),Y=r.map((f,h)=>({observacion:h+1,observado:f,probabilidad:u.probabilidades[h],residuoPearson:R.residuosPearson[h],residuoDeviance:R.residuosDeviance[h],leverage:R.leverage[h],distanciaCook:R.distanciaCook[h]})).filter(f=>Math.abs(f.residuoPearson)>2||f.leverage>2*g/x||f.distanciaCook>4/x),ce=-2*u.logLik,le=-2*$.logLik,de=-2*u.logLik+2*g,pe=-2*u.logLik+g*Math.log(x),ue=$.logLik!==0?1-u.logLik/$.logLik:null,J=1-Math.exp(2/x*($.logLik-u.logLik)),Q=1-Math.exp(2/x*$.logLik),be=Q>k?J/Q:null,xe=E.exactitud===1,me=u.beta.some(f=>Math.abs(f)>15),X=xe&&me,fe=[C!==null&&C<A?`El modelo global mejora significativamente al modelo nulo (χ² = ${L.toFixed(4)}, gl = ${y}, p ${C<.001?"< 0.001":`= ${C.toFixed(4)}`}).`:`El modelo global no alcanza significación estadística con α = ${A.toFixed(3)} (χ² = ${L.toFixed(4)}, gl = ${y}, p = ${C?.toFixed(4)??"no disponible"}).`,`El área bajo la curva ROC es ${D.auc.toFixed(4)}, lo que resume la capacidad del modelo para ordenar casos positivos por encima de casos negativos.`,`Con umbral ${l.toFixed(2)}, la exactitud es ${(E.exactitud*100).toFixed(2)} %, la sensibilidad es ${E.sensibilidad===null?"no calculable":`${(E.sensibilidad*100).toFixed(2)} %`} y la especificidad es ${E.especificidad===null?"no calculable":`${(E.especificidad*100).toFixed(2)} %`}.`,P.p!==null&&P.p>=A?`La prueba de Hosmer–Lemeshow no detecta una discrepancia significativa entre probabilidades observadas y esperadas (p = ${P.p.toFixed(4)}).`:`La prueba de Hosmer–Lemeshow sugiere revisar la calibración del modelo (p ${P.p!==null&&P.p<.001?"< 0.001":`= ${P.p?.toFixed(4)??"no disponible"}`}).`,V.some(f=>f.vif>=10)?"Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10).":V.some(f=>f.vif>=5)?"Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5).":V.length?"No se detectó multicolinealidad relevante mediante el criterio VIF.":"El VIF no aplica a un modelo con un solo predictor.",Y.length?`Se identificaron ${Y.length} observaciones potencialmente influyentes que deben revisarse.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos.",X?"La clasificación perfecta junto con coeficientes extremos sugiere posible separación completa o cuasicompleta; los coeficientes pueden ser inestables.":"No se detectó el patrón automático de separación completa basado en clasificación perfecta y coeficientes extremos."];return{tipoModelo:"regresion-logistica-binaria",n:x,numeroPredictores:p.length,incluirIntercepto:a,nombresPredictores:b,nivelConfianza:s,alfa:A,convergencia:{convergio:u.convergio,iteraciones:u.iteraciones,posibleSeparacion:X},distribucionRespuesta:{positivos:n,negativos:d,proporcionPositivos:n/x},coeficientes:w,ajuste:{logVerosimilitud:u.logLik,logVerosimilitudNula:$.logLik,deviance:ce,devianceNula:le,aic:de,bic:pe,r2McFadden:ue,r2CoxSnell:J,r2Nagelkerke:be},pruebaGlobal:{chiCuadrado:L,gradosLibertad:y,p:C},clasificacion:E,roc:D,calibracion:P,diagnosticos:{...R,vif:V,observacionesInfluyentes:Y},probabilidades:u.probabilidades,datosGrafico:r.map((f,h)=>({observacion:h+1,observado:f,probabilidad:u.probabilidades[h],clasePredicha:u.probabilidades[h]>=l?1:0,residuoPearson:R.residuosPearson[h],residuoDeviance:R.residuosDeviance[h],leverage:R.leverage[h],distanciaCook:R.distanciaCook[h],predictores:p.map(z=>z[h])})),interpretacion:fe}}function Ae(e,t,o=e?.clasificacion?.umbral??.5){if(!e?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(t)||t.length!==e.numeroPredictores)throw new Error(`Debe proporcionar ${e.numeroPredictores} valores predictores.`);if(!(o>0&&o<1))throw new Error("El umbral de clasificación debe estar entre 0 y 1.");const a=t.map(r=>r==null||typeof r=="string"&&r.trim()===""?NaN:Number(r));if(!a.every(Number.isFinite))throw new Error("Los valores predictores deben ser numéricos.");const s=e.coeficientes.map(r=>r.estimacion),l=[...e.incluirIntercepto?[1]:[],...a],i=O(l,s),c=T(i);return{predictorLineal:i,probabilidad:c,umbral:o,clasePredicha:c>=o?1:0}}function Z(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function M(e,t=3){return e==null?"—":Number.isFinite(e)?Number(e).toLocaleString("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}):e>0?"∞":"—"}function F(e,t,o,a,s=""){return`
        <article
            data-grafico-exportable="true"
            data-grafico-id="${e}"
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg overflow-hidden ${s}"
        >
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                ${t}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${o}
            </p>
            ${a}
        </article>
    `}function Fe(e){const a={izquierda:62,derecha:24,superior:26,inferior:58},s=560-a.izquierda-a.derecha,l=390-a.superior-a.inferior,i=d=>a.izquierda+d*s,c=d=>a.superior+(1-d)*l,r=e.roc.puntos.map(d=>`${i(d.unoMenosEspecificidad)},${c(d.sensibilidad)}`).join(" "),n=`
        <div class="overflow-x-auto">
            <svg
                viewBox="0 0 560 390"
                class="min-w-[520px] w-full"
                role="img"
                aria-label="Curva ROC con área bajo la curva ${M(e.roc.auc,4)}"
            >
                <line x1="${i(0)}" y1="${c(0)}" x2="${i(1)}" y2="${c(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${i(0)}" y1="${c(0)}" x2="${i(0)}" y2="${c(1)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${i(0)}" y1="${c(0)}" x2="${i(1)}" y2="${c(1)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7" class="text-slate-300" />

                ${[0,.25,.5,.75,1].map(d=>`
                    <line x1="${i(d)}" y1="${c(0)}" x2="${i(d)}" y2="${c(1)}" stroke="currentColor" stroke-width="1" class="text-slate-100" />
                    <line x1="${i(0)}" y1="${c(d)}" x2="${i(1)}" y2="${c(d)}" stroke="currentColor" stroke-width="1" class="text-slate-100" />
                    <text x="${i(d)}" y="358" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${d}</text>
                    <text x="${a.izquierda-14}" y="${c(d)+4}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${d}</text>
                `).join("")}

                <polyline
                    points="${r}"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-indigo-700"
                />

                <text x="${a.izquierda+s/2}" y="382" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">
                    1 − especificidad
                </text>
                <text x="16" y="${a.superior+l/2}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700" transform="rotate(-90 16 ${a.superior+l/2})">
                    Sensibilidad
                </text>
            </svg>
        </div>
        <div class="mt-4 rounded-2xl bg-indigo-50 border border-indigo-100 px-5 py-4 text-indigo-950">
            <span class="font-black">AUC = ${M(e.roc.auc,4)}</span>
            <span class="text-sm ml-2">Cuanto más se aproxima a 1, mayor es la capacidad discriminativa.</span>
        </div>
    `;return F("curva-roc","Curva ROC","Relaciona sensibilidad y tasa de falsos positivos para todos los umbrales posibles. La diagonal representa una clasificación sin capacidad discriminativa.",n)}function qe(e){const t=e.clasificacion,o=(s,l,i)=>`
        <div class="rounded-2xl border p-5 text-center ${i}">
            <span class="block text-xs uppercase tracking-widest font-black mb-2">
                ${s}
            </span>
            <strong class="block text-4xl font-black">${l}</strong>
        </div>
    `,a=`
        <div class="grid grid-cols-[auto_1fr_1fr] gap-3 items-stretch">
            <div></div>
            <div class="text-center text-sm font-black text-slate-700 px-2 py-2">Predicho 0</div>
            <div class="text-center text-sm font-black text-slate-700 px-2 py-2">Predicho 1</div>

            <div class="flex items-center justify-center text-sm font-black text-slate-700 [writing-mode:vertical-rl] rotate-180">Observado 0</div>
            ${o("Verdadero negativo",t.verdaderosNegativos,"border-emerald-200 bg-emerald-50 text-emerald-950")}
            ${o("Falso positivo",t.falsosPositivos,"border-amber-200 bg-amber-50 text-amber-950")}

            <div class="flex items-center justify-center text-sm font-black text-slate-700 [writing-mode:vertical-rl] rotate-180">Observado 1</div>
            ${o("Falso negativo",t.falsosNegativos,"border-red-200 bg-red-50 text-red-950")}
            ${o("Verdadero positivo",t.verdaderosPositivos,"border-indigo-200 bg-indigo-50 text-indigo-950")}
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5 text-center">
            ${[["Exactitud",t.exactitud],["Sensibilidad",t.sensibilidad],["Especificidad",t.especificidad],["F1",t.f1]].map(([s,l])=>`
                <div class="rounded-xl bg-slate-50 border border-slate-200 px-3 py-4">
                    <span class="block text-xs font-black uppercase tracking-wider text-slate-500">${s}</span>
                    <strong class="block mt-1 text-xl text-slate-900">${l===null?"—":`${M(l*100,2)} %`}</strong>
                </div>
            `).join("")}
        </div>
    `;return F("matriz-confusion","Matriz de confusión",`Resume la clasificación con umbral ${M(t.umbral,2)}. Los falsos positivos y falsos negativos deben interpretarse según el costo real de cada error.`,a)}function Oe(e,t){const i=b=>48+b*504,n=e.datosGrafico.map((b,v)=>{const x=b.observado===1?90:210,g=(v%7-3)*5,u=b.observado===1?"text-indigo-700":"text-sky-500";return`
            <circle
                cx="${i(b.probabilidad)}"
                cy="${x+g}"
                r="5"
                fill="currentColor"
                class="${u}"
            >
                <title>Observación ${b.observacion}: Y=${b.observado}, p=${M(b.probabilidad,4)}</title>
            </circle>
        `}).join(""),d=i(e.clasificacion.umbral),p=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 600 300" class="min-w-[560px] w-full" role="img" aria-label="Distribución de probabilidades por clase observada">
                <line x1="48" y1="250" x2="552" y2="250" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${d}" y1="38" x2="${d}" y2="250" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" class="text-red-500" />
                <text x="${d}" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" class="text-red-600">Umbral ${M(e.clasificacion.umbral,2)}</text>

                ${[0,.25,.5,.75,1].map(b=>`
                    <line x1="${i(b)}" y1="250" x2="${i(b)}" y2="256" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                    <text x="${i(b)}" y="275" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${b}</text>
                `).join("")}

                <text x="18" y="94" font-size="13" font-weight="800" fill="currentColor" class="text-indigo-800">Y=1</text>
                <text x="18" y="214" font-size="13" font-weight="800" fill="currentColor" class="text-sky-700">Y=0</text>
                ${n}
                <text x="${600/2}" y="296" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">Probabilidad estimada de ${Z(t)} = 1</text>
            </svg>
        </div>
    `;return F("probabilidades-clase","Probabilidades estimadas por clase","Una buena separación visual concentra los casos observados con valor 1 hacia probabilidades altas y los casos con valor 0 hacia probabilidades bajas.",p)}function Se(e){const t=e.calibracion.grupos.map(p=>({...p,proporcionObservada:p.n>0?p.observadosPositivos/p.n:0})),o=560,a=390,s={izquierda:62,derecha:24,superior:26,inferior:58},l=o-s.izquierda-s.derecha,i=a-s.superior-s.inferior,c=p=>s.izquierda+p*l,r=p=>s.superior+(1-p)*i,n=t.map(p=>`${c(p.probabilidadMedia)},${r(p.proporcionObservada)}`).join(" "),d=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${o} ${a}" class="min-w-[520px] w-full" role="img" aria-label="Gráfico de calibración">
                <line x1="${c(0)}" y1="${r(0)}" x2="${c(1)}" y2="${r(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${c(0)}" y1="${r(0)}" x2="${c(0)}" y2="${r(1)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${c(0)}" y1="${r(0)}" x2="${c(1)}" y2="${r(1)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7" class="text-slate-300" />

                ${[0,.25,.5,.75,1].map(p=>`
                    <text x="${c(p)}" y="${a-32}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${p}</text>
                    <text x="${s.izquierda-14}" y="${r(p)+4}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${p}</text>
                `).join("")}

                <polyline points="${n}" fill="none" stroke="currentColor" stroke-width="3" class="text-emerald-600" />
                ${t.map(p=>`
                    <circle cx="${c(p.probabilidadMedia)}" cy="${r(p.proporcionObservada)}" r="6" fill="currentColor" class="text-emerald-700">
                        <title>Grupo ${p.grupo}: esperado ${M(p.probabilidadMedia,3)}, observado ${M(p.proporcionObservada,3)}</title>
                    </circle>
                `).join("")}

                <text x="${s.izquierda+l/2}" y="${a-8}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">Probabilidad media estimada</text>
                <text x="16" y="${s.superior+i/2}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700" transform="rotate(-90 16 ${s.superior+i/2})">Proporción observada</text>
            </svg>
        </div>
        <div class="mt-4 text-sm text-slate-600">
            Hosmer–Lemeshow: χ² = <strong>${M(e.calibracion.estadistico,4)}</strong>, p = <strong>${M(e.calibracion.p,4)}</strong>.
        </div>
    `;return F("calibracion","Calibración","Compara la probabilidad media estimada con la proporción realmente observada en grupos ordenados por riesgo. Los puntos próximos a la diagonal indican mejor calibración.",d)}function De(e){const t=e.coeficientes.filter(x=>x.termino!=="Intercepto");if(!t.length)return"";const o=620,a=58,s=80+t.length*a,l=170,i=40,c=t.flatMap(x=>[Math.log(Math.max(x.intervaloOddsRatio.inferior,1e-8)),Math.log(Math.max(x.intervaloOddsRatio.superior,1e-8)),0]);let r=Math.min(...c),n=Math.max(...c);Math.abs(n-r)<.5&&(r-=.5,n+=.5);const d=n-r,p=x=>l+(Math.log(Math.max(x,1e-8))-r)/d*(o-l-i),b=p(1),v=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${o} ${s}" class="min-w-[580px] w-full" role="img" aria-label="Gráfico de razones de probabilidades">
                <line x1="${b}" y1="28" x2="${b}" y2="${s-34}" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" class="text-slate-400" />
                <text x="${b}" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" class="text-slate-600">OR = 1</text>

                ${t.map((x,g)=>{const u=58+g*a,$=p(x.intervaloOddsRatio.inferior),y=p(x.intervaloOddsRatio.superior),L=p(x.oddsRatio),C=x.p<.05;return`
                        <text x="${l-14}" y="${u+4}" text-anchor="end" font-size="12" font-weight="700" fill="currentColor" class="text-slate-700">${Z(x.termino)}</text>
                        <line x1="${$}" y1="${u}" x2="${y}" y2="${u}" stroke="currentColor" stroke-width="4" class="${C?"text-indigo-500":"text-slate-400"}" />
                        <line x1="${$}" y1="${u-7}" x2="${$}" y2="${u+7}" stroke="currentColor" stroke-width="2" class="${C?"text-indigo-500":"text-slate-400"}" />
                        <line x1="${y}" y1="${u-7}" x2="${y}" y2="${u+7}" stroke="currentColor" stroke-width="2" class="${C?"text-indigo-500":"text-slate-400"}" />
                        <circle cx="${L}" cy="${u}" r="7" fill="currentColor" class="${C?"text-indigo-800":"text-slate-600"}">
                            <title>${Z(x.termino)}: OR=${M(x.oddsRatio,4)}, IC [${M(x.intervaloOddsRatio.inferior,4)}, ${M(x.intervaloOddsRatio.superior,4)}]</title>
                        </circle>
                    `}).join("")}

                <text x="${l}" y="${s-10}" text-anchor="start" font-size="11" fill="currentColor" class="text-slate-600">${M(Math.exp(r),3)}</text>
                <text x="${o-i}" y="${s-10}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${M(Math.exp(n),3)}</text>
            </svg>
        </div>
    `;return F("odds-ratio","Razones de probabilidades e intervalos de confianza","Valores mayores que 1 indican aumento de las odds del evento por unidad del predictor; valores menores que 1 indican disminución, manteniendo constantes los demás predictores.",v,"xl:col-span-2")}function Ve(e){const t=e.datosGrafico.map(i=>i.distanciaCook),o=Math.max(...t,4/e.n,1e-8),a=4/e.n,s=e.datosGrafico.map(i=>{const c=Math.max(2,i.distanciaCook/o*180);return`
            <div class="flex flex-col justify-end items-center min-w-[18px] h-full">
                <div
                    class="w-3 rounded-t ${i.distanciaCook>a?"bg-red-600":"bg-sky-600"}"
                    style="height:${c}px"
                    title="Observación ${i.observacion}: Cook = ${M(i.distanciaCook,5)}"
                ></div>
                <span class="text-[9px] text-slate-500 mt-1">${i.observacion}</span>
            </div>
        `}).join(""),l=`
        <div class="relative h-64 border-l border-b border-slate-300 px-3 pt-4 overflow-x-auto">
            <div class="absolute left-0 right-0 border-t-2 border-dashed border-red-300" style="bottom:${Math.min(220,a/o*180+22)}px">
                <span class="absolute right-1 -top-5 text-[10px] font-black text-red-600">4/n = ${M(a,4)}</span>
            </div>
            <div class="relative flex items-end gap-1 min-w-max h-full">
                ${s}
            </div>
        </div>
    `;return F("distancia-cook","Distancia de Cook","Señala observaciones con potencial influencia sobre el ajuste. El criterio 4/n es orientativo y no sustituye la revisión del caso y del diseño del estudio.",l)}function Ue(e,t="Y"){return`
        <section class="mt-10">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Visualización del modelo
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Discriminación, clasificación, calibración e influencia
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-5xl mb-7">
                Examine conjuntamente los gráficos. Un modelo puede discriminar bien y, al mismo tiempo, presentar mala calibración o depender excesivamente de algunas observaciones.
            </p>

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${Fe(e)}
                ${qe(e)}
                ${Oe(e,t)}
                ${Se(e)}
                ${De(e)}
                ${Ve(e)}
            </div>
        </section>
    `}function rt(){const e=document.createElement("section");let t=null,o=null;e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-rose-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <div class="flex flex-wrap gap-4 mb-7">
                    <button
                        type="button"
                        data-action="volver-regresion"
                        class="inline-flex items-center gap-2 text-rose-300 font-black hover:text-white transition-colors"
                    >
                        <span aria-hidden="true">←</span>
                        Modelos de regresión
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors"
                    >
                        Laboratorio
                    </button>
                </div>

                <p class="uppercase tracking-[0.20em] text-rose-300 text-xs md:text-sm font-black mb-3">
                    Modelización de resultados binarios
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión logística binaria
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Estime la probabilidad de un evento codificado como 0 o 1, interprete razones de probabilidades, evalúe discriminación y calibración, y realice nuevas predicciones.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Odds ratios</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Curva ROC y AUC</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Calibración</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Clasificación</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.70fr_1.30fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                    Preparación de datos
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Una observación por fila
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${U("Resultado binario","La primera columna debe contener exclusivamente 0 y 1. Defina con claridad qué representa el evento codificado como 1.")}
                    ${U("Predictores","Coloque después una columna por cada variable explicativa cuantitativa o previamente codificada.")}
                    ${U("Encabezados","La primera fila puede contener nombres de variables. Sin encabezados se asignarán Y, X1, X2, …")}
                    ${U("Interpretación","Una razón de probabilidades mayor que 1 indica aumento de las odds del evento; una menor que 1 indica disminución, manteniendo constantes los demás predictores.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Advertencia metodológica
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La regresión logística no demuestra causalidad. Requiere observaciones independientes, tamaño muestral suficiente, ausencia de colinealidad severa y revisión de separación completa, influencia y calibración.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion-logistica"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Umbral de clasificación
                        </span>
                        <input
                            type="number"
                            name="umbral"
                            min="0.01"
                            max="0.99"
                            step="0.01"
                            value="0.50"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        />
                    </label>

                    <label class="flex items-end pb-3">
                        <span class="inline-flex items-center gap-3 text-sm font-black text-slate-800">
                            <input
                                type="checkbox"
                                name="incluirIntercepto"
                                checked
                                class="w-5 h-5 rounded border-slate-300 text-rose-700 focus:ring-rose-500"
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
                        rows="15"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        placeholder="Aprobó, Horas, Asistencia
0, 2, 60
1, 7, 90"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Use punto para los decimales.
                    </span>
                </label>

                <label class="block mt-5">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Importar CSV o TXT
                    </span>
                    <input
                        type="file"
                        name="archivo"
                        accept=".csv,.txt,text/csv,text/plain"
                        class="block w-full text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-rose-50 file:px-5 file:py-3 file:font-black file:text-rose-700 hover:file:bg-rose-100"
                    />
                </label>

                <div
                    id="mensaje-error-logistica"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-rose-700 text-white font-black rounded-xl px-7 py-4 hover:bg-rose-800 transition-colors shadow-lg"
                    >
                        Ajustar modelo logístico
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-rose-300 text-rose-700 font-black rounded-xl px-6 py-4 hover:bg-rose-50 transition-colors"
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
            id="resultados-regresion-logistica"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-regresion-logistica"),s=e.querySelector("#mensaje-error-logistica"),l=e.querySelector("#resultados-regresion-logistica");return a.elements.archivo.addEventListener("change",async()=>{const i=a.elements.archivo.files?.[0];if(i)try{a.elements.datos.value=await i.text(),G(s)}catch{ie(s,"No fue posible leer el archivo seleccionado.")}}),a.addEventListener("submit",i=>{i.preventDefault(),G(s);try{const{solicitud:c,metadatos:r}=Be(a),n=ze(c);t=n,o=r,l.innerHTML=Xe(n,r),ge({contenedor:l,nombre:"regresion-logistica-binaria",datos:{solicitud:c,metadatos:o,modelo:t}}),l.classList.remove("hidden"),l.scrollIntoView({behavior:"smooth",block:"start"})}catch(c){l.classList.add("hidden"),t=null,o=null,ie(s,c instanceof Error?c.message:"No fue posible ajustar el modelo logístico.")}}),e.addEventListener("submit",i=>{const c=i.target.closest("#formulario-prediccion-logistica");if(!c||!t)return;i.preventDefault();const r=[...c.querySelectorAll("[data-predictor]")].map(d=>d.value.trim()===""?NaN:Number(d.value)),n=c.querySelector("#resultado-prediccion-logistica");try{const d=Ae(t,r,t.clasificacion.umbral);n.innerHTML=`
                <div class="rounded-2xl border border-rose-200 bg-white p-5 text-rose-950">
                    <p class="text-sm font-black uppercase tracking-widest text-rose-700 mb-2">
                        Predicción estimada
                    </p>
                    <p class="text-3xl font-black">
                        Probabilidad = ${m(d.probabilidad*100,2)} %
                    </p>
                    <p class="mt-2 text-sm leading-relaxed">
                        Con umbral ${m(d.umbral,2)}, la clase predicha es <strong>${d.clasePredicha}</strong>. Esta predicción debe interpretarse dentro del rango y población estudiados.
                    </p>
                </div>
            `}catch(d){n.innerHTML=`
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${N(d.message)}
                </div>
            `}}),e.addEventListener("click",async i=>{const c=i.target.closest("[data-action]");if(c)switch(c.dataset.action){case"volver-regresion":window.location.hash="/regresionModelos";break;case"volver-laboratorio":window.location.hash="/laboratorioKernel";break;case"cargar-ejemplo":Te(a),l.classList.add("hidden"),G(s);break;case"limpiar":a.reset(),a.elements.umbral.value="0.50",l.classList.add("hidden"),t=null,o=null,G(s);break;case"exportar-csv":t&&o&&at(t,o);break;case"copiar-reporte":t&&o&&await ot(t,o,c);break;case"imprimir":window.print();break}}),e}function U(e,t){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${t}</p>
        </div>
    `}function Ge(e){return e.trim().split(/[,;\t]/).map(t=>t.trim())}function Be(e){const t=e.elements.datos.value.trim();if(!t)throw new Error("Introduzca los datos antes de ajustar el modelo.");const o=t.split(/\r?\n+/).map(Ge).filter(n=>n.length&&n.some(Boolean));if(o.length<9)throw new Error("Introduzca al menos ocho observaciones y, cuando corresponda, una fila de encabezados.");const s=o[0].every(n=>n!==""&&Number.isFinite(Number(n)))?o[0].map((n,d)=>d===0?"Y":`X${d}`):o.shift(),l=s.length;if(l<2)throw new Error("Se requieren al menos dos columnas: resultado binario y un predictor.");if(!o.every(n=>n.length===l))throw new Error("Todas las filas deben tener la misma cantidad de columnas.");const i=o.map((n,d)=>n.map((p,b)=>{if(p==="")throw new Error(`La celda de la fila ${d+1}, columna ${b+1} está vacía.`);const v=Number(p);if(!Number.isFinite(v))throw new Error(`El valor de la fila ${d+1}, columna ${b+1} no es numérico.`);return v})),c=i.map(n=>n[0]);if(!c.every(n=>n===0||n===1))throw new Error("La primera columna debe contener únicamente valores 0 y 1.");const r=Number(e.elements.umbral.value);return{solicitud:{y:c,X:Array.from({length:l-1},(n,d)=>i.map(p=>p[d+1])),nombresPredictores:s.slice(1),incluirIntercepto:e.elements.incluirIntercepto.checked,nivelConfianza:Number(e.elements.nivelConfianza.value),umbral:r},metadatos:{nombreDependiente:s[0],nombresPredictores:s.slice(1)}}}function Te(e){e.elements.datos.value=`Aprobó, HorasEstudio, Asistencia
0, 1.0, 55
0, 1.5, 60
0, 2.0, 58
0, 2.2, 64
0, 2.8, 62
0, 3.0, 68
0, 3.5, 66
1, 3.8, 72
0, 4.0, 70
1, 4.2, 75
0, 4.5, 69
1, 4.8, 78
1, 5.0, 80
0, 5.2, 73
1, 5.5, 82
1, 5.8, 84
0, 6.0, 76
1, 6.2, 86
1, 6.5, 88
1, 6.8, 90
1, 7.0, 87
1, 7.5, 92
1, 8.0, 94
1, 8.5, 96`,e.elements.nivelConfianza.value="0.95",e.elements.umbral.value="0.50",e.elements.incluirIntercepto.checked=!0}function ie(e,t){e.textContent=t,e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"center"})}function G(e){e.textContent="",e.classList.add("hidden")}function N(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function m(e,t=4){return e==null?"—":Number.isFinite(e)?Number(e).toLocaleString("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}):e>0?"∞":"—"}function H(e){return e==null||!Number.isFinite(e)?"no disponible":e<.001?"< 0.001":`= ${m(e,4)}`}function B(e,t,o){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
            <p class="text-xs uppercase tracking-widest font-black text-slate-500 mb-2">
                ${e}
            </p>
            <p class="text-3xl font-black text-slate-950">
                ${t}
            </p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                ${o}
            </p>
        </article>
    `}function He(e,t){const o=e.coeficientes.map((a,s)=>{const l=a.estimacion,i=m(Math.abs(l),6),c=l<0?"−":s===0?"":"+",r=a.termino==="Intercepto"?"":` · ${N(a.termino)}`;return`${c} ${i}${r}`.trim()});return`logit[P(${N(t)}=1)] = ${o.join(" ")}`}function _e(e){const t=[],o=Math.min(e.distribucionRespuesta.proporcionPositivos,1-e.distribucionRespuesta.proporcionPositivos);return e.convergencia.posibleSeparacion&&t.push({nivel:"alto",titulo:"Posible separación completa",texto:"La clasificación perfecta y los coeficientes extremos pueden producir estimaciones inestables. Revise los datos y considere métodos penalizados."}),e.calibracion.p!==null&&e.calibracion.p<(e.alfa??.05)&&t.push({nivel:"medio",titulo:"Calibración cuestionable",texto:"Hosmer–Lemeshow resulta significativo. Examine el gráfico de calibración, la forma funcional y posibles interacciones."}),e.diagnosticos.vif.some(a=>a.vif>=10)?t.push({nivel:"alto",titulo:"Multicolinealidad severa",texto:"Al menos un predictor presenta VIF de 10 o más. Los coeficientes y sus errores estándar pueden ser inestables."}):e.diagnosticos.vif.some(a=>a.vif>=5)&&t.push({nivel:"medio",titulo:"Multicolinealidad moderada",texto:"Al menos un predictor presenta VIF entre 5 y 10. Revise redundancia conceptual y correlaciones entre predictores."}),e.diagnosticos.observacionesInfluyentes.length&&t.push({nivel:"medio",titulo:"Observaciones influyentes",texto:`Se identificaron ${e.diagnosticos.observacionesInfluyentes.length} casos mediante residuos, leverage o distancia de Cook.`}),o<.2&&t.push({nivel:"medio",titulo:"Clases desequilibradas",texto:"La categoría menos frecuente representa menos del 20 % de la muestra. La exactitud global puede ser engañosa; priorice sensibilidad, especificidad, F1 y AUC."}),e.roc.auc<.6&&t.push({nivel:"medio",titulo:"Discriminación limitada",texto:"El AUC es menor que 0.60. El modelo apenas separa las categorías y requiere revisión sustantiva o nuevos predictores."}),t.length?`
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${t.map(a=>`
                    <article class="rounded-2xl border p-5 ${a.nivel==="alto"?"border-red-200 bg-red-50 text-red-950":"border-amber-200 bg-amber-50 text-amber-950"}">
                        <h3 class="font-black mb-2">${a.titulo}</h3>
                        <p class="text-sm leading-relaxed">${a.texto}</p>
                    </article>
                `).join("")}
        </div>
    `:`
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                <strong class="block mb-1">Sin alertas automáticas prioritarias</strong>
                Los indicadores revisados no muestran problemas graves, pero la validación del diseño y los supuestos sigue siendo necesaria.
            </div>
        `}function Ye(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Coeficientes y razones de momios del modelo logístico
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Término</th>
                        <th scope="col" class="px-4 py-3 text-right">B</th>
                        <th scope="col" class="px-4 py-3 text-right">Error est.</th>
                        <th scope="col" class="px-4 py-3 text-right">z</th>
                        <th scope="col" class="px-4 py-3 text-right">p</th>
                        <th scope="col" class="px-4 py-3 text-right">OR</th>
                        <th scope="col" class="px-4 py-3 text-right">IC de OR</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.coeficientes.map(t=>`
                        <tr class="${t.p<(e.alfa??.05)?"bg-rose-50":""}">
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${N(t.termino)}</th>
                            <td class="px-4 py-3 text-right">${m(t.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${m(t.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${m(t.z,4)}</td>
                            <td class="px-4 py-3 text-right font-black">${H(t.p)}</td>
                            <td class="px-4 py-3 text-right font-black">${m(t.oddsRatio,5)}</td>
                            <td class="px-4 py-3 text-right">[${m(t.intervaloOddsRatio.inferior,5)}, ${m(t.intervaloOddsRatio.superior,5)}]</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ke(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Indicadores de ajuste del modelo logístico
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Indicador</th>
                        <th scope="col" class="px-4 py-3 text-right">Valor</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[["Log-verosimilitud",e.ajuste.logVerosimilitud],["Deviance",e.ajuste.deviance],["AIC",e.ajuste.aic],["BIC",e.ajuste.bic],["R² de McFadden",e.ajuste.r2McFadden],["R² de Cox–Snell",e.ajuste.r2CoxSnell],["R² de Nagelkerke",e.ajuste.r2Nagelkerke]].map(([o,a])=>`
                        <tr>
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${o}</th>
                            <td class="px-4 py-3 text-right">${m(a,6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function We(e){const t=e.clasificacion;return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Métricas de clasificación del modelo logístico
                </caption>
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-left">Métrica</th>
                        <th scope="col" class="px-4 py-3 text-right">Resultado</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[["Exactitud",t.exactitud],["Sensibilidad",t.sensibilidad],["Especificidad",t.especificidad],["Precisión positiva",t.precision],["Valor predictivo negativo",t.valorPredictivoNegativo],["F1",t.f1],["Exactitud balanceada",t.exactitudBalanceada]].map(([a,s])=>`
                        <tr>
                            <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${a}</th>
                            <td class="px-4 py-3 text-right">${s===null?"—":`${m(s*100,2)} %`}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ze(e){return e.diagnosticos.vif.length?`
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
                    ${e.diagnosticos.vif.map(t=>{const o=t.vif>=10?"Severa":t.vif>=5?"Moderada":"Sin evidencia relevante";return`
                            <tr>
                                <th scope="row" class="px-4 py-3 text-left font-black text-slate-900">${N(t.variable)}</th>
                                <td class="px-4 py-3 text-right">${m(t.tolerancia,4)}</td>
                                <td class="px-4 py-3 text-right font-black">${m(t.vif,4)}</td>
                                <td class="px-4 py-3">${o}</td>
                            </tr>
                        `}).join("")}
                </tbody>
            </table>
        </div>
    `:`
            <p class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                El VIF no aplica cuando el modelo contiene un solo predictor.
            </p>
        `}function Je(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[460px]">
            <table class="min-w-full text-sm">
                <caption class="sr-only">
                    Diagnósticos de clasificación, residuos e influencia por observación
                </caption>
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th scope="col" class="px-4 py-3 text-right">Obs.</th>
                        <th scope="col" class="px-4 py-3 text-right">Y</th>
                        <th scope="col" class="px-4 py-3 text-right">Probabilidad</th>
                        <th scope="col" class="px-4 py-3 text-right">Clase</th>
                        <th scope="col" class="px-4 py-3 text-right">Residuo Pearson</th>
                        <th scope="col" class="px-4 py-3 text-right">Residuo deviance</th>
                        <th scope="col" class="px-4 py-3 text-right">Leverage</th>
                        <th scope="col" class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.datosGrafico.map(t=>`
                            <tr class="${Math.abs(t.residuoPearson)>2||t.distanciaCook>4/e.n||t.leverage>2*(e.numeroPredictores+1)/e.n?"bg-red-50":""}">
                                <th scope="row" class="px-4 py-3 text-right font-black">${t.observacion}</th>
                                <td class="px-4 py-3 text-right">${t.observado}</td>
                                <td class="px-4 py-3 text-right">${m(t.probabilidad,6)}</td>
                                <td class="px-4 py-3 text-right font-black">${t.clasePredicha}</td>
                                <td class="px-4 py-3 text-right">${m(t.residuoPearson,4)}</td>
                                <td class="px-4 py-3 text-right">${m(t.residuoDeviance,4)}</td>
                                <td class="px-4 py-3 text-right">${m(t.leverage,4)}</td>
                                <td class="px-4 py-3 text-right">${m(t.distanciaCook,5)}</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function Qe(e){return`
        <form id="formulario-prediccion-logistica" class="rounded-3xl border border-rose-200 bg-rose-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                Aplicación del modelo
            </p>
            <h2 class="text-2xl md:text-3xl font-black text-rose-950 mb-3">
                Estimar una nueva probabilidad
            </h2>
            <p class="text-rose-900 leading-relaxed mb-6 max-w-4xl">
                Introduzca un valor para cada predictor. Evite extrapolar fuera del rango observado y no interprete la probabilidad como certeza individual.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${e.nombresPredictores.map((t,o)=>`
                    <label class="block">
                        <span class="block text-sm font-black text-rose-950 mb-2">
                            ${N(t)}
                        </span>
                        <input
                            type="number"
                            step="any"
                            required
                            data-predictor="${o}"
                            class="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                            placeholder="Valor de ${N(t)}"
                        />
                    </label>
                `).join("")}
            </div>

            <button
                type="submit"
                class="mt-6 inline-flex items-center justify-center rounded-xl bg-rose-700 px-7 py-4 text-white font-black hover:bg-rose-800 transition-colors shadow-lg"
            >
                Calcular probabilidad
            </button>

            <div id="resultado-prediccion-logistica" class="mt-5" aria-live="polite"></div>
        </form>
    `}function Xe(e,t){const o=e.pruebaGlobal.p!==null&&e.pruebaGlobal.p<(e.alfa??.05);return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-rose-300 text-xs font-black mb-2">
                        Modelo estimado
                    </p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">
                        Regresión logística binaria
                    </h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        El modelo utiliza ${e.n} observaciones, ${e.numeroPredictores} predictor${e.numeroPredictores===1?"":"es"} y convergió en ${e.convergencia.iteraciones} iteraciones.
                    </p>
                </div>

                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${o?"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":"bg-amber-500/20 text-amber-200 border border-amber-400/30"}">
                    ${o?"Modelo global significativo":`Modelo global no significativo con α = ${(e.alfa??.05).toFixed(3)}`}
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
            ${B("χ² global",m(e.pruebaGlobal.chiCuadrado,4),`p ${H(e.pruebaGlobal.p)}`)}
            ${B("R² Nagelkerke",m(e.ajuste.r2Nagelkerke,4),"Pseudo-R² escalado entre 0 y 1")}
            ${B("AUC",m(e.roc.auc,4),"Capacidad discriminativa global")}
            ${B("Exactitud",`${m(e.clasificacion.exactitud*100,2)} %`,`Umbral ${m(e.clasificacion.umbral,2)}`)}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${_e(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Efectos individuales</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes y razones de probabilidades</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Cada prueba Wald contrasta si el coeficiente difiere de cero. La OR expresa el cambio multiplicativo de las odds por una unidad del predictor, manteniendo constantes los demás.
            </p>
            ${Ye(e)}
        </section>

        <section class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Ajuste relativo</p>
                <h2 class="text-3xl font-black text-slate-900 mb-3">Indicadores del modelo</h2>
                <p class="text-slate-600 leading-relaxed mb-6">AIC y BIC sirven principalmente para comparar modelos estimados sobre la misma muestra y variable dependiente; valores menores son preferibles.</p>
                ${Ke(e)}
            </article>

            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Rendimiento de clasificación</p>
                <h2 class="text-3xl font-black text-slate-900 mb-3">Métricas con el umbral seleccionado</h2>
                <p class="text-slate-600 leading-relaxed mb-6">Cambiar el umbral modifica sensibilidad, especificidad y los errores de clasificación; debe elegirse según el objetivo y costo de los errores.</p>
                ${We(e)}
            </article>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y VIF</h2>
            <p class="text-slate-600 leading-relaxed mb-6">VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${Ze(e)}
        </section>

        ${Ue(e,t.nombreDependiente)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Probabilidades y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo elevado, leverage o distancia de Cook. Nunca elimine casos únicamente por un criterio automático.</p>
            ${Je(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del análisis</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(a=>`
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${N(a)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8">
            ${Qe(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                La significación estadística de un coeficiente no implica importancia práctica. Las razones de probabilidades dependen de la escala de cada predictor y no equivalen directamente a cambios de probabilidad. Para fines predictivos, el modelo debe evaluarse con validación externa o partición de datos, especialmente cuando se seleccionaron variables utilizando la misma muestra.
            </p>
        </section>
    `}function et(e,t){const o=["REGRESIÓN LOGÍSTICA BINARIA — LABORATORIO KERNEL","",`Variable dependiente: ${t.nombreDependiente} (evento = 1)`,`Predictores: ${e.nombresPredictores.join(", ")}`,`n = ${e.n}`,`χ² global = ${m(e.pruebaGlobal.chiCuadrado,4)}`,`p del modelo ${H(e.pruebaGlobal.p)}`,`R² Nagelkerke = ${m(e.ajuste.r2Nagelkerke,4)}`,`AUC = ${m(e.roc.auc,4)}`,`Exactitud = ${m(e.clasificacion.exactitud*100,2)} %`,`Sensibilidad = ${e.clasificacion.sensibilidad===null?"no calculable":`${m(e.clasificacion.sensibilidad*100,2)} %`}`,`Especificidad = ${e.clasificacion.especificidad===null?"no calculable":`${m(e.clasificacion.especificidad*100,2)} %`}`,"","Coeficientes:"];return e.coeficientes.forEach(a=>{o.push(`${a.termino}: B = ${m(a.estimacion,6)}, OR = ${m(a.oddsRatio,5)}, z = ${m(a.z,4)}, p ${H(a.p)}`)}),o.push("","Interpretación:"),e.interpretacion.forEach(a=>o.push(`- ${a}`)),o.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),o.join(`
`)}function tt(e){return`"${String(e??"").replaceAll('"','""')}"`}function at(e,t){const a=[["REGRESIÓN LOGÍSTICA BINARIA"],["Variable dependiente",t.nombreDependiente],["Predictores",e.nombresPredictores.join(", ")],["n",e.n],["Chi-cuadrado global",e.pruebaGlobal.chiCuadrado],["p del modelo",e.pruebaGlobal.p],["R2 McFadden",e.ajuste.r2McFadden],["R2 Cox-Snell",e.ajuste.r2CoxSnell],["R2 Nagelkerke",e.ajuste.r2Nagelkerke],["AIC",e.ajuste.aic],["BIC",e.ajuste.bic],["AUC",e.roc.auc],["Umbral",e.clasificacion.umbral],["Exactitud",e.clasificacion.exactitud],["Sensibilidad",e.clasificacion.sensibilidad],["Especificidad",e.clasificacion.especificidad],[],["Término","Coeficiente","Error estándar","z","p","Odds ratio","IC OR inferior","IC OR superior"],...e.coeficientes.map(i=>[i.termino,i.estimacion,i.errorEstandar,i.z,i.p,i.oddsRatio,i.intervaloOddsRatio.inferior,i.intervaloOddsRatio.superior]),[],["Observación","Observado","Probabilidad","Clase predicha","Residuo Pearson","Residuo deviance","Leverage","Distancia de Cook"],...e.datosGrafico.map(i=>[i.observacion,i.observado,i.probabilidad,i.clasePredicha,i.residuoPearson,i.residuoDeviance,i.leverage,i.distanciaCook]),[],["Diseño y desarrollo","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(i=>i.map(tt).join(",")).join(`
`),s=new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"}),l=document.createElement("a");l.href=URL.createObjectURL(s),l.download="regresion-logistica-binaria-kernel.csv",l.click(),URL.revokeObjectURL(l.href)}async function ot(e,t,o){const a=et(e,t),s=o.textContent;try{await navigator.clipboard.writeText(a),o.textContent="Reporte copiado"}catch{const l=document.createElement("textarea");l.value=a,document.body.appendChild(l),l.select(),document.execCommand("copy"),l.remove(),o.textContent="Reporte copiado"}window.setTimeout(()=>{o.textContent=s},1800)}export{rt as CalculadoraRegresionLogistica};
