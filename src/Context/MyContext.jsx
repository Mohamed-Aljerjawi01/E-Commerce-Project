import { createContext, useState } from "react";

// Context 1
export const AuthContext = createContext();
export const AuthContextProvider = function({children}){
    const [accessToken,setAccessToken] = useState(localStorage.getItem("accessToken") || null);
    const saveAccessTokenInLocalStorage = function(value){
        localStorage.setItem("accessToken",value);
    }
    const logout = function(){
        localStorage.removeItem("accessToken");
        setAccessToken(null);
    }
    return <AuthContext.Provider value={{accessToken,setAccessToken,saveAccessTokenInLocalStorage,logout}}>{children}</AuthContext.Provider>
}