import React from 'react';
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="post" cols={30} rows={5}></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className="posts">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}