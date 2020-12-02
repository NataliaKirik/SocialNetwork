import React from "react";
import s from './messages.module.css'
import {BrowserRouter} from "react-router-dom";
import User from "./message/user/user";
import Message from "./message/usersMessage/message";

type MessageProps = {
    title: string
    id: number
}
type MessagesProps = {
    dataUsersMessages: Array<MessageProps>
    dataMessages: Array<MessageProps>
}

const Messages = (props: MessagesProps) => {
    let arrayUser = props.dataUsersMessages.map(
        (user: MessageProps) => {
            return (<div className={s.user}><User title={user.title} id={user.id}/></div>)
        }
    )

    let arrayMessages = props.dataMessages.map(
        (message: MessageProps) => {
            return (<div className={s.message}><Message title={message.title} id={message.id}/></div>)
        }
    )
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