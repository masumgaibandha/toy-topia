import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateProfileFunc = (displayName, photoURL)=>{
   return updateProfile(auth.currentUser, {
              displayName,
              photoURL,
            })
  }
  const sendEmailVerificationFunc = ()=>{
    return sendEmailVerification(auth.currentUser)
  }

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signWithEmailAndPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signWithEmailFunc = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutWithUserFunc = () =>{
   return signOut(auth)
  };
  const sendPassResetFunc = (email)=>{
    sendPasswordResetEmail(auth, email)
    
  }

  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signWithEmailAndPasswordFunc,
    signWithEmailFunc,
    signOutWithUserFunc, 
    sendPassResetFunc, 
    sendEmailVerificationFunc,
    updateProfileFunc,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
