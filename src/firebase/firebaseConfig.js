// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe3j-n08Gv7sLJgo1bpblAe_RiE8HFrWE",
  authDomain: "valenciana-ecommerce.firebaseapp.com",
  projectId: "valenciana-ecommerce",
  storageBucket: "valenciana-ecommerce.firebasestorage.app",
  messagingSenderId: "707701962214",
  appId: "1:707701962214:web:c15e9f7965044e02745227",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Funcion para registrar nuevos usuarios:
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error(error);
  }
};
