import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MachineList from "./pages/MachineList/MachineList";
import Admin from "./pages/Admin";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard/Dashboard";
import Auth from "./pages/Auth/Auth";
import UsersStore from "./store/UsersStore";

const router = createBrowserRouter([
    {
        basename: "/ml",
        path: "/",
        element: <App/>,
        children: [
            {
                path: "machinelist",
                element: <MachineList/>,
            },
            {
                path: "dashboard/:id",
                element: <Dashboard/>,
            },
            {
                path: "admin",
                element: <Admin/>,
            },
            {
                path: "analytics",
                element: <Analytics/>,
            },
            {
                path: "settings",
                element: <Settings/>,
            },],
    },
    {
        path: "auth",
        element: <Auth/>,
    },
]);

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UsersStore()
        }}>
            <RouterProvider router={router}/>
        </Context.Provider>
    </React.StrictMode>
);

