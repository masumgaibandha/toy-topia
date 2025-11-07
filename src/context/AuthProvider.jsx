import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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
  const [loading, setLoading] = useState(true);

  const updateProfileFunc = (displayName, photoURL)=>{
   return updateProfile(auth.currentUser, {
              displayName,
              photoURL,
            })
  }
  const sendEmailVerificationFunc = ()=>{
    setLoading(true);
    return sendEmailVerification(auth.currentUser)
  }

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signWithEmailFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutWithUserFunc = () =>{
    setLoading(true);
   return signOut(auth)
  };
  const sendPassResetFunc = (email)=>{
    // setLoading(true);
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
    loading,
    setLoading,
  };
  useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
   console.log(currentUser) 
   setUser(currentUser)
   setLoading(false)
  })
  return () =>{
    unSubscribe()
  }
  }, [])
  
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
