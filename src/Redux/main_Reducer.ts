import {mainPageApi} from "../api/api";
import {Dispatch} from "redux";

type actionType = {
    type: 'UPDATE_NEW_POST_TEXT' | 'ADD_POST' | 'SET_STATUS'
    newText: string
    status: string
}
export type mainPageType = typeof initialState

let initialState = {
    posts: [
        {id: 1, title: 'Hello', likesCount: 15, name: 'Igor Petrov'},
        {id: 2, title: 'What are you doing?', likesCount: 20, name: 'George Ivanov'},
        {id: 3, title: 'Yo', likesCount: 10, name: 'Mike Sidorov'}
    ],
    newPostText: '',
    status: ''
}

const mainReducer = (state: mainPageType = initialState, action: actionType) => {
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
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPost = () => ({type: 'ADD_POST'})
export const updateNewPostText = (text: string) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: text
})
export const setStatus = (status: string) => ({type: 'SET_STATUS', status})

export const getStatus = (id: string) => {
    return (dispatch: Dispatch) => {
        mainPageApi.getStatus(id)
            .then(response => {
                dispatch(setStatus(response))
            })
    }
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    mainPageApi.updateStatus(status)
        .then(response => {
            if (!!response) {
                dispatch(setStatus(response.data))
            }
        })
}

export default mainReducer