// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQPvJcZfyfIXuFQ2__YonoCwMJf9ObOY4",
  authDomain: "fir-intro-af831.firebaseapp.com",
  projectId: "fir-intro-af831",
  storageBucket: "fir-intro-af831.firebasestorage.app",
  messagingSenderId: "759006969828",
  appId: "1:759006969828:web:0c66f3ebe20ffb5f74d1f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}