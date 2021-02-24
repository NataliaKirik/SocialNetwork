import React from "react";
import {userType} from "../../../Redux/users_Reduser";
import axios from "axios";
import {Users} from "./Users";
import {RootState} from "../../../Redux/redux-store";
import {Preloader} from "../../../common/Preloader";

export type UsersPropsType = {
    users: Array<userType>
    onFollowButtonClick: (userId: number) => void
    onUNFollowButtonClick: (userId: number) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setToggleIsFetching(false)
            }
        )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged.bind(this)}/>
        </>
    }

}


export default UsersAPIContainer