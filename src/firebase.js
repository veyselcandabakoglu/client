// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPud9yten-Sz1KTd3gUzbU4p9TVQzFShg",
  authDomain: "whatsap-clone-b9522.firebaseapp.com",
  projectId: "whatsap-clone-b9522",
  storageBucket: "whatsap-clone-b9522.appspot.com",
  messagingSenderId: "956826591253",
  appId: "1:956826591253:web:8686fae1eb43f60f756e1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();


