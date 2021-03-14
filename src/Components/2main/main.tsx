import React, {ChangeEvent} from "react";
import s from './main.module.css'
import Post from "./post/post";
import {mainPageType, PostsType} from "../../Redux/oldStore_Types";
import {ProfileStatus} from "./status/profileStatus";

type MainProps = {
    dataMain: mainPageType
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const Main = (props: MainProps) => {
    let posts = [
        props.dataMain.posts.map(
            (p: PostsType) => {
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
        <b>Status</b>
        <ProfileStatus status={'hello'}/>
        <b> Posts</b>
        <div><textarea onChange={onPostChange} value={props.dataMain.newPostText}/></div>

        <button onClick={onAddPost}>add post</button>
        {posts}
    </div>)
}
export default Main

