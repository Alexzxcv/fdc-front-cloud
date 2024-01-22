import React from 'react';
import MachineCard from "../../components/MachineCard/MachineCard";
import classes from './MachineList.module.scss';

const MachineList = () => {
    const machine = [
        {
            serialNumber: 1234,
            isOnline: 'Online',
            voltage: 24,
            model: 'T7',
            manufacturer: 'Tennant',
        },
        {
            serialNumber: 4321,
            isOnline: 'Offline',
            voltage: 36,
            model: 'B90',
            manufacturer: 'Karcher',
        },
    ]
    return (
        <div>
            <h1>Список машин</h1>
            <div className={classes.container}>
                <div className={classes.name}>
                    <div>Серийный номер</div>
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