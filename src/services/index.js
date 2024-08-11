// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBj4Qq9-P8h0_Sx7450Yelw9DzlZvNv6Q4",
    authDomain: "javierpoblete-bef43.firebaseapp.com",
    projectId: "javierpoblete-bef43",
    storageBucket: "javierpoblete-bef43.appspot.com",
    messagingSenderId: "859862238837",
    appId: "1:859862238837:web:623ac598ea2b33e90bda3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);