import { useState,createContext, useEffect } from "react";

import { signInWithPopup } from "firebase/auth";
import { db, firebaseauth, provider } from "./store";
import { getDatabase,ref, set,get, child, remove } from "firebase/database";

import { useAuthState} from 'react-firebase-hooks/auth'

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const [email, setEmail ]= useState('');
    const [user, setUser]= useAuthState(firebaseauth)
    const [username,setUsername] = useState();
    const [bookmarksId,setBookmarksId] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [authed,setAuthed] = useState(false)
    const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(false);
    
    const database = ref(db)
    
    // Auth state change

    // useEffect(()=>{
    //     const unsubscribe = firebaseauth.onAuthStateChanged((firebaeuser)=>{
    //         if(firebaeuser){
    //             setUser(firebaeuser)
    //         }else{
    //             setUser(null);
    //         }
    //     });
    //     return unsubscribe
    //   },[]); 
    // // Login with Gmail

    const logInWithGmail = (e) => {
        e.preventDefault()
        signInWithPopup(firebaseauth,provider)
         .then((result) => {
           const user = result.user;
           setUsername(firebaseauth.currentUser.displayName)
         })
    }
    // //  Logout user
    const logmeout =() =>{
        firebaseauth.signOut();
        setAuthed(false)}

    // Bookmark

    //onBookmark
    const onBookmark=(movieId)=>{
                         
        set(ref(db, `users/${firebaseauth.currentUser.displayName}/watchlist/${movieId}`), {
            movie: {movieId},
          });
          setIsAddedToWatchlist(true)
     }

     const removeBookmark=(movieId)=>{
                         
        remove(ref(db, `users/${firebaseauth.currentUser.displayName}/watchlist/${movieId}`), {
            movie: {movieId},
          });
          setIsAddedToWatchlist(false)
     }
   
    return(
        <AuthContext.Provider
        value={{
            logInWithGmail,logmeout,authed,bookmarks,bookmarksId,user,onBookmark,removeBookmark,username,isAddedToWatchlist,setIsAddedToWatchlist
          }}
        >
            {children}
        </AuthContext.Provider>
    )
}