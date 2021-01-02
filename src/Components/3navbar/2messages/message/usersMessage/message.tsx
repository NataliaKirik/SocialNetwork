import React from "react";
import s from './message.module.css'
import {MessagesType} from "../../../../../Redux/state";

const Message: React.FC<MessagesType> = (props) => {
    return (
        <div>
            <div>{props.title}</div>
        </div>
    )
}
export default Message