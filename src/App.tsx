import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://goo.su/wQx3i"
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div>
                    <a href="#1">Profile</a>
                </div>
                <div>
                    <a href="#2">Messages</a>
                </div>
                <div>
                    <a href="#3">News</a>
                </div>
                <div>
                    <a href="#4">Music</a>
                </div>
                <div>
                    <a href="#5">Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://goo.su/d6QT" alt="thumbnail"/>
                </div>
                <div>
                    ava + desc
                </div>
                <div>
                    my posts
                    <div>
                        new post
                    </div>
                </div>
                <div>
                    postlist
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    );
};

export default App;
