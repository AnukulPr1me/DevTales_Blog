// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "devtales-d2229.firebaseapp.com",
  projectId: "devtales-d2229",
  storageBucket: "devtales-d2229.appspot.com",
  messagingSenderId: "218253376502",
  appId: "1:218253376502:web:22d1c6aee43b69fd5d25d7",
  measurementId: "G-N7V4JSG16T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
