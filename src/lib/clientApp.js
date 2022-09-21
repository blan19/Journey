import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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
