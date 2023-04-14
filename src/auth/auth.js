import React, { useEffect, useState } from "react";
import loginApp from "./firebase";

export const AuthContext = React.createContext();


const LoginPage = () => {
  const [ currentUser ,setCurrentUser] = useState(null);

  useEffect( () => {
    loginApp.auth().onAuthState
  })

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleSignIn}>Google Sign In</button>
      <button onClick={(() => loginApp.auth().signOut())} >sign out</button>
    </div>
  );
};

export default LoginPage;
