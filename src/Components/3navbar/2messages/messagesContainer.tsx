import React from "react";
import Messages from "./messages";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/oldStore_Types";
import {Dispatch} from "redux";

const addMessageActionCreator = () => ({type: 'ADD_MESSAGE'})
const updateNewMessageTextActionCreator = (text: string) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    newText: text
})

const mapStateToProps = (state: RootStateType) => {
    return {
        dataMessagePage: state.messagePage
    }

}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        messageChange: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessageContainer