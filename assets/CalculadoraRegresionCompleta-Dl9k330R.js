function se(e,t){if(!Array.isArray(t)||t.length<3)throw new Error(`${e} debe contener al menos tres observaciones.`);const a=t.map(Number);if(!a.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return a}function ve(e){return e[0].map((t,a)=>e.map(r=>r[a]))}function ye(e,t){return e.map(a=>t[0].map((r,o)=>a.reduce((l,i,c)=>l+i*t[c][o],0)))}function O(e,t){return e.map(a=>a.reduce((r,o,l)=>r+o*t[l],0))}function $e(e){return Array.from({length:e},(t,a)=>Array.from({length:e},(r,o)=>a===o?1:0))}function we(e){const t=e.length,a=e.map((r,o)=>[...r.map(Number),...$e(t)[o]]);for(let r=0;r<t;r+=1){let o=r;for(let i=r+1;i<t;i+=1)Math.abs(a[i][r])>Math.abs(a[o][r])&&(o=i);if(Math.abs(a[o][r])<1e-12)throw new Error("La matriz de predictores es singular. Elimine variables redundantes o perfectamente colineales.");[a[r],a[o]]=[a[o],a[r]];const l=a[r][r];a[r]=a[r].map(i=>i/l);for(let i=0;i<t;i+=1){if(i===r)continue;const c=a[i][r];a[i]=a[i].map((s,n)=>s-c*a[r][n])}}return a.map(r=>r.slice(t))}function de(e){return e.reduce((t,a)=>t+a,0)/e.length}function ke(e,t=de(e)){return e.reduce((a,r)=>a+(r-t)**2,0)}function Y(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-Y(1-e);let a=.9999999999998099;const r=e-1;t.forEach((l,i)=>{a+=l/(r+i+1)});const o=r+t.length-.5;return .5*Math.log(2*Math.PI)+(r+.5)*Math.log(o)-o+Math.log(a)}function ne(e,t,a){const i=e+t,c=e+1,s=e-1;let n=1,d=1-i*a/c;Math.abs(d)<1e-300&&(d=1e-300),d=1/d;let b=d;for(let u=1;u<=200;u+=1){const h=2*u;let v=u*(t-u)*a/((s+h)*(e+h));d=1+v*d,Math.abs(d)<1e-300&&(d=1e-300),n=1+v/n,Math.abs(n)<1e-300&&(n=1e-300),d=1/d,b*=d*n,v=-(e+u)*(i+u)*a/((e+h)*(c+h)),d=1+v*d,Math.abs(d)<1e-300&&(d=1e-300),n=1+v/n,Math.abs(n)<1e-300&&(n=1e-300),d=1/d;const w=d*n;if(b*=w,Math.abs(w-1)<3e-14)break}return b}function ue(e,t,a){if(e<=0)return 0;if(e>=1)return 1;const r=Math.exp(Y(t+a)-Y(t)-Y(a)+t*Math.log(e)+a*Math.log(1-e));return e<(t+1)/(t+a+2)?r*ne(t,a,e)/t:1-r*ne(a,t,1-e)/a}function Me(e,t){if(!Number.isFinite(e))return 0;const a=t/(t+e**2);return Math.min(1,ue(a,t/2,.5))}function Ee(e,t,a){if(!Number.isFinite(e))return 0;if(e<=0)return 1;const r=a/(a+t*e);return ue(r,a/2,t/2)}function ze(e){const t=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],a=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],r=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],o=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],l=.02425,i=1-l;if(e<=0||e>=1)throw new Error("La probabilidad debe estar entre 0 y 1.");if(e<l){const n=Math.sqrt(-2*Math.log(e));return(((((r[0]*n+r[1])*n+r[2])*n+r[3])*n+r[4])*n+r[5])/((((o[0]*n+o[1])*n+o[2])*n+o[3])*n+1)}if(e>i){const n=Math.sqrt(-2*Math.log(1-e));return-(((((r[0]*n+r[1])*n+r[2])*n+r[3])*n+r[4])*n+r[5])/((((o[0]*n+o[1])*n+o[2])*n+o[3])*n+1)}const c=e-.5,s=c*c;return(((((t[0]*s+t[1])*s+t[2])*s+t[3])*s+t[4])*s+t[5])*c/(((((a[0]*s+a[1])*s+a[2])*s+a[3])*s+a[4])*s+1)}function je(e,t){const a=ze(e),r=a*a,o=r*a,l=o*r,i=l*r;return a+(o+a)/(4*t)+(5*l+16*o+3*a)/(96*t**2)+(3*i+19*l+17*o-15*a)/(384*t**3)}function Ce(e,t){const a=e[0].length;return Array.from({length:a},(r,o)=>[...t?[1]:[],...e.map(l=>l[o])])}function qe(e,t){return e.length<2?[]:e.map((a,r)=>{const o=e.filter((l,i)=>i!==r);try{const l=pe({y:a,X:o,nombresPredictores:t.filter((c,s)=>s!==r),incluirIntercepto:!0,nivelConfianza:.95,calcularDiagnosticos:!1,calcularVif:!1}),i=Math.max(1-l.ajuste.r2,1e-12);return{variable:t[r],tolerancia:i,vif:1/i}}catch{return{variable:t[r],tolerancia:0,vif:1/0}}})}function pe({y:e,X:t,nombresPredictores:a=[],incluirIntercepto:r=!0,nivelConfianza:o=.95,calcularDiagnosticos:l=!0,calcularVif:i=!0}){const c=se("La variable dependiente",e);if(!Array.isArray(t)||!t.length)throw new Error("Debe proporcionar al menos una variable predictora.");const s=t.map((p,m)=>se(a[m]||`X${m+1}`,p));if(!s.every(p=>p.length===c.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(o>0&&o<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");const n=s.map((p,m)=>a[m]||`X${m+1}`),d=Ce(s,r),b=c.length,u=d[0].length,h=b-u;if(h<=0)throw new Error("No hay suficientes observaciones para estimar el modelo.");const v=ve(d),w=ye(v,d),f=we(w),g=O(v,c),E=O(f,g),q=O(d,E),k=c.map((p,m)=>p-q[m]),U=de(c),F=r?ke(c,U):c.reduce((p,m)=>p+m**2,0),N=k.reduce((p,m)=>p+m**2,0),W=Math.max(F-N,0),D=F>1e-12?1-N/F:1,re=r?1-(1-D)*(b-1)/h:1-(1-D)*b/h,z=N/h,B=Math.sqrt(z),me=k.reduce((p,m)=>p+Math.abs(m),0)/b,j=u-(r?1:0),V=j>0&&z>1e-12?W/j/z:1/0,L=j>0?Ee(V,j,h):null,oe=je(.5+o/2,h),xe=[...r?["Intercepto"]:[],...n],be=E.map((p,m)=>{const y=Math.sqrt(Math.max(z*f[m][m],0)),G=y>1e-12?p/y:p===0?0:1/0,J=Me(Math.abs(G),h);return{termino:xe[m],estimacion:p,errorEstandar:y,t:G,p:J,intervaloConfianza:{inferior:p-oe*y,superior:p+oe*y,nivel:o}}}),P=d.map(p=>{const m=O(f,p);return p.reduce((y,G,J)=>y+G*m[J],0)}),Q=k.map((p,m)=>{const y=Math.sqrt(Math.max(z*(1-P[m]),1e-12));return p/y}),K=k.map((p,m)=>{const y=P[m];return u>0&&z>1e-12?p**2/(u*z)*y/Math.max((1-y)**2,1e-12):0}),ie=k.reduce((p,m)=>p+m**2,0),fe=k.slice(1).reduce((p,m,y)=>p+(m-k[y])**2,0),he=ie>1e-12?fe/ie:null,T=i&&s.length>1?qe(s,n):[],Z=l?K.map((p,m)=>({observacion:m+1,distanciaCook:p,leverage:P[m],residuoEstandarizado:Q[m]})).filter(p=>p.distanciaCook>4/b||Math.abs(p.residuoEstandarizado)>2||p.leverage>2*u/b):[],ge=[`El modelo explica ${(D*100).toFixed(2)} % de la variabilidad de la variable dependiente.`,`El R² ajustado es ${re.toFixed(4)} y el error estándar de estimación es ${B.toFixed(4)}.`,L===null?"No se calculó una prueba global del modelo.":L<.05?`El modelo global es estadísticamente significativo (F = ${V.toFixed(4)}, p ${L<.001?"< 0.001":`= ${L.toFixed(4)}`}).`:`El modelo global no alcanza significación estadística al 5 % (F = ${V.toFixed(4)}, p = ${L.toFixed(4)}).`,T.some(p=>p.vif>=10)?"Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10).":T.some(p=>p.vif>=5)?"Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5).":T.length?"No se detectó multicolinealidad relevante mediante el criterio VIF.":"El VIF no aplica a un modelo con un solo predictor.",Z.length?`Se identificaron ${Z.length} observaciones potencialmente influyentes que deben revisarse.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos."];return{tipoModelo:s.length===1?"regresion-lineal-simple":"regresion-lineal-multiple",n:b,numeroPredictores:s.length,incluirIntercepto:r,nombresPredictores:n,coeficientes:be,ajuste:{r2:D,r2Ajustado:re,mae:me,mse:z,rmse:B,errorEstandarEstimacion:B},anova:{sumaCuadradosModelo:W,sumaCuadradosError:N,sumaCuadradosTotal:F,gradosLibertadModelo:j,gradosLibertadError:h,gradosLibertadTotal:r?b-1:b,mediaCuadraticaModelo:j>0?W/j:null,mediaCuadraticaError:z,f:V,p:L},predichos:q,residuos:k,diagnosticos:{leverage:P,residuosEstandarizados:Q,distanciaCook:K,durbinWatson:he,vif:T,observacionesInfluyentes:Z},datosGrafico:c.map((p,m)=>({observacion:m+1,observado:p,predicho:q[m],residuo:k[m],residuoEstandarizado:Q[m],leverage:P[m],distanciaCook:K[m],predictores:s.map(y=>y[m])})),interpretacion:ge}}function Le(e,t){if(!e?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(t)||t.length!==e.numeroPredictores)throw new Error(`Debe proporcionar ${e.numeroPredictores} valores predictores.`);const a=t.map(Number);if(!a.every(Number.isFinite))throw new Error("Los valores predictores deben ser numéricos.");const r=e.coeficientes.map(l=>l.estimacion);return[...e.incluirIntercepto?[1]:[],...a].reduce((l,i,c)=>l+i*r[c],0)}function $(e,t=3){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{maximumFractionDigits:t}).format(e):"—"}function te(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function R(e,t=.08){const a=e.filter(Number.isFinite);let r=Math.min(...a),o=Math.max(...a);if(!a.length)return{minimo:0,maximo:1};if(Math.abs(o-r)<1e-12){const l=Math.max(Math.abs(o)*.1,1);r-=l,o+=l}else{const l=(o-r)*t;r-=l,o+=l}return{minimo:r,maximo:o}}function ae(e,t,a,r){const o=Math.max(t-e,1e-12);return l=>a+(l-e)/o*(r-a)}function _({ancho:e,alto:t,margen:a,rangoX:r,rangoY:o,etiquetaX:l,etiquetaY:i}){const c=[],s=[],n=[],d=ae(r.minimo,r.maximo,a.izquierdo,e-a.derecho),b=ae(o.minimo,o.maximo,t-a.inferior,a.superior);for(let u=0;u<=4;u+=1){const h=u/4,v=r.minimo+h*(r.maximo-r.minimo),w=o.minimo+h*(o.maximo-o.minimo),f=d(v),g=b(w);c.push(`
            <line x1="${f}" y1="${a.superior}" x2="${f}" y2="${t-a.inferior}" stroke="#e2e8f0" stroke-width="1" />
            <line x1="${a.izquierdo}" y1="${g}" x2="${e-a.derecho}" y2="${g}" stroke="#e2e8f0" stroke-width="1" />
        `),s.push(`
            <text x="${f}" y="${t-a.inferior+20}" text-anchor="middle" font-size="10" fill="#64748b">
                ${$(v,2)}
            </text>
        `),n.push(`
            <text x="${a.izquierdo-10}" y="${g+4}" text-anchor="end" font-size="10" fill="#64748b">
                ${$(w,2)}
            </text>
        `)}return{x:d,y:b,contenido:`
            ${c.join("")}
            <line x1="${a.izquierdo}" y1="${a.superior}" x2="${a.izquierdo}" y2="${t-a.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${a.izquierdo}" y1="${t-a.inferior}" x2="${e-a.derecho}" y2="${t-a.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${s.join("")}
            ${n.join("")}
            <text x="${(a.izquierdo+e-a.derecho)/2}" y="${t-8}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">
                ${te(l)}
            </text>
            <text x="17" y="${t/2}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 17 ${t/2})">
                ${te(i)}
            </text>
        `}}function A(e,t,a){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-md overflow-hidden">
            <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${t}
            </p>
            <div class="overflow-x-auto">
                ${a}
            </div>
        </article>
    `}function I(e,t){return`
        <svg
            viewBox="0 0 640 360"
            class="w-full min-w-[560px]"
            role="img"
            aria-label="${te(t)}"
        >
            <rect x="0" y="0" width="640" height="360" rx="18" fill="#ffffff" />
            ${e}
        </svg>
    `}function le(e,t){const a=e.coeficientes.map(o=>o.estimacion);return[...e.incluirIntercepto?[1]:[],...t].reduce((o,l,i)=>o+l*a[i],0)}function Re(e,t){if(e.numeroPredictores!==1)return"";const a=e.nombresPredictores[0]||"X",r=e.datosGrafico,o=r.map(f=>f.predictores[0]),l=r.map(f=>f.observado),i=R(o),c=R([...l,...r.map(f=>f.predicho)]),n=_({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:i,rangoY:c,etiquetaX:a,etiquetaY:t}),d=Math.min(...o),b=Math.max(...o),u=le(e,[d]),h=le(e,[b]),v=r.map(f=>`
        <line
            x1="${n.x(f.predictores[0])}"
            y1="${n.y(f.observado)}"
            x2="${n.x(f.predictores[0])}"
            y2="${n.y(f.predicho)}"
            stroke="#cbd5e1"
            stroke-width="1.5"
        />
    `).join(""),w=r.map((f,g)=>`
        <circle
            cx="${n.x(f.predictores[0])}"
            cy="${n.y(f.observado)}"
            r="5.5"
            fill="#4f46e5"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${g+1}: ${a} = ${$(f.predictores[0])}; ${t} = ${$(f.observado)}</title>
        </circle>
    `).join("");return A("Dispersión y recta ajustada","Los puntos representan los datos observados; la línea muestra el modelo estimado y los segmentos verticales representan los residuos.",I(`
            ${n.contenido}
            ${v}
            <line
                x1="${n.x(d)}"
                y1="${n.y(u)}"
                x2="${n.x(b)}"
                y2="${n.y(h)}"
                stroke="#dc2626"
                stroke-width="4"
                stroke-linecap="round"
            />
            ${w}
        `,"Gráfico de dispersión con recta de regresión"))}function Ae(e,t){const a=e.datosGrafico.map(s=>s.observado),r=e.datosGrafico.map(s=>s.predicho),o=R([...a,...r]),i=_({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:o,rangoY:o,etiquetaX:"Valor predicho",etiquetaY:`Valor observado de ${t}`}),c=e.datosGrafico.map((s,n)=>`
        <circle
            cx="${i.x(s.predicho)}"
            cy="${i.y(s.observado)}"
            r="5.5"
            fill="#0f766e"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${n+1}: observado = ${$(s.observado)}; predicho = ${$(s.predicho)}</title>
        </circle>
    `).join("");return A("Observado frente a predicho","Un ajuste adecuado concentra los puntos cerca de la línea diagonal de igualdad.",I(`
            ${i.contenido}
            <line
                x1="${i.x(o.minimo)}"
                y1="${i.y(o.minimo)}"
                x2="${i.x(o.maximo)}"
                y2="${i.y(o.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${c}
        `,"Gráfico de valores observados frente a valores predichos"))}function Ie(e){const t=e.datosGrafico.map(s=>s.predicho),a=e.datosGrafico.map(s=>s.residuo),r=R(t),o=R([...a,0]),i=_({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:r,rangoY:o,etiquetaX:"Valor predicho",etiquetaY:"Residuo"}),c=e.datosGrafico.map((s,n)=>`
        <circle
            cx="${i.x(s.predicho)}"
            cy="${i.y(s.residuo)}"
            r="5"
            fill="${Math.abs(s.residuoEstandarizado)>2?"#dc2626":"#2563eb"}"
        >
            <title>Observación ${n+1}: residuo = ${$(s.residuo)}; residuo estandarizado = ${$(s.residuoEstandarizado)}</title>
        </circle>
    `).join("");return A("Residuos frente a valores predichos","Se espera una nube aproximadamente aleatoria alrededor de cero. Los puntos rojos tienen residuos estandarizados con magnitud mayor que 2.",I(`
            ${i.contenido}
            <line
                x1="${i.x(r.minimo)}"
                y1="${i.y(0)}"
                x2="${i.x(r.maximo)}"
                y2="${i.y(0)}"
                stroke="#0f172a"
                stroke-width="2"
                stroke-dasharray="7 5"
            />
            ${c}
        `,"Gráfico de residuos frente a valores predichos"))}function Pe(e){const t=e.residuos,a=t.length,r=Math.max(4,Math.ceil(Math.log2(a)+1)),o=Math.min(...t),l=Math.max(...t),c=Math.max(l-o,1e-9)/r,s=Array.from({length:r},(g,E)=>({inferior:o+E*c,superior:o+(E+1)*c,frecuencia:0}));t.forEach(g=>{const E=Math.min(Math.floor((g-o)/c),r-1);s[E].frecuencia+=1});const n=Math.max(...s.map(g=>g.frecuencia),1),d=640,b=360,u={izquierdo:60,derecho:24,superior:24,inferior:68},h=d-u.izquierdo-u.derecho,v=b-u.superior-u.inferior,w=h/r,f=s.map((g,E)=>{const q=g.frecuencia/n*v,k=u.izquierdo+E*w,U=b-u.inferior-q;return`
            <rect
                x="${k+1}"
                y="${U}"
                width="${Math.max(w-2,1)}"
                height="${q}"
                fill="#7c3aed"
                opacity="0.86"
            >
                <title>[${$(g.inferior)}, ${$(g.superior)}]: ${g.frecuencia} observaciones</title>
            </rect>
            <text
                x="${k+w/2}"
                y="${b-u.inferior+18}"
                text-anchor="middle"
                font-size="9"
                fill="#64748b"
            >
                ${$(g.inferior,1)}
            </text>
        `}).join("");return A("Histograma de residuos","Permite examinar visualmente la simetría, concentración y posibles colas de la distribución residual.",I(`
            <line x1="${u.izquierdo}" y1="${u.superior}" x2="${u.izquierdo}" y2="${b-u.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${u.izquierdo}" y1="${b-u.inferior}" x2="${d-u.derecho}" y2="${b-u.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${f}
            <text x="${d/2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Residuo</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Frecuencia</text>
        `,"Histograma de los residuos"))}function Se(e){const t=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],a=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],r=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],o=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],l=.02425,i=1-l;if(e<l){const n=Math.sqrt(-2*Math.log(e));return(((((r[0]*n+r[1])*n+r[2])*n+r[3])*n+r[4])*n+r[5])/((((o[0]*n+o[1])*n+o[2])*n+o[3])*n+1)}if(e>i){const n=Math.sqrt(-2*Math.log(1-e));return-(((((r[0]*n+r[1])*n+r[2])*n+r[3])*n+r[4])*n+r[5])/((((o[0]*n+o[1])*n+o[2])*n+o[3])*n+1)}const c=e-.5,s=c*c;return(((((t[0]*s+t[1])*s+t[2])*s+t[3])*s+t[4])*s+t[5])*c/(((((a[0]*s+a[1])*s+a[2])*s+a[3])*s+a[4])*s+1)}function Fe(e){const t=[...e.diagnosticos.residuosEstandarizados].sort((c,s)=>c-s),a=t.map((c,s)=>Se((s+.5)/t.length)),r=R([...t,...a]),l=_({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:r,rangoY:r,etiquetaX:"Cuantil normal teórico",etiquetaY:"Residuo estandarizado ordenado"}),i=t.map((c,s)=>`
        <circle
            cx="${l.x(a[s])}"
            cy="${l.y(c)}"
            r="4.5"
            fill="#0891b2"
        >
            <title>Cuantil teórico = ${$(a[s])}; residuo = ${$(c)}</title>
        </circle>
    `).join("");return A("Gráfico Q–Q de residuos","La proximidad de los puntos a la diagonal ofrece una evaluación visual de la normalidad residual.",I(`
            ${l.contenido}
            <line
                x1="${l.x(r.minimo)}"
                y1="${l.y(r.minimo)}"
                x2="${l.x(r.maximo)}"
                y2="${l.y(r.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${i}
        `,"Gráfico cuantil cuantil de los residuos"))}function Ne(e){const t=e.diagnosticos.distanciaCook,a=4/e.n,r=Math.max(...t,a,1e-6),o=640,l=360,i={izquierdo:60,derecho:24,superior:24,inferior:58},s=(o-i.izquierdo-i.derecho)/t.length,n=ae(0,r*1.1,l-i.inferior,i.superior),d=t.map((b,u)=>{const h=i.izquierdo+u*s,v=l-i.inferior-n(b);return`
            <rect
                x="${h+Math.max(s*.15,1)}"
                y="${n(b)}"
                width="${Math.max(s*.7,2)}"
                height="${Math.max(v,0)}"
                fill="${b>a?"#dc2626":"#f59e0b"}"
            >
                <title>Observación ${u+1}: distancia de Cook = ${$(b,4)}</title>
            </rect>
        `}).join("");return A("Distancia de Cook",`El umbral orientativo mostrado es 4/n = ${$(a,4)}. Las barras rojas superan ese criterio y requieren revisión.`,I(`
            <line x1="${i.izquierdo}" y1="${i.superior}" x2="${i.izquierdo}" y2="${l-i.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${i.izquierdo}" y1="${l-i.inferior}" x2="${o-i.derecho}" y2="${l-i.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${i.izquierdo}" y1="${n(a)}" x2="${o-i.derecho}" y2="${n(a)}" stroke="#dc2626" stroke-width="2" stroke-dasharray="7 5" />
            ${d}
            <text x="${o/2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Número de observación</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Distancia de Cook</text>
        `,"Gráfico de distancia de Cook por observación"))}function De(e,t="Y"){return`
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
                ${[Re(e,t),Ae(e,t),Ie(e),Pe(e),Fe(e),Ne(e)].filter(Boolean).join("")}
            </div>
        </section>
    `}function Je(){const e=document.createElement("section");let t=null,a=null;e.className=`
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
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
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
                    ${X("Variable dependiente","La primera columna debe contener la variable que desea explicar o predecir.")}
                    ${X("Predictores","Coloque después una columna por cada variable explicativa. La regresión simple utiliza un predictor y la múltiple utiliza dos o más.")}
                    ${X("Encabezados","La primera fila puede contener nombres de variables. En ausencia de encabezados se asignarán Y, X1, X2, …")}
                    ${X("Separadores","Separe columnas con coma, punto y coma o tabulación. Para decimales utilice punto.")}
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
    `;const r=e.querySelector("#formulario-regresion"),o=e.querySelector("#mensaje-error-regresion"),l=e.querySelector("#resultados-regresion"),i=e.querySelector("[data-nombre-archivo]");return r.elements.tipoModelo.addEventListener("change",()=>{ee(r),l.classList.add("hidden"),S(o)}),r.elements.archivoDatos.addEventListener("change",async()=>{const c=r.elements.archivoDatos.files?.[0];if(c)try{r.elements.datos.value=await c.text(),i.textContent=`Archivo cargado: ${c.name}`,l.classList.add("hidden"),S(o)}catch{ce(o,"No fue posible leer el archivo seleccionado.")}}),r.addEventListener("submit",c=>{c.preventDefault(),S(o);try{const s=Te(r);t=pe(s.solicitud),a=s.metadatos,l.innerHTML=Be(t,a),l.classList.remove("hidden"),l.scrollIntoView({behavior:"smooth",block:"start"})}catch(s){l.classList.add("hidden"),ce(o,s instanceof Error?s.message:"No fue posible ajustar el modelo.")}}),e.addEventListener("submit",c=>{if(c.target.id!=="formulario-prediccion-regresion")return;c.preventDefault();const s=e.querySelector("#resultado-prediccion-regresion");try{const n=[...c.target.querySelectorAll("[data-predictor]")].map(b=>Number(b.value)),d=Le(t,n);s.innerHTML=`
                <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                        Predicción puntual
                    </p>
                    <p class="text-3xl font-black text-emerald-950">
                        ${M(a.nombreDependiente)} estimado = ${x(d,6)}
                    </p>
                    <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                        Esta es una estimación puntual basada en el modelo ajustado. Su uso fuera del rango observado de los predictores implica extrapolación y requiere especial cautela.
                    </p>
                </div>
            `}catch(n){s.innerHTML=`
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${M(n instanceof Error?n.message:"No fue posible calcular la predicción.")}
                </div>
            `}}),e.addEventListener("click",async c=>{const s=c.target.closest("[data-action]");if(!s)return;const n=s.dataset.action;if(n==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(n==="cargar-ejemplo"){Ge(r),i.textContent="",l.classList.add("hidden"),S(o);return}if(n==="limpiar"){r.reset(),ee(r),r.elements.datos.value="",i.textContent="",t=null,a=null,l.innerHTML="",l.classList.add("hidden"),S(o);return}if(!(!t||!a)){if(n==="exportar-csv"){Ze(t,a);return}if(n==="imprimir"){window.print();return}if(n==="copiar-reporte")try{await navigator.clipboard.writeText(Qe(t,a)),s.textContent="Reporte copiado",window.setTimeout(()=>{s.textContent="Copiar interpretación"},1800)}catch{s.textContent="No se pudo copiar"}}}),ee(r),e}function X(e,t){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${t}</p>
        </div>
    `}function ee(e){const t=e.elements.tipoModelo.value==="multiple";e.elements.datos.placeholder=t?`Rendimiento, Horas, Asistencia
65, 2, 70
72, 4, 78
80, 6, 85`:`Rendimiento, Horas
65, 2
72, 4
80, 6`}function Ve(e){return e.trim().split(/[,;\t]+/).map(t=>t.trim())}function Te(e){const t=e.elements.datos.value.trim();if(!t)throw new Error("Introduzca los datos antes de ajustar el modelo.");const a=t.split(/\r?\n+/).map(Ve).filter(s=>s.some(n=>n!==""));if(a.length<4)throw new Error("Se requieren al menos tres observaciones y, cuando se utilizan encabezados, una fila adicional para sus nombres.");const o=a[0].every(s=>Number.isFinite(Number(s)))?a[0].map((s,n)=>n===0?"Y":`X${n}`):a.shift().map((s,n)=>s||(n===0?"Y":`X${n}`)),l=o.length;if(l<2)throw new Error("Se requieren al menos dos columnas: la variable dependiente y un predictor.");if(!a.every(s=>s.length===l))throw new Error("Todas las filas deben contener la misma cantidad de columnas.");const i=a.map((s,n)=>s.map((d,b)=>{const u=Number(d);if(!Number.isFinite(u))throw new Error(`El valor de la fila ${n+1}, columna ${b+1} no es numérico.`);return u})),c=e.elements.tipoModelo.value;if(c==="simple"&&l!==2)throw new Error("La regresión lineal simple requiere exactamente dos columnas: Y y X.");if(c==="multiple"&&l<3)throw new Error("La regresión múltiple requiere la variable dependiente y al menos dos predictores.");return{solicitud:{y:i.map(s=>s[0]),X:Array.from({length:l-1},(s,n)=>i.map(d=>d[n+1])),nombresPredictores:o.slice(1),incluirIntercepto:e.elements.incluirIntercepto.checked,nivelConfianza:Number(e.elements.nivelConfianza.value)},metadatos:{nombreDependiente:o[0],nombresPredictores:o.slice(1),nivelConfianza:Number(e.elements.nivelConfianza.value),datosOriginales:i}}}function Ge(e){const t=e.elements.tipoModelo.value==="multiple";e.elements.datos.value=t?`Rendimiento; Horas; Asistencia
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
94; 10`}function x(e,t=4){return e==null?"—":e===1/0?"∞":e===-1/0?"−∞":Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):"—"}function H(e){return e==null?"—":e<.001?"< 0.001":x(e,4)}function M(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Oe(e,t){const a=[];return e.coeficientes.forEach((r,o)=>{const l=r.estimacion,i=x(Math.abs(l),6);if(o===0&&e.incluirIntercepto){a.push(x(l,6));return}const c=l>=0&&a.length?"+":"−",s=M(r.termino);a.length?a.push(`${c} ${i}·${s}`):a.push(`${l<0?"−":""}${i}·${s}`)}),`${M(t)}̂ = ${a.join(" ")}`}function C(e,t,a=""){return`
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
    `}function Xe(e){const t=[],a=e.diagnosticos.vif.length?Math.max(...e.diagnosticos.vif.map(i=>i.vif)):null,r=e.diagnosticos.residuosEstandarizados.filter(i=>Math.abs(i)>2).length,o=e.diagnosticos.durbinWatson;a>=10?t.push({nivel:"alto",texto:"Se detectó multicolinealidad severa porque al menos un VIF es igual o superior a 10."}):a>=5&&t.push({nivel:"medio",texto:"Existe indicio de multicolinealidad moderada porque al menos un VIF es igual o superior a 5."}),e.diagnosticos.observacionesInfluyentes.length&&t.push({nivel:"medio",texto:`Se identificaron ${e.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`}),r&&t.push({nivel:"medio",texto:`${r} observaciones presentan residuos estandarizados con magnitud mayor que 2.`}),o!==null&&(o<1.5||o>2.5)&&t.push({nivel:"medio",texto:"El estadístico de Durbin–Watson se aleja del intervalo orientativo 1.5–2.5; revise la independencia serial de los residuos."}),e.n<20&&t.push({nivel:"informativo",texto:"El tamaño muestral es reducido; los intervalos, valores p y diagnósticos pueden ser sensibles a observaciones individuales."}),t.length||t.push({nivel:"favorable",texto:"Los criterios automáticos no muestran alertas importantes; confirme esta lectura mediante los gráficos y el contexto de la investigación."});const l={alto:"border-red-200 bg-red-50 text-red-950",medio:"border-amber-200 bg-amber-50 text-amber-950",informativo:"border-sky-200 bg-sky-50 text-sky-950",favorable:"border-emerald-200 bg-emerald-50 text-emerald-950"};return`
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${t.map(i=>`
                <div class="rounded-2xl border p-5 ${l[i.nivel]}">
                    <p class="font-bold leading-relaxed">
                        ${M(i.texto)}
                    </p>
                </div>
            `).join("")}
        </div>
    `}function Ye(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Término</th>
                        <th class="px-4 py-3 text-right">Coeficiente</th>
                        <th class="px-4 py-3 text-right">Error estándar</th>
                        <th class="px-4 py-3 text-right">t</th>
                        <th class="px-4 py-3 text-right">p</th>
                        <th class="px-4 py-3 text-right">IC inferior</th>
                        <th class="px-4 py-3 text-right">IC superior</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.coeficientes.map(t=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${M(t.termino)}</td>
                            <td class="px-4 py-3 text-right">${x(t.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${x(t.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${x(t.t,4)}</td>
                            <td class="px-4 py-3 text-right font-black ${t.p<.05?"text-emerald-700":"text-slate-700"}">${H(t.p)}</td>
                            <td class="px-4 py-3 text-right">${x(t.intervaloConfianza.inferior,6)}</td>
                            <td class="px-4 py-3 text-right">${x(t.intervaloConfianza.superior,6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function He(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Fuente</th>
                        <th class="px-4 py-3 text-right">Suma de cuadrados</th>
                        <th class="px-4 py-3 text-right">gl</th>
                        <th class="px-4 py-3 text-right">Media cuadrática</th>
                        <th class="px-4 py-3 text-right">F</th>
                        <th class="px-4 py-3 text-right">p</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[{fuente:"Modelo",sc:e.anova.sumaCuadradosModelo,gl:e.anova.gradosLibertadModelo,mc:e.anova.mediaCuadraticaModelo,f:e.anova.f,p:e.anova.p},{fuente:"Error",sc:e.anova.sumaCuadradosError,gl:e.anova.gradosLibertadError,mc:e.anova.mediaCuadraticaError,f:null,p:null},{fuente:"Total",sc:e.anova.sumaCuadradosTotal,gl:e.anova.gradosLibertadTotal,mc:null,f:null,p:null}].map(a=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${a.fuente}</td>
                            <td class="px-4 py-3 text-right">${x(a.sc,6)}</td>
                            <td class="px-4 py-3 text-right">${x(a.gl,0)}</td>
                            <td class="px-4 py-3 text-right">${x(a.mc,6)}</td>
                            <td class="px-4 py-3 text-right">${x(a.f,4)}</td>
                            <td class="px-4 py-3 text-right font-black">${H(a.p)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function _e(e){return e.diagnosticos.vif.length?`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Predictor</th>
                        <th class="px-4 py-3 text-right">Tolerancia</th>
                        <th class="px-4 py-3 text-right">VIF</th>
                        <th class="px-4 py-3 text-left">Lectura</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.diagnosticos.vif.map(t=>{const a=t.vif>=10?"Severa":t.vif>=5?"Moderada":"Sin evidencia relevante";return`
                            <tr>
                                <td class="px-4 py-3 font-black text-slate-900">${M(t.variable)}</td>
                                <td class="px-4 py-3 text-right">${x(t.tolerancia,4)}</td>
                                <td class="px-4 py-3 text-right font-black">${x(t.vif,4)}</td>
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
        `}function Ue(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[440px]">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th class="px-4 py-3 text-right">Obs.</th>
                        <th class="px-4 py-3 text-right">Observado</th>
                        <th class="px-4 py-3 text-right">Predicho</th>
                        <th class="px-4 py-3 text-right">Residuo</th>
                        <th class="px-4 py-3 text-right">Residuo est.</th>
                        <th class="px-4 py-3 text-right">Leverage</th>
                        <th class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.datosGrafico.map(t=>`
                            <tr class="${Math.abs(t.residuoEstandarizado)>2||t.distanciaCook>4/e.n?"bg-red-50":""}">
                                <td class="px-4 py-3 text-right font-black">${t.observacion}</td>
                                <td class="px-4 py-3 text-right">${x(t.observado,6)}</td>
                                <td class="px-4 py-3 text-right">${x(t.predicho,6)}</td>
                                <td class="px-4 py-3 text-right">${x(t.residuo,6)}</td>
                                <td class="px-4 py-3 text-right">${x(t.residuoEstandarizado,4)}</td>
                                <td class="px-4 py-3 text-right">${x(t.leverage,4)}</td>
                                <td class="px-4 py-3 text-right">${x(t.distanciaCook,5)}</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function We(e,t){return`
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
    `}function Be(e,t){const a=e.anova.p!==null&&e.anova.p<.05,r=x(e.ajuste.r2*100,2);return`
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
                    ${a?"Modelo global significativo":"Modelo global no significativo al 5 %"}
                </span>
            </div>

            <div class="mt-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-5 font-mono text-lg md:text-xl overflow-x-auto">
                ${Oe(e,t.nombreDependiente)}
            </div>

            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100 transition-colors">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            ${C("R²",x(e.ajuste.r2,4),"Proporción explicada por el modelo")}
            ${C("R² ajustado",x(e.ajuste.r2Ajustado,4),"Ajustado por cantidad de predictores")}
            ${C("RMSE",x(e.ajuste.rmse,4),"Error cuadrático medio en unidades de Y")}
            ${C("MAE",x(e.ajuste.mae,4),"Error absoluto medio")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${Xe(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Inferencia individual</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes del modelo</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Cada prueba t contrasta si el coeficiente correspondiente difiere de cero, manteniendo constantes los demás predictores.</p>
            ${Ye(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Prueba global</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">ANOVA de la regresión</h2>
            <p class="text-slate-600 leading-relaxed mb-6">La prueba F evalúa si el conjunto de predictores mejora la explicación de la variable dependiente frente a un modelo sin capacidad explicativa.</p>
            ${He(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y factor de inflación de la varianza</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Como orientación, VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${_e(e)}
        </section>

        <section class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            ${C("Durbin–Watson",x(e.diagnosticos.durbinWatson,4),"Valores cercanos a 2 son compatibles con ausencia de autocorrelación de primer orden")}
            ${C("Observaciones influyentes",x(e.diagnosticos.observacionesInfluyentes.length,0),"Criterios combinados de Cook, leverage y residuo estandarizado")}
            ${C("Error estándar",x(e.ajuste.errorEstandarEstimacion,4),"Desviación típica estimada de los residuos")}
        </section>

        ${De(e,t.nombreDependiente)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Valores ajustados y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo estandarizado elevado o distancia de Cook superior a 4/n.</p>
            ${Ue(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del análisis</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(o=>`
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${M(o)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8">
            ${We(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                Un valor p significativo o un R² elevado no demuestran causalidad ni garantizan utilidad predictiva externa. La validez del modelo depende del diseño de la investigación, la calidad de los datos, el cumplimiento razonable de los supuestos, la ausencia de sesgos importantes y la validación con información independiente cuando el objetivo sea predecir.
            </p>
        </section>
    `}function Qe(e,t){const a=["REGRESIÓN LINEAL Y MÚLTIPLE — LABORATORIO KERNEL","",`Variable dependiente: ${t.nombreDependiente}`,`Predictores: ${e.nombresPredictores.join(", ")}`,`n = ${e.n}`,`R² = ${x(e.ajuste.r2,4)}`,`R² ajustado = ${x(e.ajuste.r2Ajustado,4)}`,`F = ${x(e.anova.f,4)}`,`p del modelo = ${H(e.anova.p)}`,`RMSE = ${x(e.ajuste.rmse,4)}`,`Durbin–Watson = ${x(e.diagnosticos.durbinWatson,4)}`,"","Coeficientes:"];return e.coeficientes.forEach(r=>{a.push(`${r.termino}: b = ${x(r.estimacion,6)}, t = ${x(r.t,4)}, p ${H(r.p)}`)}),a.push("","Interpretación:"),e.interpretacion.forEach(r=>a.push(`- ${r}`)),a.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),a.join(`
`)}function Ke(e){return`"${String(e??"").replaceAll('"','""')}"`}function Ze(e,t){const r=[["REGRESIÓN LINEAL Y MÚLTIPLE"],["Variable dependiente",t.nombreDependiente],["Predictores",e.nombresPredictores.join(", ")],["n",e.n],["R2",e.ajuste.r2],["R2 ajustado",e.ajuste.r2Ajustado],["RMSE",e.ajuste.rmse],["MAE",e.ajuste.mae],["F",e.anova.f],["p del modelo",e.anova.p],["Durbin-Watson",e.diagnosticos.durbinWatson],[],["Término","Coeficiente","Error estándar","t","p","IC inferior","IC superior"],...e.coeficientes.map(i=>[i.termino,i.estimacion,i.errorEstandar,i.t,i.p,i.intervaloConfianza.inferior,i.intervaloConfianza.superior]),[],["Observación","Observado","Predicho","Residuo","Residuo estandarizado","Leverage","Distancia de Cook"],...e.datosGrafico.map(i=>[i.observacion,i.observado,i.predicho,i.residuo,i.residuoEstandarizado,i.leverage,i.distanciaCook]),[],["Diseño y desarrollo","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(i=>i.map(Ke).join(";")).join(`\r
`),o=new Blob([`\uFEFF${r}`],{type:"text/csv;charset=utf-8"}),l=document.createElement("a");l.href=URL.createObjectURL(o),l.download="regresion-lineal-multiple-kernel.csv",document.body.appendChild(l),l.click(),l.remove(),URL.revokeObjectURL(l.href)}function ce(e,t){e.textContent=t,e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"center"})}function S(e){e.textContent="",e.classList.add("hidden")}export{Je as CalculadoraRegresionCompleta};
