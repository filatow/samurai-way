import React from 'react';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {/*<a href="#1">Profile</a>*/}
                Profile
            </div>
            <div className={s.item}>
                {/*<a href="#2">Messages</a>*/}
                Messages
            </div>
            <div className={`${s.item} ${s.active}`}>
                {/*<a href="#3">News</a>*/}
                News
            </div>
            <div className={s.item}>
                {/*<a href="#4">Music</a>*/}
                Music
            </div>
            <div className={s.item}>
                {/*<a href="#5">Settings</a>*/}
                Settings
            </div>
        </nav>
    );
}