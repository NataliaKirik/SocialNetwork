import React from "react";
import Messages from "./messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/messages_Reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/oldStore_Types";


const mapStateToProps = (state: RootStateType) => {
    return {
        dataMessagePage:state.messagePage
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        messageChange: (text?: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessageContainer