import React from "react";
import s from './messages.module.css'
import {BrowserRouter} from "react-router-dom";
import User from "./message/user/user";
import Message from "./message/usersMessage/message";
import {
    MessagesType,
    usersMessagesType
} from "../../../Redux/store";
import {DispatchActionType} from "../../2main/main";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/messages_Reducer";

type MessagesProps = {
    dataUsersMessages: Array<usersMessagesType>
    arrayMessage: Array<MessagesType>
    addMessage: () => void
    messageChange: (text?: string) => void
    newMessageText?: string
}

const Messages: React.FC<MessagesProps> = (props) => {
    let arrayUser = props.dataUsersMessages.map(
        (user: usersMessagesType) => {
            return (<div className={s.user}><User title={user.title} id={user.id}/></div>)
        }
    )
    let arrayMessages = props.arrayMessage.map(
        (message: MessagesType) => {
            return (<div className={s.message}><Message title={message.title} id={message.id}/></div>)
        }
    )

    let newPostMessage = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newPostMessage.current?.value
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
                        <textarea ref={newPostMessage} onChange={onMessageChange} value={props.newMessageText}/>
                        <div>
                            <button onClick={addMessage}>send message</button>
                        </div>

                    </div>
                </div>
            </div>
        </BrowserRouter>)

}
export default Messages