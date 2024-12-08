// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcNmMRLw8wYnzwGkUfrdK8jR-Mkzh_Uhw",
  authDomain: "cooking-recipe-2990b.firebaseapp.com",
  projectId: "cooking-recipe-2990b",
  storageBucket: "cooking-recipe-2990b.firebasestorage.app",
  messagingSenderId: "710048560465",
  appId: "1:710048560465:web:59da32836ca0fc8bb7cf70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
