import React from "react";
import s from './post.module.css'
import {postType} from "../../../Redux/main_Reducer";


const Post: React.FC<postType> = (props) => {
    return (<div className={s.postsWrapper}>
        <div>
            <img src="https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg" alt=""
                 className={s.imgInPost}/>
        </div>

        <b>{props.name}</b>
        <div>{props.title}</div>
        <div>Likes:{props.likesCount}</div>
    </div>)
}
export default Post