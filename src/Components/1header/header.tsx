import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './header.module.css'
import {HeaderAPIContainerProps} from "./headerAPIContainer";


const Header = (props: HeaderAPIContainerProps) => {
    return (
        <header className={s.headerWrapper}>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}
export default Header
