import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";


export const AuthContext=createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  const auth=getAuth(app)
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

 const createUser=(email,password)=>{
    console.log(email,password);
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
 }

const singIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut=()=>{
    return signOut(auth)
}
 const updateUserProfile=(name,photoURL)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photoURL
    })
 }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
                setLoading(false)
                setUser(currentUser)
                console.log(currentUser);
        })
        return ()=>{
            unSubscribe()
        }
    },[auth])

    const authInfo={
        user,
        loading,
        createUser,
       updateUserProfile,
       singIn,
       logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;