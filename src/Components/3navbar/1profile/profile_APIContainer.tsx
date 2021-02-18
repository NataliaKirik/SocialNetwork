import React from "react";
import Profile from "./profile";
import axios from "axios";
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setProfileAva(response.data.photos.small)
                this.props.setStatusAboutUser(response.data.aboutMe)
            })

    }

    render() {
        return <>
            <Profile avaUrls={this.props.avatars} aboutMe={this.props.statusAboutUser}/>
        </>
    }
}

export default ProfileAPIContainer;