import React from "react";
import s from './messages.module.css'
import {BrowserRouter} from "react-router-dom";
import User from "./message/user";
import Message from "./message/message";


const Messages = () => {
    return (
        <BrowserRouter>
            <div className={s.MessageMainWrapper}>
                <div className={s.dialogsUsersWrapper}>
                    <div className={s.message_Title}>Users Dialogs</div>
                    <div className={s.usersWrapper}>
                        <div className={s.user}><User title={'Igor Petrov'}/></div>
                        <div className={s.user}><User title={'Ilya Sergeev'}/></div>
                        <div className={s.user}><User title={'George Ivanov'}/></div>
                        <div className={s.user}><User title={'Maria Sokolova'}/></div>
                        <div className={s.user}><User title={'Mike Sidorov'}/></div>
                    </div>
                </div>
                <div className={s.messageWrapper}>
                    <div className={s.usersMessageTitle}>Users Messages</div>
                    <div className={s.usersMessageWrapper}>
                        <div className={s.message}><Message title={'Hello'}/></div>
                        <div className={s.message}><Message title={'I\'m fine'}/></div>
                        <div className={s.message}><Message title={'Yo'}/></div>
                        <div className={s.message}><Message title={'How are you?'}/></div>
                        <div className={s.message}><Message title={'YO!!'}/></div>
                    </div>
                </div>
            </div>
        </BrowserRouter>)

}
export default Messages