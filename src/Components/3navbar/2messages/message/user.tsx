import React from "react";
import {NavLink} from "react-router-dom";
import s from './user.module.css'

type UserProps = {
    title: string
    id: number
}
const User = (props: UserProps) => {
    return (
        <NavLink to={'/Message/' + props.id}>{props.title}</NavLink>
    )
}
export default User