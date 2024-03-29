import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();
    console.log(user)
    if (!user) {
        return <Navigate to={'/auth'} state={{from: location}}/>
    }

    return children;
};

export default RequireAuth;