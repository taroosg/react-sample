// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-test-9cfa8.firebaseapp.com",
  projectId: "react-test-9cfa8",
  storageBucket: "react-test-9cfa8.appspot.com",
  messagingSenderId: "996887866760",
  appId: "1:996887866760:web:9607574c9f9659b9b05e3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
