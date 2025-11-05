// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo1whvmG5qp7fqbbmrXEVNKoMXJlP--Zw",
  authDomain: "toy-topia-85ae1.firebaseapp.com",
  projectId: "toy-topia-85ae1",
  storageBucket: "toy-topia-85ae1.firebasestorage.app",
  messagingSenderId: "574477977579",
  appId: "1:574477977579:web:83e17294191d23aa833bae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);