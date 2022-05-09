// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC20tOIAJnfZd-cjI1RpUyceOLbNV6_464",
  authDomain: "sharecost-53973.firebaseapp.com",
  projectId: "sharecost-53973",
  storageBucket: "sharecost-53973.appspot.com",
  messagingSenderId: "547997164364",
  appId: "1:547997164364:web:8cdb4dfbabcde60dbca5e9",
  measurementId: "G-M67LPMTVX8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
