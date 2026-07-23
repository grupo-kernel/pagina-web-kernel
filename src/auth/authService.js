import { auth } from "../firebase/firebaseConfig.js";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
  sendPasswordResetEmail,
} from "firebase/auth";

let promesaPersistencia = null;

function configurarPersistencia() {
  if (!promesaPersistencia) {
    promesaPersistencia = (async () => {
      try {
        await setPersistence(auth, browserSessionPersistence);
      } catch (error) {
        console.warn(
          "No fue posible conservar la sesión en el navegador; se utilizará memoria temporal.",
          error
        );
        await setPersistence(auth, inMemoryPersistence);
      }
    })().catch((error) => {
      promesaPersistencia = null;
      throw error;
    });
  }

  return promesaPersistencia;
}

export async function iniciarSesion(email, password) {
  await configurarPersistencia();

  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
}

export async function enviarRecuperacionContrasena(email) {
  return sendPasswordResetEmail(
    auth,
    String(email || "").trim()
  );
}

export async function cerrarSesion() {
  return signOut(auth);
}

export function observarSesion(callback, onError) {
  return onAuthStateChanged(auth, callback, onError);
}

export { auth };
