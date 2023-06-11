import React from 'react'
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

function SignIn() {

  const signInWithGoogle = () => {
    // 1,firebaseが用意している、googleの認証機能（ログイン機能）を使えるようにする。
    const provider = new firebase.auth.GoogleAuthProvider();
    // 2,下の記述を書くことで、認証機能（ログイン機能）をpopupでログインができるようになる
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <div>
        <Button onClick={signInWithGoogle}>グーグルでログインします</Button>
      </div>
    </>
  )
}

export default SignIn
