/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATuhrdX-SINtPKDswpFn94RvxGBVZ9WX8",
  authDomain: "repair-zone-e11f8.firebaseapp.com",
  projectId: "repair-zone-e11f8",
  storageBucket: "repair-zone-e11f8.appspot.com",
  messagingSenderId: "974200538184",
  appId: "1:974200538184:web:93c076ed62cb5874fc447d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


