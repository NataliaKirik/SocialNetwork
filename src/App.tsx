import React from 'react';
import './App.module.css';
import Header from "./Components/1header/header";
import Main from "./Components/2main/main";
import Navbar from "./Components/3navbar/navbar";
import Footer from "./Components/4footer/footer";
import styles from './App.module.css'
import Messages from "./Components/3navbar/2messages/messages";
import Profile from "./Components/3navbar/1profile/profile";
import News from "./Components/3navbar/3news/news";
import Music from "./Components/3navbar/4music/music";
import Settings from "./Components/3navbar/5settings/settings";
import {BrowserRouter, Route, Link} from "react-router-dom";


function App(props: any) {
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header/>
                <Navbar/>
                <Route render={() => <Main dataMain={props.dataMain}/>} path={'/Main'}/>
                <Route render={() => <Profile/>} path={'/Profile'}/>
                <Route render={() => <Messages dataUsersMessages={props.dataUsersMessages}
                                               dataMessages={props.dataMessages}/>} path={'/Message'}/>
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
