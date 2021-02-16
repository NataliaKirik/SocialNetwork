import React from "react";
import {userType} from "../../../Redux/users_Reduser";
import axios from "axios";
import {Users} from "./Users";
import {RootStore} from "../../../Redux/redux-store";

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

class UsersAPIContainer extends React.Component<UsersPropsType, RootStore> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    onPageChanged(pageNumber: number) {
        debugger
        this.props.getPageNumber(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged.bind(this)}
                      users={this.props.users}
                      onFollowButtonClick={this.props.onFollowButtonClick}/>
    }

}


export default UsersAPIContainer