import React from "react";
import Messages from "./messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/messages_Reducer";

type MessagesContainerPropsType={
    store:any
    dispatch:(action: any) => void
}

const MessagesСontainer = (props:MessagesContainerPropsType) => {
    let state = props.store.getState()
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let messageChange = (text?: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }
    return (<Messages addMessage={addMessage} messageChange={messageChange}
                      dataUsersMessages={state.messagePage.usersMessages} arrayMessage={state.messagePage.messages}
                      newMessageText={state.messagePage.newMessageText}/>)

}

export default MessagesСontainer