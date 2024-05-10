import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from '../Firebase/firebase.config';
import Result from "postcss/lib/result";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    
  
    const registerUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
    
  
    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
    const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
    };
    
    const logOut = () => {
      return signOut(auth);
    };
    const authInfo = {
      registerUser,
      loginUser,
      user,
      setUser,
      logOut,
      googleLogin,
    };
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
        if (CurrentUser) {
          setUser(CurrentUser);
          
        } else {
        setUser(null);
        }
      });
    }, []);

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;