/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { AuthContext } from "../context";
import { auth } from "../firebase.init";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const createUserEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const CreateUserWithGoogle = (auth, provider) => {
    return signInWithPopup(auth, provider);
  };
  const loginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createUserEmailAndPassword,
    CreateUserWithGoogle,
    loginUserWithEmailAndPassword,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}
