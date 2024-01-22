import Auth from "./pages/Auth/Auth";
import {
    ADMIN_ROUTE,
    ANALYTICS_ROUTE,
    AUTH_ROUTE,
    DASHBOARD_ROUTE,
    MACHINEINFO_ROUTE,
    MACHINELIST_ROUTE, SETTINGS_ROUTE
} from "./utils/consts";
import Dashboard from "./pages/Dashboard/Dashboard";
import MachineList from "./pages/MachineList/MachineList";
import MachineInfo from "./pages/MachineInfo";
import Analytics from "./pages/Analytics";
import Admin from "./pages/Admin";
import Settings from "./pages/Settings";
import React from "react";

export const authRoutes = [
    {
        path: DASHBOARD_ROUTE + ':id',
        Component: <Dashboard/>,
    },
    {
        path: MACHINELIST_ROUTE,
        Component: <MachineList/>,
    },
    {
        path: MACHINEINFO_ROUTE,
        Component: <MachineInfo/>,
    },
    {
        path: ANALYTICS_ROUTE,
        Component: <Analytics/>,
    },
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>,
    },
    {
        path: SETTINGS_ROUTE,
        Component: <Settings/>,
    },
]

// export const adminRoutes = [
//     {
//         path: '/'
//     }
// ]

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: <Auth/>,
    }
]

