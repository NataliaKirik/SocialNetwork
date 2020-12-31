import React from "react";
import s from './main.module.css'
import Post from "./post/post";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../Redux/state";

type MainProps = {
    dataMain: Array<PostsType>
    dispatch: (action: DispatchActionType) => void
    newPostText?: string
}
export type DispatchActionType = {
    type: string
    newText?: string
}


const Main: React.FC<MainProps> = (props) => {
    let posts = [
        props.dataMain.map(
            (p: PostsType) => {
                return (<Post title={p.title} likesCount={p.likesCount} name={p.name} id={p.id}/>)
            }
        )
    ]
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let text = newPostElement.current?.value
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (<div className={s.mainWrapper}>
        <b> Posts</b>
        <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>

        <button onClick={addPost}>add post</button>
        {posts}
    </div>)
}
export default Main

