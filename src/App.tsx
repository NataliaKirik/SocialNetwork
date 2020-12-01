import React from 'react';
import './App.module.css';
import Header from "./Components/1header/header";
import Main from "./Components/2main/main";
import Navbar from "./Components/3navbar/navbar";
import Footer from "./Components/4footer/footer";
import styles from './App.module.css'
import Message from "./Components/3navbar/2messages/message";
import Profile from "./Components/3navbar/1profile/profile";
import News from "./Components/3navbar/3news/news";
import Music from "./Components/3navbar/4music/music";
import Settings from "./Components/3navbar/5settings/settings";
import { BrowserRouter, Route, Link } from "react-router-dom";





function App() {
    return (
        <BrowserRouter>
        <div className={styles.App}>
            <Header/>
            <Navbar/>
            <Route component={Main} path={'/Main'}/>
            <Route component={Profile} path={'/Profile'}/>
            <Route component={Message} path={'/Message'}/>
            <Route component={News} path={'/News'}/>
            <Route component={Music} path={'/Music'}/>
            <Route component={Settings} path={'/Settings'}/>

            {/*<Footer/>*/}
        </div>
      </BrowserRouter>
    );
}

export default App;
