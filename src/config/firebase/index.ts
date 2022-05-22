// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAvYOzQ8XeUXTvqABY9EhG6d-rIjMDZE_8",
  authDomain: "tucmc-schedule-generator.firebaseapp.com",
  projectId: "tucmc-schedule-generator",
  storageBucket: "tucmc-schedule-generator.appspot.com",
  messagingSenderId: "590002889282",
  appId: "1:590002889282:web:5679b8ff0d8f5cbc5883db",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
