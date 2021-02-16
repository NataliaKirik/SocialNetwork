import React from "react";
import Profile from "./profile";
import axios from "axios";
import {RootState} from "../../../Redux/redux-store";

type ProfileAPIContainerPropsType = {
    setProfileAva: (smallAvaUrl: string) => void
    avatars: string
    setStatusAboutUser: (status: string) => void
    statusAboutUser: string
}


class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType, RootState> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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