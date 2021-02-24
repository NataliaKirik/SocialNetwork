type actionType = {
    type: 'FOLLOW' | 'UNFOLLOW' | 'SET_USERS' | 'SET_CURRENT_PAGE' | 'SET_TOTAL_USERS_COUNT' | 'TOGGLE_IS_FETCHING' | 'FOLLOWING_PROCESS'
    id: number
    users: Array<userType>
    currentPage: number
    totalCount: number
    isFetching: boolean
    loadingFollow: boolean
    userId: number
}
export type usersStateType = {
    usersPage: usersType
}
export type usersType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    inFollowingProcess: any

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
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    isFetching: true,
    inFollowingProcess: [2, 3]
}

const usersReducer = (state: usersType = initialState, action: actionType): usersType => {
    switch (action.type) {
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((u: userType) => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    } else {
                        return {...u, followed: u.followed}
                    }
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((u: userType) => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    } else {
                        return {...u, followed: u.followed}
                    }
                })
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'FOLLOWING_PROCESS': {
            return {
                ...state,
                inFollowingProcess: action.isFetching
                    ? [...state.inFollowingProcess, action.userId]
                    : [state.inFollowingProcess.filter((id: number) => id !== action.userId)]

            }
        }


        default:
            return state
    }
}


export default usersReducer