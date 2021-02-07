import React from "react";
import s from './user.module.css'

type userPropsType = {
    img: any
    name: string
    status: string
    location: string
}

export const User = (props: userPropsType) => {

    return (
        <div>
            <div className={s.avaAndButtonWrapper}>
                <img src={props.img} alt='' className={s.ava}/>

            </div>
            <div className={s.nameAndStatusWrapper}>
                <div>{props.name}</div>
                <div>{props.status}</div>
            </div>
            <div className={s.location}>
                {props.location}
            </div>
        </div>

    )
}
