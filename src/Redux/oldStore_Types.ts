import messagesReducer from "./messages_Reducer";
import mainReducer from "./main_Reducer";


let oldStore: StoreType = {
    _state: {
        mainPage: {
            posts: [
                {id: 1, title: 'Hello', likesCount: 15, name: 'Igor Petrov'},
                {id: 2, title: 'What are you doing?', likesCount: 20, name: 'George Ivanov'},
                {id: 3, title: 'Yo', likesCount: 10, name: 'Mike Sidorov'}
            ],
            newPostText: ''
        },
        messagePage: {
            usersMessages: [
                {id: 1, title: 'Igor Petrov'},
                {id: 2, title: 'Ilya Sergeev'},
                {id: 3, title: 'George Ivanov'},
                {id: 4, title: 'Maria Sokolova'},
                {id: 5, title: 'Mike Sidorov'}
            ],
            messages: [
                {id: 1, title: 'Hello'},
                {id: 2, title: 'How are you?'},
                {id: 3, title: 'Hi'},
                {id: 4, title: 'YO'},
                {id: 5, title: 'I\'m fine'}
            ],
            newMessageText: ''
        },
        friendsLittlePage: {
            friends: [
                {id: 1, title: 'Borys Sidorov'},
                {id: 2, title: 'Ivan Golubev'}
            ]
        }
    },
    _callSubscriber(state: RootStateType) {
        console.log('state changed');
    },

    getState() {
        return this._state
    },
    subscriber(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.messagePage = messagesReducer(this._state.messagePage, action)
        this._state.mainPage = mainReducer(this._state.mainPage, action)
        this._callSubscriber(this._state)
    }
}


export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscriber: (observer: (state: RootStateType) => void) => void
    dispatch: (action: any) => void
}

export type RootStateType = {
    mainPage: mainPageType
    messagePage: messagePageType
    friendsLittlePage: friendsLittlePageType
}
export type mainPageType = {
    posts: Array<PostsType>
    newPostText?: string
}
export type PostsType = {
    id: number
    title?: string
    likesCount: number
    name: string
}
export type littleFriendsType = {
    id: number
    title: string
}
export type usersMessagesType = {
    id: number
    title: string
}
export type MessagesType = {
    id: number
    title: string
}
export type friendsLittlePageType = {
    friends: Array<littleFriendsType>
}
export type messagePageType = {
    usersMessages: Array<usersMessagesType>
    messages: Array<MessagesType>
    newMessageText: string
}





