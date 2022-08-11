import React, { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";

function useAuthentication() {
    const [userAuth, setUserAuth] = useState(null)
    const auth = getAuth();

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged((user: any) => {
            if(user) {
                setUserAuth(user);
            } else {
                setUserAuth(null);
            }
        })
        return () => unsuscribe();
    }, [])

    return userAuth;
}

export default useAuthentication;