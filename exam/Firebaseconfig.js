// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdvguUK1zSP949K3kr-YtOeQnQ9GPLd_k",
  authDomain: "exam-3debd.firebaseapp.com",
  projectId: "exam-3debd",
  storageBucket: "exam-3debd.firebasestorage.app",
  messagingSenderId: "607313886956",
  appId: "1:607313886956:web:7233df2037b7727a6aafc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}