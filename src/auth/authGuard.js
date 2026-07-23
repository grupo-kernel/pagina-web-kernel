import { auth, observarSesion } from "./authService.js";

const TIEMPO_MAXIMO_AUTENTICACION_MS = 10000;
let promesaEstadoInicial = null;

function errorTiempoAutenticacion() {
  const error = new Error(
    "La verificación de la sesión tardó más de lo esperado."
  );
  error.code = "kernel/auth-timeout";
  return error;
}

function obtenerEstadoInicial() {
  if (!promesaEstadoInicial) {
    promesaEstadoInicial = new Promise((resolve, reject) => {
      let finalizada = false;
      let unsubscribe = null;

      const finalizar = (continuar, valor) => {
        if (finalizada) return;
        finalizada = true;
        window.clearTimeout(temporizador);
        unsubscribe?.();
        continuar(valor);
      };

      const temporizador = window.setTimeout(
        () => finalizar(reject, errorTiempoAutenticacion()),
        TIEMPO_MAXIMO_AUTENTICACION_MS
      );

      try {
        unsubscribe = observarSesion(
          (user) => finalizar(resolve, user),
          (error) => finalizar(reject, error)
        );
        if (finalizada) {
          unsubscribe?.();
        }
      } catch (error) {
        finalizar(reject, error);
      }
    }).catch((error) => {
      // Permite un nuevo intento después de un fallo transitorio de Firebase.
      promesaEstadoInicial = null;
      throw error;
    });
  }

  return promesaEstadoInicial;
}

export function esperarAutenticacion() {
  if (auth.currentUser) {
    return Promise.resolve(auth.currentUser);
  }

  return obtenerEstadoInicial().then(() => auth.currentUser);
}

export function usuarioActual() {
  return auth.currentUser;
}
