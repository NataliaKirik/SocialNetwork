type actionType = {
    type: 'ADD_MESSAGE' | 'UPDATE_NEW_MESSAGE_TEXT'
    newText: string
}
export type messagesInitStateType = typeof initialState
export type messageType = { id: number, title: string }
let initialState = {
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
}

const messagesReducer = (state: messagesInitStateType = initialState, action: actionType) => {
    switch (action.type) {
        case'UPDATE_NEW_MESSAGE_TEXT': {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        case 'ADD_MESSAGE': {
            let newMessage = {
                id: 6,
                title: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        }
        default:
            return state
    }
}


export default messagesReducer