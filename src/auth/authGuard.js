import { auth, observarSesion } from "./authService.js";

export function esperarAutenticacion() {
  return new Promise((resolve) => {
    const unsubscribe = observarSesion((user) => {
      unsubscribe();
      resolve(user);
    });
  });
}

export function usuarioActual() {
  return auth.currentUser;
}
