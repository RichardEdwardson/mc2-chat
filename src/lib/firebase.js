// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtUuBmfvigXCKhRkk2MCqQPwEvtsAHPlo",
  authDomain: "mc2-chat.firebaseapp.com",
  projectId: "mc2-chat",
  storageBucket: "mc2-chat.appspot.com",
  messagingSenderId: "566076815772",
  appId: "1:566076815772:web:505c464a953e252315b059",
  measurementId: "G-V65JNPN24F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);