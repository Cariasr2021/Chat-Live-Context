import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAFMxNyfAAWlJssHFX-CArT5ZCwp9TIAFA",
    authDomain: "chat-live-1.firebaseapp.com",
    projectId: "chat-live-1",
    storageBucket: "chat-live-1.appspot.com",
    messagingSenderId: "676556028895",
    appId: "1:676556028895:web:bad57a9746f9b2fda4a26a"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider }