import React from "react";
import {NavLink} from "react-router-dom";
import s from './user.module.css'
import {usersMessagesType} from "../../../../../Redux/store";


const User: React.FC<usersMessagesType> = (props) => {
    return (
            <NavLink to={'/Message/' + props.id} className={s.userMessageWrapper}>

                <img className={s.avatarWrapper}
                     src="https://i.pinimg.com/564x/27/b8/d3/27b8d3c4ad0edaeef6b058c48d77e15c.jpg"
                     alt="UsersMessageAvatar"/>
                <div className={s.title}>{props.title}</div>

            </NavLink>
    )
}
export default User