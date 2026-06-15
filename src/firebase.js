// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4dI45-NpxCHdbGtKOVveiGgYwV-1NsAY",
  authDomain: "fadhilidada-8b70d.firebaseapp.com",
  projectId: "fadhilidada-8b70d",
  storageBucket: "fadhilidada-8b70d.firebasestorage.app",
  messagingSenderId: "606113841679",
  appId: "1:606113841679:web:4e7f919e8d2902a687197a",
  measurementId: "G-VLKYJ0VL0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export for use in other components
export { app, analytics, db };
