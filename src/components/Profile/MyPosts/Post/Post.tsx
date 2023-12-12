import React from 'react';
import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://placebeard.it/120/120" alt="User avatar"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}