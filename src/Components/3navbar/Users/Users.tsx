import React from "react";
import s from './Users.module.css'
import {User} from "./user";
import {userType} from "../../../Redux/users_Reduser";

type UsersPropsType = {
    users: Array<userType>
    onFollowButtonClick: (userId: number) => void
    setUsers: (users: Array<userType>) => void
}

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                name: 'Dmitry K',
                imgUrl: 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg',
                status: 'i am so pretty',
                followed: true,
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                name: 'Svetlana D',
                imgUrl: 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg',
                status: 'i am so pretty too',
                followed: true,
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                name: 'Sergey S',
                imgUrl: 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg',
                status: 'i like football',
                followed: false,
                location: {city: 'Kiev', country: 'Ukrane'}
            }
        ])
    }


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