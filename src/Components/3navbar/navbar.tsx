import React from "react";
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className={s.navBarWrapper}>
            <div><NavLink to={'/Main'} activeClassName={s.activeLink}>Main</NavLink></div>
            <div><NavLink to={'/Profile'} activeClassName={s.activeLink}>Profile</NavLink></div>
            <div><NavLink to={'/Users'} activeClassName={s.activeLink}>Users</NavLink></div>
            <div><NavLink to={'/Message'} activeClassName={s.activeLink}>Messages</NavLink></div>
            <div><NavLink to={'/News'} activeClassName={s.activeLink}>News</NavLink></div>
            <div><NavLink to={'/Music'} activeClassName={s.activeLink}>Music</NavLink></div>
            <div><NavLink to={'/Settings'} activeClassName={s.activeLink}>Settings</NavLink></div>
        </div>)
}
export default Navbar