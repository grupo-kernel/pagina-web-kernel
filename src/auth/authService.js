import { auth } from "../firebase/firebaseConfig.js";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export async function iniciarSesion(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function cerrarSesion() {
  return await signOut(auth);
}

export function observarSesion(callback) {
  return onAuthStateChanged(auth, callback);
}

export { auth };
