// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANV4JUrK2wYWHQKdnClAw_sEsi35Vpkag",
    authDomain: "career-mentoring-5d120.firebaseapp.com",
    projectId: "career-mentoring-5d120",
    storageBucket: "career-mentoring-5d120.appspot.com",
    messagingSenderId: "4728811768",
    appId: "1:4728811768:web:8b5d898d6b5ef2cea78b0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;