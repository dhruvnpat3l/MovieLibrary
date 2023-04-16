import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database' 

const firebaseConfig = {
  apiKey: "AIzaSyCe-FOz3sUSwUgx0rVQ6jBX6vlxKp3EJtE",
  authDomain: "moovie-2f05b.firebaseapp.com",
  projectId: "moovie-2f05b",
  storageBucket: "moovie-2f05b.appspot.com",
  messagingSenderId: "256439826916",
  appId: "1:256439826916:web:f42ad9b8edb8b872782ff1",
  measurementId: "G-P0Q815Y7CC"
  };

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
export const firebaseauth = getAuth(app)

export const provider = new GoogleAuthProvider();


