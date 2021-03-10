import React from "react";
import Messages from "./messages";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../../Redux/redux-store";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const addMessageActionCreator = () => ({type: 'ADD_MESSAGE'})
const updateNewMessageTextActionCreator = (text: string) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    newText: text
})

const mapStateToProps = (state: RootState) => {
    return {
        dataMessagePage: state.messagePage,
        isAuth: state.auth.isAuth
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
let AuthRedirectComponent = withAuthRedirect(Messages)
const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default MessageContainer