import React from "react";
import s from './user.module.css'

type UserProps={
    title:string
}
const User=(props:UserProps)=>{
    return(
        <div>{props.title}</div>
    )
}
export default User