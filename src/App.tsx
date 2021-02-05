import React from 'react';
import './App.module.css';
import Header from "./Components/1header/header";
import Navbar from "./Components/3navbar/navbar";
import s from './App.module.css'
import Profile from "./Components/3navbar/1profile/profile";
import News from "./Components/3navbar/3news/news";
import Music from "./Components/3navbar/4music/music";
import Settings from "./Components/3navbar/5settings/settings";
import {Route} from "react-router-dom";
import MessagesСontainer from "./Components/3navbar/2messages/messagesContainer";
import {Store} from "redux";
import MainContainer from "./Components/2main/main_Container";



type AppProps = {
    store: Store
}

function App(props: AppProps) {
    return (
        <div className={s.App}>
            <Header/>
            <Navbar/>
            <Route render={() => <MainContainer state={props.store.getState()} dispatch={props.store.dispatch}/>} path={'/Main'}/>
            <Route render={() => <Profile/>} path={'/Profile'}/>
            <Route render={() => <MessagesСontainer store={props.store}
                                                    dispatch={props.store.dispatch}/>} path={'/Message'}/>
            <Route render={() => <News/>} path={'/News'}/>
            <Route render={() => <Music/>} path={'/Music'}/>
            <Route render={() => <Settings/>} path={'/Settings'}/>

            {/*<Footer/>*/}
        </div>

    );
}

export default App;
