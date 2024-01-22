import React, {useContext, useEffect} from 'react';
import classes from "./Auth.module.scss";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useNavigate} from "react-router";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        user.isAuth ? navigate("..", { relative: "/" }) : navigate("..", { relative: "auth" })
});
    return (
        <div className={classes.container}>
            <h1>Авторизация</h1>
            <form>
                <input type="email" placeholder={'Введите email'}/>
                <input type="password" placeholder={'Введите пароль'}/>
                <button onClick={() => {user.setIsAuth(true)}}>Отправить</button>
            </form>
        </div>
    );
});

export default Auth;