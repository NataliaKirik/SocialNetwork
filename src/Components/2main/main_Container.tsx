import React from "react";
import Main from "./main";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/main_Reducer";
import {RootStateType} from "../../Redux/oldStore_Types";
import {connect} from "react-redux";
import {Dispatch} from "redux";


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