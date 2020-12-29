import React from "react";
import s from './main.module.css'
import Post from "./post/post";
import {PostsType} from "../../Redux/state";

type MainProps = {
    dataMain: Array<PostsType>
    addPost: (textMessage?: string) => void
    newPostText?: string
    updateNewPostText: (newText?: string) => void
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
        props.addPost(text)
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(text)
    }

    return (<div className={s.mainWrapper}>
        <b> Posts</b>
        <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>

        <button onClick={addPost}>add post</button>
        {posts}
    </div>)
}
export default Main

