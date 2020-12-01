import React from "react";
import s from './navbar.module.css'


const Navbar = () => {
    return (
        <div className={s.navBarWrapper}>
            <div><a href={'/Main'}>Profile</a></div>
            <div><a href={'/Message'}>Messages</a></div>
            <div><a href={'/News'}>News</a></div>
            <div><a href={'/Music'}>Music</a></div>
            <div><a href={'/Settings'}>Settings</a></div>
        </div>)
}
export default Navbar