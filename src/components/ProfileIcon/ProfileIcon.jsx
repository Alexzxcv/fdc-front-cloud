import React from 'react';
import classes from './ProfileIcon.module.scss';
import account from '../../assets/account.jpg';

const ProfileIcon = () => {
    return (
        <div className={classes.profile}>

            <div className={classes.info}>
                <p>Привет, <b>имя</b></p>
                <span className={classes.textmuted}>роль</span>
            </div>
            <img src={account} alt={''}/>
        </div>
    );
};

export default ProfileIcon;