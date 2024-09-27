import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0woJQZdF3cxf1OIyAu97u6lz95Se5Pd4",
  authDomain: "resver-12909.firebaseapp.com",
  projectId: "resver-12909",
  storageBucket: "resver-12909.appspot.com",
  messagingSenderId: "630362934867",
  appId: "1:630362934867:web:c73d8a41d195123f6600a6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const auth = getAuth(app); 
