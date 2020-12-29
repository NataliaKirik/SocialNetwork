import React from 'react'
import s from './header.module.css'
import logo from './6e.png'


const Header = () => {
    return (
        <header className={s.headerWrapper}>
            <img
                src={logo}
                alt="logo" className={s.headerImgLogo}/>
            <h1 className={s.headerText}>Header</h1>

        </header>
    )
}
export default Header
