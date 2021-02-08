import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {usersStateType, userType} from "../../../Redux/users_Reduser";
import Users from "./Users";

const onButtonFollowAC = (userId: number) => {
    return {
        type: 'TOGGLE_FOLLOW',
        id: userId
    }
}
const setUsersAC = (users:Array<userType>) => ({type: 'SET_USERS', users})

const mapStateToProps = (state: usersStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onFollowButtonClick: (userId: number) => {
            dispatch(onButtonFollowAC(userId))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
