// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxRzb_XRswkD9U4e1JVk_t3xNaWRr1oeo",
    authDomain: "desafio-sistema-usuarios.firebaseapp.com",
    projectId: "desafio-sistema-usuarios",
    storageBucket: "desafio-sistema-usuarios.appspot.com",
    messagingSenderId: "1096424922058",
    appId: "1:1096424922058:web:5335455b86e8ad59588d33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;