const messagesReducer = (state: any, action: any) => {
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