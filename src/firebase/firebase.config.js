// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGtSyZ3uhSGwsvlJcxFyFnnpXPnWYR9Mw",
    authDomain: "entertainment-freak.firebaseapp.com",
    projectId: "entertainment-freak",
    storageBucket: "entertainment-freak.appspot.com",
    messagingSenderId: "561153558042",
    appId: "1:561153558042:web:460ad998b81b08f0e433a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;