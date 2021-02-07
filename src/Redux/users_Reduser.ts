type actionType = {
    type: 'TOGGLE_FOLLOW' | 'SET_USERS'
    id: number
    users: Array<userType>
}
export type usersStateType = {
    usersPage: usersType
}
export type usersType = {
    users: Array<userType>
}
export type userType = {
    id: number
    name: string
    photos: any
    status: string
    followed: boolean
    location: locationType
}
export type locationType = {
    city: string
    country: string
}


let initialState = {
    users: []
}

const usersReducer = (state: usersType = initialState, action: actionType) => {
    switch (action.type) {
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        case 'TOGGLE_FOLLOW':
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {...u, followed: !u.followed}
                    } else {
                        return {...u, followed: u.followed}
                    }
                })
            }

        default:
            return state
    }
}


export default usersReducer