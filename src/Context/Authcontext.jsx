import { createContext, useState } from "react";

export const AuthContext = createContext();

export function Authcontextprovider({ children }) {

    const [token, setToken] = useState(null);

    const handleLogin = (value) => {
        setToken(value);
       
    };

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem("token"); 
     
    };

    return (
        <AuthContext.Provider value={{ token, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}
