
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC4LiCc-7Heehc1QNwxWtmZhIE6DJSSmQE",
  authDomain: "tour-travel-website-ae6e3.firebaseapp.com",
  projectId: "tour-travel-website-ae6e3",
  storageBucket: "tour-travel-website-ae6e3.firebasestorage.app",
  messagingSenderId: "457683155290",
  appId: "1:457683155290:web:6fd2a39a8ef152cb069b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth };
export { db };
export { storage };

export { app };