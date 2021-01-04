import React from "react";
import Main, {DispatchActionType} from "./main";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/main_Reducer";

type MainContainerPropsType = {
    store: any
    dispatch: (action: DispatchActionType) => void
}
const MainContainer = (props: MainContainerPropsType) => {
    let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text?:string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (<Main updateNewPostText={onPostChange} addPost={addPost}   dataMain={state.mainPage.posts}
                  newPostText={state.mainPage.newPostText}/>)
}
export default MainContainer