import React from 'react';
import './App.module.css';
import Header from "./Components/1header/header";
import Main, {DispatchActionType} from "./Components/2main/main";
import Navbar from "./Components/3navbar/navbar";
import Footer from "./Components/5footer/footer";
import styles from './App.module.css'
import Messages from "./Components/3navbar/2messages/messages";
import Profile from "./Components/3navbar/1profile/profile";
import News from "./Components/3navbar/3news/news";
import Music from "./Components/3navbar/4music/music";
import Settings from "./Components/3navbar/5settings/settings";
import {BrowserRouter, Route, Link} from "react-router-dom";
import {friendsLittlePageType, mainPageType, messagePageType, PostsType, RootStateType, StoreType} from "./Redux/store";
import {Friends} from './Components/4friends/friends';

type AppProps = {
    state: RootStateType
    store:any
    dispatch: (action: DispatchActionType) => void
}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header/>
                <Navbar dataFriends={props.state.friendsLittlePage}/>
                <Route render={() => <Main dispatch={props.dispatch} dataMain={props.state.mainPage.posts}
                                           newPostText={props.state.mainPage.newPostText}/>} path={'/Main'}
                />
                <Route render={() => <Profile/>} path={'/Profile'}/>
                <Route render={() => <Messages dataUsersMessages={props.state.messagePage.usersMessages}
                                               dataMessages={props.state.messagePage.messages}
                                               newMessage={props.state.messagePage.newMessageText}
                                               dispatch={props.dispatch}/>} path={'/Message'}/>
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
