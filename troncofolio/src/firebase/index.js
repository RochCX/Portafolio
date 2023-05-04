import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHjlMEqyDQZsH-DB5hOO8t9Am6PCt6rXw",
    authDomain: "troncofolio.firebaseapp.com",
    projectId: "troncofolio",
    storageBucket: "troncofolio.appspot.com",
    messagingSenderId: "773984529406",
    appId: "1:773984529406:web:300093e335eff037162eaf"
    };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    auth,
    db
};