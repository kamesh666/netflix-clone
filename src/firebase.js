import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzXmBR8td7op7inNbGuQAZXUj1MgvgqFU",
  authDomain: "netflix-clone-b6d3d.firebaseapp.com",
  projectId: "netflix-clone-b6d3d",
  storageBucket: "netflix-clone-b6d3d.appspot.com",
  messagingSenderId: "717836937339",
  appId: "1:717836937339:web:74842e8c9c7a6506389ade",
  measurementId: "G-Y85VMVVJVL",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
