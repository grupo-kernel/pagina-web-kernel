import { iniciarSesion } from "./authService.js";

export function crearLogin(onSuccess) {
  const section = document.createElement("section");

  section.className = `
    min-h-[70vh]
    flex items-center justify-center
    px-6 py-12
  `;

  section.innerHTML = `
    <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">

      <h1 class="text-3xl font-black text-slate-900 mb-2">
        Laboratorio Inteligente
      </h1>

      <p class="text-slate-500 mb-8">
        Acceso exclusivo para investigadores autorizados.
      </p>

      <form id="kernel-login" class="space-y-5">

        <div>
          <label class="block mb-2 font-semibold">
            Correo electrónico
          </label>

          <input
            id="correo"
            type="email"
            class="w-full rounded-xl border px-4 py-3"
            required
          />
        </div>

        <div>
          <label class="block mb-2 font-semibold">
            Contraseña
          </label>

          <input
            id="password"
            type="password"
            class="w-full rounded-xl border px-4 py-3"
            required
          />
        </div>

        <button
          class="w-full bg-blue-700 text-white rounded-xl py-3 font-bold hover:bg-blue-800"
          type="submit">
          Iniciar sesión
        </button>

        <p
          id="login-error"
          class="hidden text-red-600 text-sm font-semibold">
        </p>

      </form>

    </div>
  `;

  const form = section.querySelector("#kernel-login");
const error = section.querySelector("#login-error");
const correoInput = section.querySelector("#correo");
const passwordInput = section.querySelector("#password");
const botonEnviar = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
  e.preventDefault();

  error.classList.add("hidden");
  error.textContent = "";

  const email = correoInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    error.textContent =
      "Introduzca el correo electrónico y la contraseña.";

    error.classList.remove("hidden");
    return;
  }

  botonEnviar.disabled = true;
  botonEnviar.textContent = "Verificando...";

  try {
    await iniciarSesion(email, password);

    if (onSuccess) {
      await onSuccess();
    }
  } catch (err) {
    console.error("Error de autenticación:", err);

    const mensajes = {
      "auth/invalid-email":
        "El correo electrónico no tiene un formato válido.",

      "auth/invalid-credential":
        "El correo o la contraseña son incorrectos.",

      "auth/user-not-found":
        "El correo no está autorizado.",

      "auth/wrong-password":
        "El correo o la contraseña son incorrectos.",

      "auth/user-disabled":
        "Este usuario está deshabilitado.",

      "auth/too-many-requests":
        "Demasiados intentos. Espere unos minutos e inténtelo nuevamente.",

      "auth/network-request-failed":
        "No fue posible conectarse con Firebase. Revise su conexión.",

      "auth/unauthorized-domain":
        "El dominio de Grupo Kernel no está autorizado en Firebase."
    };

    error.textContent =
      mensajes[err.code] ||
      `No fue posible iniciar sesión. Error: ${err.code || "desconocido"}`;

    error.classList.remove("hidden");
  } finally {
    botonEnviar.disabled = false;
    botonEnviar.textContent = "Iniciar sesión";
  }
});
  return section;
}
