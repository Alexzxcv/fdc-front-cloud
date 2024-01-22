import React, {useContext} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import Icon from "@mdi/react";
import {mdiCarElectricOutline, mdiChartTimelineVariant, mdiCog, mdiChessKing, mdiLogoutVariant} from "@mdi/js";
import classes from './Sidebar.module.scss';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const Sidebar = observer(() => {
    const {user} = useContext(Context)
    return (
        <nav className={classes.sidebar}>
            <NavLink className={({ isActive }) =>isActive ? classes.active : classes.link} to={'machinelist'}><Icon size={1} path={mdiCarElectricOutline}/><h3>Машины</h3></NavLink>
            <NavLink className={({ isActive }) =>isActive ? classes.active : classes.link} to={'analytics'}><Icon size={1} path={mdiChartTimelineVariant}/><h3>Аналитика</h3></NavLink>
            <NavLink className={({ isActive }) =>isActive ? classes.active : classes.link} to={'settings'}><Icon size={1} path={mdiCog}/><h3>Настройки</h3></NavLink>
            <NavLink className={({ isActive }) =>isActive ? classes.active : classes.link} to={'admin'}><Icon size={1} path={mdiChessKing}/><h3>Админ</h3></NavLink>
            <NavLink className={({ isActive }) =>isActive ? classes.active : classes.link} to={'auth'} onClick={() => {user.setIsAuth(false)} }><Icon size={1} path={mdiLogoutVariant}/><h3>Выход</h3></NavLink>
        </nav>
    );
});

export default Sidebar;