// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0pcdfbeQCYNJF7_r67RO5uhGDHA4LjxQ",
  authDomain: "insta2-db2ea.firebaseapp.com",
  projectId: "insta2-db2ea",
  storageBucket: "insta2-db2ea.appspot.com",
  messagingSenderId: "862655671179",
  appId: "1:862655671179:web:47e6451026b19582efdd8e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
