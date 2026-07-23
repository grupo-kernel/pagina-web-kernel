import{e as x,i as f}from"./authService-CgfoSPdf.js";import"./firebase-BzP43VG7.js";function g(c){const e=document.createElement("section");e.className=`
    min-h-[70vh]
    flex items-center justify-center
    px-4 py-12 md:px-6
    font-sans
  `,e.innerHTML=`
    <div class="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
      <div class="absolute -top-24 -right-20 h-52 w-52 rounded-full bg-sky-100/70"></div>
      <div class="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-indigo-100/60"></div>

      <div class="relative z-10 p-7 md:p-10">
        <button
          type="button"
          data-action="volver-inicio"
          class="mb-7 inline-flex items-center gap-2 text-sm font-black text-sky-700 hover:text-sky-900"
        >
          <span aria-hidden="true">←</span>
          Volver a la portada
        </button>

        <div class="mb-7 flex items-start gap-4">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 text-2xl text-sky-700">
            🔐
          </div>
          <div>
            <p class="mb-1 text-xs font-black uppercase tracking-[0.18em] text-sky-700">
              Área protegida
            </p>
            <h1 class="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
              Laboratorio Inteligente
            </h1>
          </div>
        </div>

        <p class="mb-8 leading-relaxed text-slate-600">
          Acceso exclusivo para investigadores autorizados. La sesión se conservará mientras permanezca activa la sesión del navegador.
        </p>

        <form id="kernel-login" class="space-y-5" novalidate>
          <label class="block">
            <span class="mb-2 block font-black text-slate-800">
              Correo electrónico
            </span>
            <input
              id="correo"
              name="correo"
              type="email"
              autocomplete="username"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
              required
            />
          </label>

          <label class="block">
            <span class="mb-2 block font-black text-slate-800">
              Contraseña
            </span>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
              required
            />
          </label>

          <label class="flex cursor-pointer items-center gap-3 text-sm font-semibold text-slate-600">
            <input
              type="checkbox"
              data-action="mostrar-password"
              class="h-4 w-4 rounded border-slate-300"
            />
            Mostrar contraseña
          </label>

          <button
            class="w-full rounded-xl bg-blue-700 px-6 py-4 font-black text-white shadow-lg transition hover:bg-blue-800 disabled:cursor-wait disabled:opacity-60"
            type="submit"
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            data-action="recuperar-password"
            class="w-full rounded-xl border border-sky-300 px-6 py-3 font-black text-sky-800 transition hover:bg-sky-50 disabled:cursor-wait disabled:opacity-60"
          >
            Recuperar contraseña
          </button>

          <div
            id="login-mensaje"
            class="hidden rounded-2xl border p-4 text-sm font-semibold leading-relaxed"
            role="status"
            aria-live="polite"
          ></div>
        </form>

        <p class="mt-7 text-center text-xs leading-relaxed text-slate-500">
          Los datos introducidos en las calculadoras se procesan localmente en el navegador y no se envían al servidor del Grupo Kernel.
        </p>
      </div>
    </div>
  `;const d=e.querySelector("#kernel-login"),i=e.querySelector("#login-mensaje"),r=e.querySelector("#correo"),u=e.querySelector("#password"),l=d.querySelector('button[type="submit"]'),a=e.querySelector("[data-action='recuperar-password']"),b=e.querySelector("[data-action='mostrar-password']"),t=(s,n="error")=>{i.textContent=s,i.className=["rounded-2xl border p-4 text-sm font-semibold leading-relaxed",n==="exito"?"border-emerald-200 bg-emerald-50 text-emerald-900":"border-red-200 bg-red-50 text-red-900"].join(" ")},p=()=>{i.className="hidden",i.textContent=""};return e.querySelector("[data-action='volver-inicio']")?.addEventListener("click",()=>{window.location.hash="/home"}),b?.addEventListener("change",()=>{u.type=b.checked?"text":"password"}),a?.addEventListener("click",async()=>{p();const s=r.value.trim();if(!s||!r.checkValidity()){t("Introduzca primero un correo electrónico válido."),r.focus();return}const n=a.textContent;a.disabled=!0,a.textContent="Enviando instrucciones...";try{await x(s),t("Si el correo está autorizado, recibirá instrucciones para restablecer la contraseña. Revise también la carpeta de correo no deseado.","exito")}catch(o){console.error("Error al solicitar recuperación:",o),o?.code==="auth/invalid-email"?t("El correo electrónico no tiene un formato válido."):o?.code==="auth/too-many-requests"?t("Se realizaron demasiadas solicitudes. Espere unos minutos antes de intentarlo nuevamente."):o?.code==="auth/network-request-failed"?t("No fue posible conectarse con Firebase. Revise su conexión."):t("Si el correo está autorizado, recibirá instrucciones para restablecer la contraseña.","exito")}finally{a.disabled=!1,a.textContent=n}}),d.addEventListener("submit",async s=>{s.preventDefault(),p();const n=r.value.trim(),o=u.value;if(!n||!o){t("Introduzca el correo electrónico y la contraseña.");return}if(!r.checkValidity()){t("El correo electrónico no tiene un formato válido."),r.focus();return}l.disabled=!0,l.textContent="Verificando...";try{await f(n,o),c&&await c()}catch(m){console.error("Error de autenticación:",m),t({"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo o la contraseña son incorrectos.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."}[m?.code]||"No fue posible iniciar sesión. Inténtelo nuevamente.")}finally{l.disabled=!1,l.textContent="Iniciar sesión"}}),e}export{g as crearLogin};
