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
                <Post message="Hi, how are you?" likeCount={15} />
                <Post message="It's my first post" likeCount={20}/>
            </div>
        </div>
    );
}