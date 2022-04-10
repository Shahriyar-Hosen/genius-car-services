// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnzBhn1jMH7R8pOVNuL7PoNmwK09ZmPqs",
  authDomain: "genius-car-services-c6c6e.firebaseapp.com",
  projectId: "genius-car-services-c6c6e",
  storageBucket: "genius-car-services-c6c6e.appspot.com",
  messagingSenderId: "151877134818",
  appId: "1:151877134818:web:1b5e4449f56772046931bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
