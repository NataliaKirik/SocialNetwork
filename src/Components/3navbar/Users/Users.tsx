import React from "react";
import s from './Users.module.css'
import {User} from "./user";
import {userType} from "../../../Redux/users_Reduser";

type UsersPropsType = {
    users: Array<userType>
    onFollowButtonClick: (userId: number) => void
}

const Users = (props: UsersPropsType) => {
    let user = [
        props.users.map((u) => {
            return (
                <div className={s.map}>
                    <User img={u.imgUrl} name={u.name} status={u.status}
                          location={u.location.city} key={u.id}/>
                    <button onClick={() => {
                        props.onFollowButtonClick(u.id)
                    }}>{u.followed ? 'Followed' : 'Unfollowed'}</button>
                </div>
            )

        })
    ]
    return (
        <div className={s.usersWrapper}>
            {user}
        </div>
    )
}


export default Users