import React from "react";
import s from './user.module.css'

type userPropsType = {
    img: string
    name: string
    status: string
    location: string
}

export const User = (props: userPropsType) => {

    return (
        <div className={s.user}>
            <img src={props.img} alt='' className={s.ava}/>


            <div>{props.name}</div>
            <div>{props.status}</div>

            <div className={s.location}>
                {props.location}
            </div>
        </div>
    )
}
