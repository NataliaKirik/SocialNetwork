import React from "react";
import {userType} from "../../../Redux/users_Reduser";
import {Users} from "./Users";
import {RootState} from "../../../Redux/redux-store";
import {Preloader} from "../../../common/Preloader";

export type UsersPropsType = {
    currentPage: number
    getPageNumber: (currentPage: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    inFollowingProcess: Array<number>
    isFetching: boolean
    pageSize: number
    totalUsersCount: number
    users: Array<userType>
    unFollowUserTC: (id: number) => void
    followUserTC: (id: number) => void
}

class UsersAPIContainer extends React.Component<UsersPropsType, RootState> {

    componentDidMount() {
        // @ts-ignore
        this.props.getUsersThunkCreator()
        debugger
    }

    onPageChanged(pageNumber: number) {
        this.props.getPageNumber(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged.bind(this)}/>
        </>
    }
}

export default UsersAPIContainer