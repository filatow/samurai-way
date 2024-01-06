import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <textarea name="post" cols={30} rows={5}></textarea>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.publishedPosts}>
                <Post message="Hi, how are you?" likesCount={15} />
                <Post message="It's my first post" likesCount={20}/>
            </div>
        </div>
    );
}