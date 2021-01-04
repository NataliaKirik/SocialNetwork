import React from "react";
import s from './main.module.css'
import Post from "./post/post";
import { PostsType} from "../../Redux/store";


type MainProps = {
    updateNewPostText: (text?: string) => void
    addPost: () => void
    dataMain: Array<PostsType>
    newPostText?: string
    // dispatch: (action: DispatchActionType) => void

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
    const onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(text)
    }

    return (<div className={s.mainWrapper}>
        <b> Posts</b>
        <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>

        <button onClick={onAddPost}>add post</button>
        {posts}
    </div>)
}
export default Main

