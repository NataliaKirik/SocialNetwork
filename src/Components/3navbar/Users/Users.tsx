import React from "react";
import s from './Users.module.css'
import {userType} from "../../../Redux/users_Reduser";
import axios from "axios";

type UsersPropsType = {
    users: Array<userType>
    onFollowButtonClick: (userId: number) => void
    setUsers: (users: Array<userType>) => void
}

class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        // props.setUsers([
        //     {
        //         id: 1,
        //         name: 'Dmitry K',
        //         imgUrl: 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg',
        //         status: 'i am so pretty',
        //         followed: true,
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: 2,
        //         name: 'Svetlana D',
        //         imgUrl: 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg',
        //         status: 'i am so pretty too',
        //         followed: true,
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: 3,
        //         name: 'Sergey S',
        //         imgUrl: 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg',
        //         status: 'i like football',
        //         followed: false,
        //         location: {city: 'Kiev', country: 'Ukrane'}
        //     }
        // ])
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            }
        )
    }

    render() {
        return (
            <div className={s.usersWrapper}>
                {
                    this.props.users.map(
                        (u: userType) => {
                            debugger
                            return (
                                <div key={u.id}>
                                    <img
                                        src={u.photos.small || 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg'}
                                        alt={'ava'}/>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                    <div>{'location.city'}</div>
                                    <button onClick={() => {
                                        this.props.onFollowButtonClick(u.id)
                                    }}>{u.followed ? 'Followed' : 'Unfollowed'}</button>
                                </div>
                            )
                        }
                    )
                }
            </div>)
    }
}


export default Users