import React from 'react'
import s from './header.module.css'


const Header=()=>{
    return (
        <header className={s.headerWrapper}>
            <img src="https://i.pinimg.com/originals/76/6c/f7/766cf770ea8dd3529bd8e0c41d6784be.jpg"
                 alt="logo" className={s.headerImgLogo}/>
            <h1 className={s.headerText}>Header</h1>

        </header>
    )
}
export default Header
