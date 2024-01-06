import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogsPropsType = {}

type DialogItemPropsType = {
    name: string
    id: string
}

type MessageItemPropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    const path = `/dialogs/${props.id}`;

    return (
        <li className={`${s.dialogItem}`}>
            <NavLink to={path} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </li>
    )
}

const MessageItem = (props: MessageItemPropsType) => {
    return (
        <li className={s.messageItem}>{props.message}</li>
    )
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.messenger}>
            <div className={s.dialogs}>
                <ul className={s.dialogList}>
                    <DialogItem name="Dimych" id="1"/>
                    <DialogItem name="Andrey" id="2"/>
                    <DialogItem name="Sveta" id="3"/>
                    <DialogItem name="Sasha" id="4"/>
                    <DialogItem name="Viktor" id="5"/>
                    <DialogItem name="Valera" id="6"/>
                </ul>
            </div>
            <div className={s.messages}>
                <ul className={s.messageList}>
                    <MessageItem message="Hi"/>
                    <MessageItem message="How is your it-kamasutra?"/>
                    <MessageItem message="Yo!!!"/>
                </ul>
            </div>
        </div>
    )
}