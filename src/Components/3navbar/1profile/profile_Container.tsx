import React from "react";
import {connect} from "react-redux";
import ProfileAPIContainer from "./profile_APIContainer";
import {RootState} from "../../../Redux/redux-store";
import {withRouter} from "react-router-dom";
import {getProfileThunkCreator, setFullName, setProfileAva} from "../../../Redux/profileReducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

export  type MapStateToPropsType = {
    avatars: string
    fullName: string
}
type MapDispatchToPropsType = {
    setProfileAva: (smallAvaUrl: string) => void
    setFullName: (fullName: string) => void
    getProfileThunkCreator: (userId: string) => void
}
export type OwnAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        avatars: state.profilePage.avatars,
        fullName: state.profilePage.fullName
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer)
let withUrlContainerComponent = withRouter(AuthRedirectComponent)
export const ProfileContainer = connect(mapStateToProps, {
    setProfileAva,
    setFullName,
    getProfileThunkCreator
})(withUrlContainerComponent)


