import React from "react";
import s from './main.module.css'
import Post from "./post/post";


const Main=()=>{
    return (<div className={s.mainWrapper}>
      <b> Posts</b>
      <Post title={'Hello'} likesCount={15} name={'Igor Petrov'}/>
      <Post title={'What are you doing?'} likesCount={20}  name={'George Ivanov'}/>
      <Post title={'Yo'} likesCount={10}  name={'Mike Sidorov'}/>
    </div>)
}
export default Main

