/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../context";
import { auth } from "../firebase.init";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const createUserEmailAndPassword = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      console.error("Error in createUserEmailAndPassword:", error);
      throw error;
    }
  };

  const CreateUserWithGoogle = async (provider) => {
    try {
      return await signInWithPopup(auth, provider);
    } catch (error) {
      setError(error.message);
      console.error("Error in CreateUserWithGoogle:", error);
      throw error;
    }
  };

  const loginUserWithEmailAndPassword = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      console.error("Error in loginUserWithEmailAndPassword:", error);
      throw error;
    }
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      console.log("from useEffect:", currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    error,
    createUserEmailAndPassword,
    CreateUserWithGoogle,
    loginUserWithEmailAndPassword,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
