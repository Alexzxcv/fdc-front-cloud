import React from 'react';
import Sidebar from "../components/Sidebar";
import {Outlet} from "react-router";
import ProfileIcon from "../components/ProfileIcon";
import classes from './Main.module.scss';


const Main = () => {
    return (
        <>
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
        </>
    );
};

export default Main;