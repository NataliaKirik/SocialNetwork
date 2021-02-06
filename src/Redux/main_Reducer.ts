import {mainPageType} from "./oldStore_Types";

type actionType = {
    type: 'UPDATE_NEW_POST_TEXT' | 'ADD_POST'
    newText: string
}

export const addPostActionCreator = () => ({type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (text?: string) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: text
})

let initialState: mainPageType = {
    posts: [
        {id: 1, title: 'Hello', likesCount: 15, name: 'Igor Petrov'},
        {id: 2, title: 'What are you doing?', likesCount: 20, name: 'George Ivanov'},
        {id: 3, title: 'Yo', likesCount: 10, name: 'Mike Sidorov'}
    ],
    newPostText: ''
}

const mainReducer = (state = initialState, action: actionType) => {
    debugger
    let stateCopy = {...state}
    switch (action.type) {
        case 'ADD_POST': {
            let newPost = {
                id: 5,
                title: state.newPostText,
                likesCount: 10,
                name: 'Brand Nesterov'
            }
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case 'UPDATE_NEW_POST_TEXT':
            stateCopy.newPostText = action.newText
            return stateCopy
        default:
            return state
    }
}


export default mainReducer