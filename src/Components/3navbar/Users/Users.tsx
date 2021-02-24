import React from "react";
import s from "./Users.module.css";
import {userType} from "../../../Redux/users_Reduser";
import {NavLink} from "react-router-dom";
import {UsersPropsType} from "./UsersAPIContainer";
import axios from "axios";

type fProps = {
    onPageChanged: (p: number) => void
}
type UsersCommonPropsType = UsersPropsType & fProps

export function Users(props: UsersCommonPropsType) {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesCountArray = []
    for (let i = 1; i <= 15; i++) {
        pagesCountArray.push(i)
    }
    return (
        <div className={s.usersWrapper}>
            <div>
                {pagesCountArray.map((p, index) => {
                    return <span key={index}
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

                                {u.followed ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'ab61ac65-4f7d-4f34-b171-2bf7b69d7103'
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.onUNFollowButtonClick(u.id)
                                            }
                                        })
                                    }}>Unfollow</button>
                                    :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'ab61ac65-4f7d-4f34-b171-2bf7b69d7103'
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.onFollowButtonClick(u.id)
                                            }
                                        })
                                    }}>Follow</button>}

                            </div>
                        )
                    }
                )
            }
        </div>)
}