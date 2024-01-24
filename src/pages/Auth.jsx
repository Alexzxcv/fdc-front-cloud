import React, {useContext, useEffect, useState} from 'react';
import classes from "./Auth.module.scss";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";
import {login} from "../http/userAPI";

const Auth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const {signIn} = useAuth();


    const sIn = async () => {
        const response = await login(email, password);
        navigate(fromPage, {replace: true})
        console.log(response);
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const user = form.username.value;
    //     signIn(user, () => navigate(fromPage, {replace:true}))
    // }

    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <h1>Авторизация</h1>
                <input type="email"
                       name={'username'}
                       placeholder={'Введите email'}
                       value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <input type="password"
                       placeholder={'Введите пароль'}
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button type={"submit"}
                        onClick={sIn}>Отправить</button>
            </div>
        </div>
    );
};

export default Auth;