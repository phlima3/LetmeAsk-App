import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKKoZH-8KIvC7C736ztiWmzxq0E6NohWg",
  authDomain: "letmeask-5b89b.firebaseapp.com",
  databaseURL: "https://letmeask-5b89b-default-rtdb.firebaseio.com",
  projectId: "letmeask-5b89b",
  storageBucket: "letmeask-5b89b.appspot.com",
  messagingSenderId: "152631992690",
  appId: "1:152631992690:web:86825375fc006b4937fdeb",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
