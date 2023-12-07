// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-mern-d088e.firebaseapp.com",
  projectId: "realestate-mern-d088e",
  storageBucket: "realestate-mern-d088e.appspot.com",
  messagingSenderId: "743955429726",
  appId: "1:743955429726:web:5c6c8f2cdbfc3b7577f7cf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
