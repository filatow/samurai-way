import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogsPropsType = {}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.messenger}>
            <div className={s.dialogs}>
                <ul className={s.dialogList}>
                    <li className={`${s.dialogItem}`}>
                        <NavLink to={'#'} activeClassName={s.active}>Dimych</NavLink>
                    </li>
                    <li className={s.dialogItem}>
                        <NavLink to={'#'}>Andrey</NavLink>
                    </li>
                    <li className={s.dialogItem}>
                        <NavLink to={'#'}>Sveta</NavLink>
                    </li>
                    <li className={s.dialogItem}>
                        <NavLink to={'#'}>Sasha</NavLink>
                    </li>
                    <li className={s.dialogItem}>
                        <NavLink to={'#'}>Viktor</NavLink>
                    </li>
                    <li className={s.dialogItem}>
                        <NavLink to={'#'}>Valera</NavLink>
                    </li>
                </ul>
            </div>
            <div className={s.messages}>
                <ul className={s.messageList}>
                    <li className={s.messageItem}>Hi</li>
                    <li className={s.messageItem}>How is your it-kamasutra?</li>
                    <li className={s.messageItem}>Yo!!!</li>
                </ul>
            </div>
        </div>
    )
}