import React from "react";
import {connect} from "react-redux";
import UsersAPIContainer from "./UsersAPIContainer";
import {RootState} from "../../../Redux/redux-store";
import {
    unFollowUserTC,
    getPageNumber, getUsersThunkCreator,
    onFollowButtonClick,
    onUNFollowButtonClick, setFollowingProcess, setToggleIsFetching,
    setTotalUsersCount, setUsers, followUserTC
} from "../../../Redux/users_Reduser";

const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        inFollowingProcess: state.usersPage.inFollowingProcess
    }
}
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         onFollowButtonClick: (userId: number) => {
//             dispatch(onButtonFollowAC(userId))
//         },
//         setUsers: (users: Array<userType>) => {
//             dispatch(setUsersAC(users))
//         },
//         getPageNumber: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setToggleIsFetching: (isFetching:boolean) => {
//             dispatch(toggleFetching(isFetching))
//         }
//
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    getPageNumber, getUsersThunkCreator, unFollowUserTC, followUserTC
})(UsersAPIContainer)

export default UsersContainer
