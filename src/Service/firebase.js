// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi0R6GyxCND5XHTpGU5E_PbKVz6wCXi60",
  authDomain: "camtrackapp.firebaseapp.com",
  projectId: "camtrackapp",
  storageBucket: "camtrackapp.appspot.com",
  messagingSenderId: "743030752229",
  appId: "1:743030752229:web:94017b9d83f01f183ea50c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const databaseAuth = getAuth(app) 