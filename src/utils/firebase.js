// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqgyYAxpE4tFIu4N4I7VzWZ6086Oib4JE",
  authDomain: "cinebite-f6bc3.firebaseapp.com",
  projectId: "cinebite-f6bc3",
  storageBucket: "cinebite-f6bc3.firebasestorage.app",
  messagingSenderId: "1010181202607",
  appId: "1:1010181202607:web:976741e860ca012dae6a5a",
  measurementId: "G-8PS09B6D0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();