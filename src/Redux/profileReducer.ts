type initialStateProfileType = {
    avatars: string
    statusAboutUser: string
}
type actionType = {
    type: 'SET_AVA' | 'SET_STATUS_ABOUT_USER'
    avaUrl: string
    statusAboutUser: string
}

let initialState = {
    avatars: '',
    statusAboutUser: ''
}


export const profileReducer = (state: initialStateProfileType = initialState, action: actionType): initialStateProfileType => {

    switch (action.type) {
        case 'SET_AVA':
            return {
                ...state,
                avatars: state.avatars = action.avaUrl
            }
        case 'SET_STATUS_ABOUT_USER':
            return {
                ...state,
                statusAboutUser: state.statusAboutUser = action.statusAboutUser
            }

        default:
            return state
    }

}