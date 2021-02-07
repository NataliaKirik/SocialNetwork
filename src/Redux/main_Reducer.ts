import {mainPageType} from "./oldStore_Types";

type actionType = {
    type: 'UPDATE_NEW_POST_TEXT' | 'ADD_POST'
    newText: string
}

let initialState: mainPageType = {
    posts: [
        {id: 1, title: 'Hello', likesCount: 15, name: 'Igor Petrov'},
        {id: 2, title: 'What are you doing?', likesCount: 20, name: 'George Ivanov'},
        {id: 3, title: 'Yo', likesCount: 10, name: 'Mike Sidorov'}
    ],
    newPostText: ''
}

const mainReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case 'UPDATE_NEW_POST_TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case 'ADD_POST': {
            let newPost = {
                id: 5,
                title: state.newPostText,
                likesCount: 10,
                name: 'Brand Nesterov'
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        default:
            return state
    }
}

export default mainReducer