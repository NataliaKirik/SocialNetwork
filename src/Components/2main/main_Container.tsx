import React from "react";
import Main from "./main";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/main_Reducer";
import {RootStateType} from "../../Redux/oldStore_Types";
import {connect} from "react-redux";
import {AppDispatchType} from "../../Redux/redux-store";


const mapStateToProps = (state: RootStateType) => {
    return {
        dataMain: state.mainPage
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        updateNewPostText: (text?: string) => {
            updateNewPostTextActionCreator(text)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer