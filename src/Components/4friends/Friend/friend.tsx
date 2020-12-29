import React from 'react';
import s from './friend.module.css'

type FriendProps = {
    name: string
}

export const Friend: React.FC<FriendProps> = (props) => {
    return (<div className={s.friendWrapper}>
        <img className={s.ava}
             src="https://proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-28.jpg"
             alt="avatar"/>
        <div className={s.friendName}>{props.name}</div>

    </div>)
}