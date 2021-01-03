import React from "react";
import s from './post.module.css'
import {PostsType} from "../../../Redux/store";


const Post: React.FC<PostsType> = (props) => {
    return (<div className={s.postsWrapper}>
        <div>
            <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt=""
                 className={s.imgInPost}/>
        </div>

        <b>{props.name}</b>
        <div>{props.title}</div>
        <div>Likes:{props.likesCount}</div>
    </div>)
}
export default Post