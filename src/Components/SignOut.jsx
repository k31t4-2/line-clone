import React from 'react'
import { Button } from "@mui/material";
import { auth } from "../firebase";

function SignOut() {
  return (
    <>
      <Button onClick={() => auth.signOut()}>サインアウト</Button>
    </>
  )
}

export default SignOut
