import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Result } from "postcss";

const firebaseConfig = {
    apiKey: "AIzaSyAmju9d3qGyAt0sU1g6g7N4wc4ulfiMtbA",
    authDomain: "movie-library-8ad9c.firebaseapp.com",
    projectId: "movie-library-8ad9c",
    storageBucket: "movie-library-8ad9c.appspot.com",
    messagingSenderId: "1039616983657",
    appId: "1:1039616983657:web:2a1e4c23c72d4b64b8d8f8",
    measurementId: "G-0X2RPMYTMV"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => signInWithPopup(auth,provider);