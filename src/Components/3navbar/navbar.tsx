import React from "react";
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "../4friends/friends";
import {friendsLittlePageType} from "../../Redux/state";

type NavbarProps={
    dataFriends: friendsLittlePageType
}
const Navbar:React.FC<NavbarProps> = (props) => {
    return (
        <div className={s.navBarWrapper}>
            <div><NavLink to={'/Main'} activeClassName={s.activeLink} className={s.link}>Main</NavLink></div>
            <div><NavLink to={'/Profile'} activeClassName={s.activeLink}>Profile</NavLink></div>
            <div><NavLink to={'/Message'} activeClassName={s.activeLink}>Messages</NavLink></div>
            <div><NavLink to={'/News'} activeClassName={s.activeLink}>News</NavLink></div>
            <div><NavLink to={'/Music'} activeClassName={s.activeLink}>Music</NavLink></div>
            <div><NavLink to={'/Settings'} activeClassName={s.activeLink}>Settings</NavLink></div>
            <Friends name={props.dataFriends}/>

        </div>)
}
export default Navbar