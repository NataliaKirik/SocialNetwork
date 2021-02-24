import React from "react";
import {userType} from "../../../Redux/users_Reduser";
import axios from "axios";
import {Users} from "./Users";
import {RootState} from "../../../Redux/redux-store";
import {Preloader} from "../../../common/Preloader";
import {usersApi} from "../../../api/api";

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
    setFollowingProcess: (isFetching: boolean, usrId: number) => void
    inFollowingProcess: Array<number>
}

class UsersAPIContainer extends React.Component<UsersPropsType, RootState> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersCount(data.totalCount)
                    this.props.setToggleIsFetching(false)
                }
            )

    }

    onPageChanged(pageNumber: number) {
        this.props.setToggleIsFetching(true)
        this.props.getPageNumber(pageNumber);
        usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
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