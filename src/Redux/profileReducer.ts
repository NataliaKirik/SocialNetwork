import {Dispatch} from "redux";
import {usersApi} from "../api/api";

type initialStateProfileType = {
    avatars: string
    fullName: string
}
type actionType = {
    type: 'SET_AVA' | 'SET_FULL_NAME'
    avaUrl: string
    fullName: string
}


let initialState = {
    avatars: '',
    fullName: ''
}
export const profileReducer = (state: initialStateProfileType = initialState, action: actionType): initialStateProfileType => {

    switch (action.type) {
        case 'SET_AVA':
            return {
                ...state,
                avatars: state.avatars = action.avaUrl
            }
        case 'SET_FULL_NAME':
            return {
                ...state,
                fullName: state.fullName = action.fullName
            }
        default:
            return state
    }
}

export const setProfileAva = (url: string) => ({
    type: 'SET_AVA',
    avaUrl: url
})
export const setFullName = (fullName: string) => ({
    type: 'SET_FULL_NAME',
    fullName: fullName
})

export const getProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersApi.getProfile(userId)
            .then(response => {
                dispatch(setProfileAva(response.photos.small))
                dispatch(setFullName(response.fullName))
            })
    }
}
