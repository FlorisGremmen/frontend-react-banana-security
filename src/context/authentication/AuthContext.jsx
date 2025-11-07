import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();

    function login() {
        console.log("The user is doing a login");
        toggleIsAuth(true);
        navigate("/profile");
    }

    function logout() {
        console.log("The user is doing a logout");
        toggleIsAuth(false);
        navigate("/");
    }

    function signUp(data) {
        console.log(data);

    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout,
        signUp: signUp,
    };

    return (
        <>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>;
        </>
    )
}

export default AuthContextProvider;