import React, {createContext, useContext, useState} from 'react';
import {Context} from "../index";
import {login} from "../http/userAPI";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const {user} = useContext(Context);


    const signIn = async (newUser, cb) => {
        const response = await login();
        console.log(response);
        user.setUser(newUser);
        cb();
    }
    const signOut = (cb) => {
        user.setUser(null);
        cb();
    }

    const value = {user, signIn, signOut}

    return (
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    );
};