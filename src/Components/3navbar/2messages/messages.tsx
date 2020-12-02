import React from "react";
import s from './messages.module.css'
import {BrowserRouter} from "react-router-dom";
import User from "./message/user";
import Message from "./message/message";

let dataUsersMessages = [
    {id: 1, title: 'Igor Petrov'},
    {id: 2, title: 'Ilya Sergeev'},
    {id: 3, title: 'George Ivanov'},
    {id: 4, title: 'Maria Sokolova'},
    {id: 5, title: 'Mike Sidorov'}
]
let dataMessages = [
    {id: 1, title: 'Hello'},
    {id: 2, title: 'How are you?'},
    {id: 3, title: 'Hi'},
    {id: 4, title: 'YO'},
    {id: 5, title: 'I\'m fine'}
]

let arrayUser = dataUsersMessages.map(
    (user) => {
        return (<div className={s.user}><User title={user.title} id={user.id}/></div>)
    }
)

let arrayMessages = dataMessages.map(
    (message) => {
        return (<div className={s.message}><Message title={message.title} id={message.id}/></div>)
    }
)

const Messages = () => {
    return (
        <BrowserRouter>
            <div className={s.MessageMainWrapper}>
                <div className={s.dialogsUsersWrapper}>
                    <div className={s.message_Title}>Users Dialogs</div>
                    <div className={s.usersWrapper}>

                        {arrayUser}

                    </div>
                </div>

                <div className={s.messageWrapper}>
                    <div className={s.usersMessageTitle}>Users Messages</div>
                    <div className={s.usersMessageWrapper}>

                        {arrayMessages}

                    </div>
                </div>
            </div>
        </BrowserRouter>)

}
export default Messages