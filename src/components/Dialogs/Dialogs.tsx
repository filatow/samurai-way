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
                        <NavLink to={'/dialogs/1'} activeClassName={s.active}>Dimych</NavLink>
                    </li>
                    <li className={s.dialogItem}>
                        <NavLink to={'/dialogs/2'} activeClassName={s.active}>Andrey</NavLink>
                    </li>
                    <li className={s.dialogItem}>
                        <NavLink to={'/dialogs/3'} activeClassName={s.active}>Sveta</NavLink>
                    </li>
                    <li className={s.dialogItem}>
                        <NavLink to={'/dialogs/4'} activeClassName={s.active}>Sasha</NavLink>
                    </li>
                    <li className={s.dialogItem}>
                        <NavLink to={'/dialogs/5'} activeClassName={s.active}>Viktor</NavLink>
                    </li>
                    <li className={s.dialogItem}>
                        <NavLink to={'/dialogs/6'} activeClassName={s.active}>Valera</NavLink>
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