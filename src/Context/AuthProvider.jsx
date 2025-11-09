import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../FireBase/Firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading ,setLoading]=useState(true);


    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

     const updateUser =(updateData) =>{
            return updateProfile(auth.currentUser,updateData)
        }

        const logout =() =>{
            return signOut(auth)
        }

    useEffect(()=>{

        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })

        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo ={
        createUser,
        signInUser,
        updateUser,
        logout,
        user,
        loading
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;