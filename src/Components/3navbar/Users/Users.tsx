import React from "react";
import s from "./Users.module.css";
import {userType} from "../../../Redux/users_Reduser";
import {NavLink} from "react-router-dom";

type usersPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: Array<userType>
    onFollowButtonClick: (userId: number) => void
}


export function Users(props: usersPropsType) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesCountArray = []
    for (let i = 1; i <= 15; i++) {
        pagesCountArray.push(i)
    }
    return (
        <div className={s.usersWrapper}>
            <div>
                {pagesCountArray.map((p) => {
                    return <span
                        className={props.currentPage === p ? s.selectedPage : ''}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                })}
            </div>
            {
                props.users.map(
                    (u: userType) => {
                        return (
                            <div key={u.id} className={s.map}>
                                <NavLink to={'/Profile/' + u.id}>
                                    <img
                                        src={u.photos.small || 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg'}
                                        alt={'ava'} className={s.ava}/>
                                </NavLink>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                <div>{'location.city'}</div>
                                <button onClick={() => {
                                    props.onFollowButtonClick(u.id)
                                }}>{u.followed ? 'Followed' : 'Unfollowed'}</button>
                            </div>
                        )
                    }
                )
            }
        </div>)
}