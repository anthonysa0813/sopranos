// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRKx1jUvd6ud98s5tQvZpw_V8KBu04EcQ",
  authDomain: "sopranos-prueba.firebaseapp.com",
  projectId: "sopranos-prueba",
  storageBucket: "sopranos-prueba.appspot.com",
  messagingSenderId: "504774488865",
  appId: "1:504774488865:web:aebd6c076eca446d830460",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
