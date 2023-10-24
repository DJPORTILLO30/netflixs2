// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSsC3MHQo5DeCxCJyrspNBqUhI97KRsDs",
  authDomain: "netflixs2.firebaseapp.com",
  projectId: "netflixs2",
  storageBucket: "netflixs2.appspot.com",
  messagingSenderId: "849483844023",
  appId: "1:849483844023:web:0bb49fbe7f630700ed0032",
  measurementId: "G-MN884WQNGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);