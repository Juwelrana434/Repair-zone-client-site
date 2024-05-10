// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3mo4g-zerVuzmYPd_seCU913C3brrHGI",
  authDomain: "dream-destination-c0b6b.firebaseapp.com",
  projectId: "dream-destination-c0b6b",
  storageBucket: "dream-destination-c0b6b.appspot.com",
  messagingSenderId: "1027033610471",
  appId: "1:1027033610471:web:358d6c4b554c540d8f0a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);