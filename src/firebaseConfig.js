import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXIXooBxnl7RFxZV5OBDJ9reNBePRbHZQ",
  authDomain: "studentportalmanagementsystem.firebaseapp.com",
  projectId: "studentportalmanagementsystem",
  storageBucket: "studentportalmanagementsystem.firebasestorage.app",
  messagingSenderId: "348601817038",
  appId: "1:348601817038:web:ba544f2d1ee78a6375bd9f",
  measurementId: "G-N6W2151H5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);