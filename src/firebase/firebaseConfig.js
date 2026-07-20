import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",
  authDomain: "kernel-laboratorio.firebaseapp.com",
  projectId: "kernel-laboratorio",
  storageBucket: "kernel-laboratorio.firebasestorage.app",
  messagingSenderId: "1079989513841",
  appId: "1:1079989513841:web:f5f588c60b2254531bf5d0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
