// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW4iSBR0AvULRL2xtHwUHvdOLiWNdYKj4",
  authDomain: "airtaska-auth.firebaseapp.com",
  projectId: "airtaska-auth",
  storageBucket: "airtaska-auth.appspot.com",
  messagingSenderId: "20061363235",
  appId: "1:20061363235:web:723e519ace7927a0552596",
  measurementId: "G-9KKHMPFZV8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
