// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2pHaZ9995K07s4-cuYmQ22hv9W7jBjpI",
  authDomain: "realtor-clone-717bf.firebaseapp.com",
  projectId: "realtor-clone-717bf",
  storageBucket: "realtor-clone-717bf.appspot.com",
  messagingSenderId: "227828241091",
  appId: "1:227828241091:web:a4b94b1c77777cd23b8876"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore (); 