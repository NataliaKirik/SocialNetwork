import React, {ChangeEvent} from "react";
import s from './messages.module.css'
import {BrowserRouter} from "react-router-dom";
import User from "./message/user/user";
import Message from "./message/usersMessage/message";
import {messagesInitStateType} from "../../../Redux/messages_Reducer";


type MessagesProps = {
    dataMessagePage: messagesInitStateType
    addMessage: () => void
    messageChange: (text: string) => void
    isAuth: boolean
}

const Messages = (props: MessagesProps) => {
    let arrayUser = props.dataMessagePage.usersMessages.map(
        (user) => {
            return (<div className={s.user} key={user.id}><User title={user.title} id={user.id}/></div>)
        }
    )
    let arrayMessages = props.dataMessagePage.messages.map(
        (message) => {
            return (<div className={s.message} key={message.id}><Message title={message.title} id={message.id}/></div>)
        }
    )

    const addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.messageChange(text)
    }

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
                        <textarea onChange={onMessageChange}
                                  value={props.dataMessagePage.newMessageText}/>
                        <div>
                            <button onClick={addMessage}>send message</button>
                        </div>

                    </div>
                </div>
            </div>

        </BrowserRouter>)

}
export default Messages