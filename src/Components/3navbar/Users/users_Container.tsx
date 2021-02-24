import React from "react";
import {connect} from "react-redux";
import {userType} from "../../../Redux/users_Reduser";
import UsersAPIContainer from "./UsersAPIContainer";
import {RootState} from "../../../Redux/redux-store";

const onFollowButtonClick = (userId: number) => {
    return {
        type: 'FOLLOW',
        id: userId
    }
}
const onUNFollowButtonClick = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        id: userId
    }
}
const setUsers = (users: Array<userType>) => ({type: 'SET_USERS', users})
const getPageNumber = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage})
const setTotalUsersCount = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})
const setToggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching})
const setFollowingProcess = (isFetching: boolean, userId: number) => ({
    type: 'FOLLOWING_PROCESS',
    isFetching,
    userId
})

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
    onFollowButtonClick,
    onUNFollowButtonClick,
    setUsers,
    getPageNumber,
    setTotalUsersCount,
    setToggleIsFetching,
    setFollowingProcess
})(UsersAPIContainer)

export default UsersContainer
