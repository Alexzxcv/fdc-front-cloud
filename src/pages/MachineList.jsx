import React from 'react';
import MachineCard from "../components/MachineCard";
import classes from './MachineList.module.scss';

const MachineList = () => {
    const machine = [
        {
            serialNumber: 1234,
            isOnline: 'Online',
            voltage: 24,
            model: 'T7',
            manufacturer: 'Tennant',
            device: 'tl101'
        },
        {
            serialNumber: 4321,
            isOnline: 'Offline',
            voltage: 36,
            model: 'B90',
            manufacturer: 'Karcher',
            device: 'tl110'
        },
    ]
    return (
        <div>
            <h1>Список машин</h1>
            <div className={classes.container}>
                <div className={classes.name}>
                    <div>Серийный<br/>номер</div>
                    <div>Состояние</div>
                    <div>Напряжение</div>
                    <div>Модель</div>
                    <div>Производитель</div>
                </div>
                <hr/>
                <MachineCard machine={machine} />

            </div>
        </div>
    );
};

export default MachineList;