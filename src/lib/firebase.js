import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-bati.firebaseapp.com",
  projectId: "chat-bati",
  storageBucket: "chat-bati.firebasestorage.app",
  messagingSenderId: "794168503185",
  appId: "1:794168503185:web:325bd2066157e0bc380830",
  measurementId: "G-GCXQKH0YPX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();