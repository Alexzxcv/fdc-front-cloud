import React from 'react';
import classes from './ProfileIcon.module.scss';

const ProfileIcon = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.info}>
                <p>Привет, <b>имя</b></p>
                <span className={classes.textmuted}>роль</span>
            </div>
            <div className={classes.profilephoto}>
                <img src='src/components/ProfileIcon/ProfileIcon'/>
            </div>
        </div>
    );
};

export default ProfileIcon;