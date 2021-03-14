import React from "react";
import Profile from "./profile";
import {RootState} from "../../../Redux/redux-store";
import {OwnAPIContainerPropsType} from "./profile_Container";
import {RouteComponentProps} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & OwnAPIContainerPropsType


class ProfileAPIContainer extends React.Component<CommonPropsType, RootState> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        return <>
            <Profile avaUrls={this.props.avatars} name={this.props.fullName}/>
        </>
    }
}

export default ProfileAPIContainer;