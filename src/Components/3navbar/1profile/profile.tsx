import React from "react";
import s from './profile.module.css'
import {Preloader} from "../../../common/Preloader";

type ProfilePropsType = {
    avaUrls: string
    aboutMe: string
}


const Profile = (props: ProfilePropsType) => {
    if (!props.aboutMe && !props.avaUrls) {
        return <Preloader/>
    }
    return (
        <div className={s.profileWrapper}>
            <div className={s.titleProfile}>Profile</div>
            <img src={props.avaUrls} alt={'avatar'}/>
            <div>About me : <span>{props.aboutMe}</span></div>
        </div>
    )
}
export default Profile