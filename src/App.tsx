import React from 'react';
import './App.module.css';
import Header from "./Components/1header/header";
import Main from "./Components/2main/main";
import Navbar from "./Components/3navbar/navbar";
import Footer from "./Components/5footer/footer";
import styles from './App.module.css'
import Messages from "./Components/3navbar/2messages/messages";
import Profile from "./Components/3navbar/1profile/profile";
import News from "./Components/3navbar/3news/news";
import Music from "./Components/3navbar/4music/music";
import Settings from "./Components/3navbar/5settings/settings";
import {BrowserRouter, Route, Link} from "react-router-dom";
import {friendsLittlePageType, mainPageType, messagePageType, PostsType} from "./Redux/state";
import {Friends} from './Components/4friends/friends';

type AppProps = {
    dataMainPage: mainPageType
    dataMessagePage: messagePageType
    dataFriendsLittlePage: friendsLittlePageType
    addPost: (textMessage?: string) => void
    updateNewPostText: (newText?: string) => void
}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header/>
                <Navbar dataFriends={props.dataFriendsLittlePage}/>
                <Route render={() => <Main addPost={props.addPost} dataMain={props.dataMainPage.posts}
                                           newPostText={props.dataMainPage.newPostText}
                                           updateNewPostText={props.updateNewPostText}/>} path={'/Main'}
                />
                <Route render={() => <Profile/>} path={'/Profile'}/>
                <Route render={() => <Messages dataUsersMessages={props.dataMessagePage.usersMessages}
                                               dataMessages={props.dataMessagePage.messages}/>} path={'/Message'}/>
                <Route render={() => <News/>} path={'/News'}/>
                <Route render={() => <Music/>} path={'/Music'}/>
                <Route render={() => <Settings/>} path={'/Settings'}/>

                {/*<Footer/>*/}
            </div>
            ;
        </BrowserRouter>
    );
}

export default App;
