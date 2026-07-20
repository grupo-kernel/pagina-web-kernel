import { auth } from "../firebase/firebaseConfig.js";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";

export async function iniciarSesion(email, password) {
  await setPersistence(auth, inMemoryPersistence);

  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
}

export async function cerrarSesion() {
  return await signOut(auth);
}

export function observarSesion(callback) {
  return onAuthStateChanged(auth, callback);
}

export { auth };
