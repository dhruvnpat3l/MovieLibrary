import React, { useEffect, useState } from "react";
import { signInWithGoogle } from "./firebase";

export const AuthContext = React.createContext();


export default function Login() {

  return(
    <div>
       <button onClick={signInWithGoogle}>Sign</button>
    </div>
  )
}
