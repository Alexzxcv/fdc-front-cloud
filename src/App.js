import React, {useContext, useEffect} from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import {Outlet, useNavigate} from "react-router";
import ProfileIcon from "./components/ProfileIcon/ProfileIcon";
import "./assets/main.scss";
import classes from './App.module.scss';
import Auth from "./pages/Auth/Auth";
import {Context} from './index'
import {observer} from "mobx-react-lite";


const App = observer(()=> {
    const {user} = useContext(Context)
    return (
        <>
            {
                user.isAuth ?
                    <div className="container">
                        <aside className="wrapper">
                            <div className="top">
                                <div className={classes.logo}>
                                    <div>FDC</div>
                                    <div>Faraday Development Center</div>
                                </div>
                            </div>
                            <Sidebar/>
                        </aside>
                        <div className="main-wrapper">
                            <Outlet/>
                        </div>
                        <div className="rightbar">
                            <div className="top">
                                <ProfileIcon/>
                            </div>
                            <div className="advanced" id="sidebar-ext">
                            </div>
                        </div>
                    </div>
                    :
                    <Auth/>
            }
        </>
    );
});

export default App;
