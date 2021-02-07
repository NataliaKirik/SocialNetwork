import React from "react";
import s from './Users.module.css'
import {User} from "./user";
import {userType} from "../../../Redux/users_Reduser";

type UsersPropsType = {
    users: Array<userType>
    onFollowButtonClick: (userId: number) => void
}

const Users = (props: UsersPropsType) => {
    debugger
    let user = [

        props.users.map((u: any) => {
            const onFollowButtonClick = () => {
                let userId = u.id
                props.onFollowButtonClick(userId)
            }
            return (
                <User img={u.imgUrl} followButton={u.followed} name={u.name} status={u.status}
                      location={u.location.city} key={u.id} onFollowButtonClick={onFollowButtonClick}/>

            )
        })
    ]
    return (
        <div className={s.userWrapper}>
            {user}
        </div>
    )
}


export default Users