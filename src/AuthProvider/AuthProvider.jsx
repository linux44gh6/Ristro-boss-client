import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";
import AxiosPublic from "../AxiosPublic/AxiosPublic";
import axios from "axios";


export const AuthContext=createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  const auth=getAuth(app)
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const googleProvider=new GoogleAuthProvider()
// const axiosPublic=AxiosPublic()
 const createUser=(email,password)=>{
    console.log(email,password);
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
 }

const singIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const googleLogIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
const logOut=()=>{
    setLoading(true)
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
                
                if(currentUser){
                    const userInfo={email:currentUser.email}
                  axios.post(`${import.meta.env.VITE_BASE_URL}/jwt`,userInfo,{headers:{
                    authorization:`bearer ${localStorage.getItem('token')}`
                  }})
                    .then(res=>{
                        if(res.data.token){
                            localStorage.setItem('token',res.data.token)
                        }
                    })
                }
                else{
                    localStorage.removeItem('token')
                }
                
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
       logOut,
       googleLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;