import React from "react";
import {connect} from "react-redux";
import ProfileAPIContainer from "./profile_APIContainer";
import {RootState} from "../../../Redux/redux-store";
import {withRouter} from "react-router-dom";

type MapStateToPropsType = {
    avatars: string
    statusAboutUser: string
}
type MapDispatchToPropsType = {
    setProfileAva: (smallAvaUrl: string) => void
    setStatusAboutUser: (status: string) => void
}
export type OwnAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: RootState): MapStateToPropsType => {
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

let withUrlContainerComponent = withRouter(ProfileAPIContainer)


export const ProfileContainer = connect(mapStateToProps, {setProfileAva, setStatusAboutUser})(withUrlContainerComponent)


