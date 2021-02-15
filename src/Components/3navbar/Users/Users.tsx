import React from "react";
import s from './Users.module.css'
import {userType} from "../../../Redux/users_Reduser";
import axios from "axios";

type UsersPropsType = {
    users: Array<userType>
    onFollowButtonClick: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    getPageNumber: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<UsersPropsType> {
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pagesCountArray = []
        for (let i = 1; i <= 15; i++) {
            pagesCountArray.push(i)
        }
        return (
            <div className={s.usersWrapper}>
                <div>
                    {pagesCountArray.map((p) => {
                        return <span
                            className={this.props.currentPage === p ? s.selectedPage : ''}
                            onClick={() => {
                                this.onPageChanged(p)
                            }}
                        >
                            {p}
                        </span>
                    })}
                </div>
                {
                    this.props.users.map(
                        (u: userType) => {
                            return (
                                <div key={u.id} className={s.map}>
                                    <img
                                        src={u.photos.small || 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg'}
                                        alt={'ava'} className={s.ava}/>
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

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    onPageChanged(pageNumber: number) {
        this.props.getPageNumber(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }


}


export default Users