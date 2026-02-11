// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

// 1. REPLACE THESE WITH YOUR OWN FIREBASE KEYS LATER
// Go to https://console.firebase.google.com/ to get them.
const firebaseConfig = {
    apiKey: "AIzaSyAc4G6cK4Pg8OU-HihO81po8fQ5wIMfng8",
    authDomain: "caloriestax.firebaseapp.com",
    projectId: "caloriestax",
    storageBucket: "caloriestax.firebasestorage.app",
    messagingSenderId: "394770673821",
    appId: "1:394770673821:web:200d8c302cf5651bffa474"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');

//https://caloriestax.firebaseapp.com/__/auth/handler