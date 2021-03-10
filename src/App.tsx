import React from 'react';
import './App.module.css';
import Navbar from "./Components/3navbar/navbar";
import s from './App.module.css'
import News from "./Components/3navbar/3news/news";
import Music from "./Components/3navbar/4music/music";
import Settings from "./Components/3navbar/5settings/settings";
import {Route} from "react-router-dom";
import MainContainer from "./Components/2main/main_Container";
import MessageContainer from './Components/3navbar/2messages/messagesContainer';
import UsersContainer from "./Components/3navbar/Users/users_Container";
import {ProfileContainer} from "./Components/3navbar/1profile/profile_Container";
import {HeaderContainer} from "./Components/1header/headerContainer";
import {Login} from "./Components/Login/Login";


function App() {
    return (
        <div className={s.App}>
            <HeaderContainer/>
            <Navbar/>
            <Route render={() => <MainContainer/>} path={'/Main'}/>
            <Route render={() => <ProfileContainer/>} path={'/Profile/:userId?'}/>
            <Route render={() => <UsersContainer/>} path={'/Users'}/>
            <Route render={() => <MessageContainer/>} path={'/Message'}/>
            <Route render={() => <News/>} path={'/News'}/>
            <Route render={() => <Music/>} path={'/Music'}/>
            <Route render={() => <Settings/>} path={'/Settings'}/>
            <Route render={() => <Login/>} path={'/Login'}/>

            {/*<Footer/>*/}
        </div>

    );
}

export default App;
