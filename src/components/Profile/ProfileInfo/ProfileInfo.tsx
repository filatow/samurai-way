import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img src="https://goo.su/d6QT" alt="thumbnail"/>
            </div>
            <div className={s.biography}>
                ava + description
            </div>
        </>
    )
}