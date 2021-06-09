import React from "react";
import s from './message.module.css'
import {messageType} from "../../../../../Redux/messages_Reducer";


const Message: React.FC<messageType> = (props) => {
    return (
        <div>
            <div>{props.title}</div>
        </div>
    )
}
export default Message