import React from "react";
import {NavLink} from "react-router-dom";
import s from './user.module.css'
import {messageType} from "../../../../../Redux/messages_Reducer";



const User: React.FC<messageType> = (props) => {
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