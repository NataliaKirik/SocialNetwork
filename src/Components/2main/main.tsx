import React, {ChangeEvent} from "react";
import {mainPageType} from "../../Redux/main_Reducer";
import s from './main.module.css'
import Post from "./post/post";
import {ProfileStatus} from "./status/profileStatus";


export type MainProps = {
    addPost: () => void
    dataMain: mainPageType
    getStatus: (id: string) => void
    status: string
    updateNewPostText: (text: string) => void
    updateStatus: () => void
}

const Main = (props: MainProps) => {
    let posts = [
        props.dataMain.posts.map(
            (p) => {
                return (<Post title={p.title} likesCount={p.likesCount} name={p.name} id={p.id} key={p.id}/>)
            }
        )
    ]

    const onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (<div className={s.mainWrapper}>
        <b>My status</b>
        <ProfileStatus status={props.status}/>

        <b> Posts</b>
        <div><textarea onChange={onPostChange} value={props.dataMain.newPostText}/></div>

        <button onClick={onAddPost}>add post</button>
        {posts}
    </div>)
}
export default Main

