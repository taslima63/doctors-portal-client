// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnyhMMS2XCv-qRhKGk9TgqOTpoQcVaWDg",
    authDomain: "doctors-portal-fba32.firebaseapp.com",
    projectId: "doctors-portal-fba32",
    storageBucket: "doctors-portal-fba32.appspot.com",
    messagingSenderId: "6849286083",
    appId: "1:6849286083:web:74bbb6aa02b3b05efa7776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;