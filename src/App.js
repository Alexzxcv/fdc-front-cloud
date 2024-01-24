import {createRoutesFromElements, Route, Routes} from "react-router";
import "./assets/main.scss";
import Auth from "./pages/Auth";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MachineList from "./pages/MachineList";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Main from "./pages/Main";
import RequireAuth from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path={'/'} element={<Main/>}>
            <Route path={'machinelist'} element={<RequireAuth><MachineList/></RequireAuth>}/>
            <Route path={':device/:id'} element={<RequireAuth><Dashboard/></RequireAuth>}/>
            <Route path={'analytics'} element={<RequireAuth><Analytics/></RequireAuth>}/>
            <Route path={'settings'} element={<RequireAuth><Settings/></RequireAuth>}/>
            <Route path={'admin'} element={<RequireAuth><Admin/></RequireAuth>}/>
            <Route path={'*'} element={<RequireAuth><Main/></RequireAuth>}/>
        </Route>
        <Route path={'auth'} element={<Auth/>}/>
    </>
));

const App = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    );
};

export default App;