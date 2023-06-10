import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCw-pneelXpOmJXbO0JJDJlywEY6iw2AnE",
  authDomain: "react-line-clone-ad075.firebaseapp.com",
  projectId: "react-line-clone-ad075",
  storageBucket: "react-line-clone-ad075.appspot.com",
  messagingSenderId: "1000052778536",
  appId: "1:1000052778536:web:3249194c9e96ea1b80371d"
});

// どのDBを使うかを変数に入れる
const db = firebaseApp.firestore();
//認証機能を使いたいのでここで呼び出す
const auth = firebase.auth();

export { db, auth };
