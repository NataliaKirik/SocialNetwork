import React from "react";
import Main from "./main";
import {RootStateType} from "../../Redux/oldStore_Types";
import {connect} from "react-redux";
import {Dispatch} from "redux";

const addPostActionCreator = () => ({type: 'ADD_POST'})
 const updateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: text
})

const mapStateToProps = (state: RootStateType) => {
    return {
        dataMain: state.mainPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer