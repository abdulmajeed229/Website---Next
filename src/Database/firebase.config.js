// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvy14aDE93Butd0u1__XNYN1ufU2d51vk",
  authDomain: "my-bank-project-d91aa.firebaseapp.com",
  projectId: "my-bank-project-d91aa",
  storageBucket: "my-bank-project-d91aa.appspot.com",
  messagingSenderId: "250838954912",
  appId: "1:250838954912:web:526c6d74ef9a7428d1aac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);

export const db = getFirestore(app);
