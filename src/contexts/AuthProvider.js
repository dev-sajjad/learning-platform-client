import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // create user with provider like google, facebook, github
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
    };
    
    //facebook
    const porviderLoginFacebook = (provider) => {
        return signInWithPopup(auth, provider)
    }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // observer of the state change....if state null, state will be cleaned instant.
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser === null || currentUser.emailVerified) {
            setUser(currentUser)
        }
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);

  // auth info object
  const authInfo = {
    user,
    loading,
    providerLogin,
    setUser,
    logOut,
    createUser,
    signIn,
    updateUserProfile,
    verifyEmail,
    porviderLoginFacebook,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
