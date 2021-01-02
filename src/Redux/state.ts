export let store: StoreType = {
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
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                title: this._state.mainPage.newPostText,
                likesCount: 10,
                name: 'Brand Nesterov'
            }
            this._state.mainPage.posts.push(newPost)
            this._state.mainPage.newPostText = ''
            this._callSubscriber(this.getState())
        }
        if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.mainPage.newPostText = action.newText
            this._callSubscriber(this.getState())
        }

        if (action.type === 'ADD_MESSAGE') {
            let newMessage = {
                id: 6,
                title: this._state.messagePage.newMessageText
            }
            this._state.messagePage.messages.push(newMessage)
            this._state.messagePage.newMessageText = ''
            this._callSubscriber(this.getState())
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.messagePage.newMessageText = action.newText
            this._callSubscriber(this.getState())
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (text?: string) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: text
})
export const addMessageActionCreator = () => ({type: 'ADD_MESSAGE'})
export const updateNewMessageTextActionCreator = (text?: string) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    newText: text
})

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
    title: string | undefined
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




