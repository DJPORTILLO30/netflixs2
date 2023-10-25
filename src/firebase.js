// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIYaDBE_ligP7eKg71jQAV2RuV0FYICfk",
  authDomain: "proyecto-telecomunicacio-7e0e4.firebaseapp.com",
  projectId: "proyecto-telecomunicacio-7e0e4",
  storageBucket: "proyecto-telecomunicacio-7e0e4.appspot.com",
  messagingSenderId: "721758176763",
  appId: "1:721758176763:web:614c4788cb874831c3f75e",
  measurementId: "G-K87V1WEWCQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);