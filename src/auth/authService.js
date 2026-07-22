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

async function configurarPersistencia() {
  try {
    await setPersistence(auth, browserSessionPersistence);
  } catch (error) {
    console.warn(
      "No fue posible conservar la sesión en el navegador; se utilizará memoria temporal.",
      error
    );
    await setPersistence(auth, inMemoryPersistence);
  }
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

export function observarSesion(callback) {
  return onAuthStateChanged(auth, callback);
}

export { auth };
