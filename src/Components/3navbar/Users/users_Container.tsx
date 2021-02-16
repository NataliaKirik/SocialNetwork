import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {usersStateType, userType} from "../../../Redux/users_Reduser";
import UsersAPIContainer from "./UsersAPIContainer";

const onButtonFollowAC = (userId: number) => {
    return {
        type: 'TOGGLE_FOLLOW',
        id: userId
    }
}
const setUsersAC = (users: Array<userType>) => ({type: 'SET_USERS', users})
const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage})
let setTotalUsersCountAC = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})

const mapStateToProps = (state: usersStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onFollowButtonClick: (userId: number) => {
            dispatch(onButtonFollowAC(userId))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        },
        getPageNumber: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer
