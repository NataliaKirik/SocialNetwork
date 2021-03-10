import {Dispatch} from "redux";
import {usersApi} from "../api/api";

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
    inFollowingProcess: []
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


export const setUsers = (users: Array<userType>) => ({type: 'SET_USERS', users})
export const getPageNumber = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})
export const setToggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching})
export const setFollowingProcess = (isFetching: boolean, userId: number) => ({
    type: 'FOLLOWING_PROCESS',
    isFetching,
    userId
})
export const onFollowButtonClick = (userId: number) => {
    return {
        type: 'FOLLOW',
        id: userId
    }
}
export const onUNFollowButtonClick = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        id: userId
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                    dispatch(setUsers(data.items))
                    dispatch(setTotalUsersCount(data.totalCount))
                    dispatch(setToggleIsFetching(false))
                }
            )
    }
}
export const unFollowUserTC = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowingProcess(true, id))
        usersApi.unfollowUser(id)
            .then(data => {
                    dispatch(setFollowingProcess(false, id))
                    if (data.resultCode === 0) {
                        dispatch(onUNFollowButtonClick(id))
                    }
                }
            )

    }
}
export const followUserTC = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowingProcess(true, id))
        usersApi.followUser(id)
            .then(data => {
                    dispatch(setFollowingProcess(false, id))
                    if (data.resultCode === 0) {
                        dispatch(onFollowButtonClick(id))
                    }
                }
            )

    }
}

export default usersReducer