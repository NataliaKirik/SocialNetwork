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

const messagesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage = {
                id: 6,
                title: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case'UPDATE_NEW_MESSAGE_TEXT':
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}
export const addMessageActionCreator = () => ({type: 'ADD_MESSAGE'})
export const updateNewMessageTextActionCreator = (text?: string) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    newText: text
})


export default messagesReducer