import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBI4i50m6VuDyBonAVJ21xxe5TTs0zqDtQ",
  authDomain: "landing-page-4a0f6.firebaseapp.com",
  projectId: "landing-page-4a0f6",
  storageBucket: "landing-page-4a0f6.appspot.com", // Fixed the storage bucket URL
  messagingSenderId: "840363246203",
  appId: "1:840363246203:web:d93b8e75b6c759df6258de",
  measurementId: "G-5WCLH1H7J8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, auth, db, analytics };
