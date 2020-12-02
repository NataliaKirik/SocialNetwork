import React from "react";
import s from './main.module.css'
import Post from "./post/post";

type MainProps = {
    title: string
    likesCount: number
    name: string
}
type MainPropsType = {
    dataMain: Array<MainProps>
}

const Main = (props: MainPropsType) => {
    let posts = [
        props.dataMain.map(
            (p: MainProps) => {
                return (<Post title={p.title} likesCount={p.likesCount} name={p.name}/>)
            }
        )
    ]
    return (<div className={s.mainWrapper}>
        <b> Posts</b>
        {posts}
    </div>)
}
export default Main

