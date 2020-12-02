import React from "react";
import s from './main.module.css'
import Post from "./post/post";


let dataMain=[
    {title:'Hello', likesCount:15, name:'Igor Petrov'},
    {title:'What are you doing?', likesCount:20, name:'George Ivanov'},
    {title:'Yo', likesCount:10, name:'Mike Sidorov'}
]
const Main=()=>{
    return (<div className={s.mainWrapper}>
      <b> Posts</b>
      <Post title={dataMain[0].title} likesCount={dataMain[0].likesCount} name={dataMain[0].name}/>
      <Post title={dataMain[1].title} likesCount={dataMain[1].likesCount} name={dataMain[1].name}/>
      <Post title={dataMain[2].title} likesCount={dataMain[2].likesCount} name={dataMain[2].name}/>
    </div>)
}
export default Main

