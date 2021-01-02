const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const mainReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                title: state.newPostText,
                likesCount: 10,
                name: 'Brand Nesterov'
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (text?: string) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: text
})


export default mainReducer