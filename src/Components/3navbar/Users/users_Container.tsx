import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {usersState} from "../../../Redux/users_Reduser";

const onButtonFollowAC = (userId: number) => {
    return {
        type: 'TOGGLE_FOLLOW',
        id: userId
    }
}

const mapStateToProps = (state: usersState) => {

    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onFollowButtonClick: (userId: number) => {
            dispatch(onButtonFollowAC(userId))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer
