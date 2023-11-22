// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-project-2023.firebaseapp.com",
  projectId: "mern-real-estate-project-2023",
  storageBucket: "mern-real-estate-project-2023.appspot.com",
  messagingSenderId: "149750055058",
  appId: "1:149750055058:web:5d8dd2e1611986720c264b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);