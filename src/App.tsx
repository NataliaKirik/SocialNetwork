import React from 'react';
import './App.module.css';
import Header from "./Components/1header/header";
import Main, {DispatchActionType} from "./Components/2main/main";
import Navbar from "./Components/3navbar/navbar";
import styles from './App.module.css'
import Messages from "./Components/3navbar/2messages/messages";
import Profile from "./Components/3navbar/1profile/profile";
import News from "./Components/3navbar/3news/news";
import Music from "./Components/3navbar/4music/music";
import Settings from "./Components/3navbar/5settings/settings";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./Redux/store";
import MainContainer from "./Components/2main/main_Container";
import MessagesСontainer from "./Components/3navbar/2messages/messagesContainer";

type AppProps = {
    state: RootStateType
    store: any
    dispatch: (action: DispatchActionType) => void
}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header/>
                <Navbar dataFriends={props.state.friendsLittlePage}/>
                <Route render={() => <MainContainer store={props.store} dispatch={props.dispatch}/>} path={'/Main'}/>
                <Route render={() => <Profile/>} path={'/Profile'}/>
                <Route render={() => <MessagesСontainer store={props.store}
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
