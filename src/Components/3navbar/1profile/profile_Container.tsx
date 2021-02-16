import React from "react";
import {connect} from "react-redux";
import ProfileAPIContainer from "./profile_APIContainer";
import {RootState} from "../../../Redux/redux-store";


let mapStateToProps = (state: RootState) => {
    return {
        avatars: state.profilePage.avatars,
        statusAboutUser: state.profilePage.statusAboutUser
    }
}
const setProfileAva = (url: string) => ({
    type: 'SET_AVA',
    avaUrl: url
})
const setStatusAboutUser = (status: string) => ({
    type: 'SET_STATUS_ABOUT_USER',
    statusAboutUser: status
})


export const ProfileContainer = connect(mapStateToProps, {setProfileAva, setStatusAboutUser})(ProfileAPIContainer)