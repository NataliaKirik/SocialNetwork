import React from 'react';
import s from './friends.module.css'
import {Friend} from "./Friend/friend";
import {friendsLittlePageType} from "../../Redux/state";

type FriendsProps = {
    name: friendsLittlePageType
}

export const Friends: React.FC<FriendsProps> = (props) => {
    let arrayFriends = props.name.friends.map((f) => {
        return (
            <span><Friend name={f.title}/></span>
        )
    })
    return (
        <div className={s.friendsWrapper}>
            <div className={s.friendsTitle}>Active friends</div>
            {arrayFriends}
        </div>
    )
}