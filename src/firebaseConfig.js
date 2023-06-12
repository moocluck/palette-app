import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "palette-app-eb021.firebaseapp.com",
  databaseURL:
    "https://palette-app-eb021-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "palette-app-eb021",
  storageBucket: "palette-app-eb021.appspot.com",
  messagingSenderId: "329303954227",
  appId: "1:329303954227:web:da9e083b7f759f5a362446",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
