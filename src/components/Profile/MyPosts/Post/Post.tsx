import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://placebeard.it/120/120" alt="User avatar"/>
            {props.message}
            <div>
                <span>{props.likeCount} like</span>
            </div>
        </div>
    );
}