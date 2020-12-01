import React from "react";
import s from './message.module.css'

type MessageProps={
    title:string
}
const Message=(props:MessageProps)=>{
    return(
        <div>{props.title}</div>
    )
}
export default Message