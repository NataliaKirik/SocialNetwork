import React from "react";
import s from './main.module.css'
import Post from "./post/post";
import {mainPageType, PostsType, RootStateType} from "../../Redux/oldStore_Types";

type MainProps = {
    dataMain: mainPageType
    updateNewPostText: (text?: string) => void
    addPost: () => void
    state: RootStateType
    dispatch: any
}

const Main = (props: MainProps) => {
    let posts = [

        props.dataMain.posts.map(
            (p: PostsType) => {
                return (<Post title={p.title} likesCount={p.likesCount} name={p.name} id={p.id}/>)
            }
        )
    ]

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(text)
    }

    return (<div className={s.mainWrapper}>
        <b> Posts</b>
        <div><textarea ref={newPostElement} onChange={onPostChange} value={props.dataMain.newPostText}/></div>

        <button onClick={onAddPost}>add post</button>
        {posts}
    </div>)
}
export default Main

