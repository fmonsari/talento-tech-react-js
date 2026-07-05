// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjeDnRhSGK6bvvJXHTDbS4KqMzgEtz5-M",
  authDomain: "proyecto-tt-federico-onsari.firebaseapp.com",
  projectId: "proyecto-tt-federico-onsari",
  storageBucket: "proyecto-tt-federico-onsari.firebasestorage.app",
  messagingSenderId: "422302906210",
  appId: "1:422302906210:web:6064790e15451cb2085e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para cuando veamos el login
const auth = getAuth(app);

export { db, auth };