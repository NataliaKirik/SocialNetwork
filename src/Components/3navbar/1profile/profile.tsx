import React from "react";
import s from './profile.module.css'
import {Preloader} from "../../../common/Preloader";
import {Redirect} from "react-router-dom";

type ProfilePropsType = {
    avaUrls: string
    name: string
}


const Profile = (props: ProfilePropsType) => {
    if (!props.name && !props.avaUrls) {
        return <Preloader/>
    }
    return (
        <div className={s.profileWrapper}>
            <div className={s.titleProfile}>Profile</div>
            <img src={props.avaUrls} alt={'avatar'}/>
            <div>Full name : <span>{props.name}</span></div>
        </div>
    )
}
export default Profile