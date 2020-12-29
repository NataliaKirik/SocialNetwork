import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, store} from "./Redux/state";

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App dataMainPage={store._state.mainPage} dataMessagePage={store._state.messagePage}
                 dataFriendsLittlePage={store._state.friendsLittlePage}
                 addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree)


