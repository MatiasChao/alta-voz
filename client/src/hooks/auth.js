import { createContext, useContext, useState } from "react";
import { AuthService } from "../service/AuthService";

const authContext = createContext();

export default function useAuth(){
    return useContext(authContext);
}

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const logInWithEmail = async (email, password) => {
        const { error, user } = await AuthService.logInWithEmail(email, password);

        setUser(user ?? null);
        setError(error ?? "");
    }

    const value = { user, error, logInWithEmail, setUser }

    return <authContext.Provider value={ value } {...props}/>
}