import React from "react";
import {userType} from "../../../Redux/users_Reduser";
import axios from "axios";
import {Users} from "./Users";
import {RootState} from "../../../Redux/redux-store";
import {Preloader} from "../../../common/Preloader";

type UsersPropsType = {
    users: Array<userType>
    onFollowButtonClick: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    getPageNumber: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

class UsersAPIContainer extends React.Component<UsersPropsType, RootState> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.setToggleIsFetching(false)
                }
            )
    }

    onPageChanged(pageNumber: number) {
        this.props.setToggleIsFetching(true)
        this.props.getPageNumber(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setToggleIsFetching(false)
            }
        )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged.bind(this)}
                   users={this.props.users}
                   onFollowButtonClick={this.props.onFollowButtonClick}/>
        </>
    }

}


export default UsersAPIContainer