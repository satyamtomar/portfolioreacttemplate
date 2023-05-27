

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARNGq7LwbO-BLo-2KLAJ-on3sX03KuP0Y",
  authDomain: "borhan-33e53.firebaseapp.com",
  projectId: "borhan-33e53",
  storageBucket: "borhan-33e53.appspot.com",
  messagingSenderId: "555350237679",
  appId: "1:555350237679:web:29af2db443a67b57e9d61a",
  measurementId: "G-5K4GNCVQHG"
};
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth = getAuth(app);





