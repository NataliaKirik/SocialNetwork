type ActionType = {
    type: 'SET_USER_DATA'
    data: {}
}


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export const setAuthUserdata = (id: number, email: string, login: string): ActionType => ({
    type: 'SET_USER_DATA',
    data: {id, email, login}
})

