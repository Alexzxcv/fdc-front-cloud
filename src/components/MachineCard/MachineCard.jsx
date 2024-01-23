import React from 'react';
import classes from './MachineCard.module.scss';
import {Link} from "react-router-dom";

const MachineCard = ({machine}) => {

    return (
        <div className={classes.container}>
            {machine.map(({device, serialNumber, isOnline, voltage, model, manufacturer}) =>
                <Link key={serialNumber} className={classes.card} to={`../${device}/${serialNumber}`}>
                    <div className={classes.item}>{serialNumber}</div>
                    <div className={classes.item}>{isOnline}</div>
                    <div className={classes.item}>{voltage}</div>
                    <div className={classes.item}>{model}</div>
                    <div className={classes.item}>{manufacturer}</div>
                </Link>
            )}
        </div>
    );
};

export default MachineCard;


