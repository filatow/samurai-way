import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://goo.su/d6QT" alt="thumbnail"/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts />
        </div>
    );
}