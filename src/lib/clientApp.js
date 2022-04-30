import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjKNjbpyUEbV5xRDfzxEsW935GmENGGvw",
  authDomain: "journey-345d5.firebaseapp.com",
  projectId: "journey-345d5",
  storageBucket: "journey-345d5.appspot.com",
  messagingSenderId: "153057873783",
  appId: "1:153057873783:web:d2a1124a0b77359d2adb72",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firebaseApp = firebase.app();
const firebaseAuth = firebase.auth();
const firebaseDb = firebase.firestore();
const firebaseNow = firebase.firestore.Timestamp.now();
const firebaseStorage = firebase.storage();

export {
  firebaseApp,
  firebaseAuth,
  firebaseDb,
  firebaseNow,
  firebaseStorage,
  uploadBytesResumable,
};

console.log(
  firebaseApp.name ? "Firebase Mode Activated!" : "Firebase not working :("
);
