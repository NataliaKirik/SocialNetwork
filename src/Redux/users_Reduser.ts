type actionType = {
    type: 'TOGGLE_FOLLOW'
    id: number
}
export type usersState = {
    usersPage: users
}
export type users = {
    users: Array<userType>
}
export type userType = {
    id: number
    name: string
    imgUrl: string
    status: string
    followed: boolean
    location: locationType
}
export type locationType = {
    city: string
    country: string
}

let initialState = {
    users: [
        {
            id: 1,
            name: 'Dmitry K',
            imgUrl: 'https://lh3.googleusercontent.com/proxy/RMbjOPjLUVO6WP_4st2jNjOMPGg2k-aLwiylwJAxgxQyjZ2SNoFk4-hVSM85a9OrD14CUJaIV-kBTaT9J1dnjXAbs7z0H8WLJomBNmXk8Spa5JCBKrUfRmy94ap7Z5zDK-UDirQ',
            status: 'i am so pretty',
            followed: true,
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            name: 'Svetlana D',
            imgUrl: 'http://sun9-40.userapi.com/fV8ZUe8VzV6xiBzbtV_-seyxNN2B21Rl8pMyjQ/svnsrqZXvJg.jpg',
            status: 'i am so pretty too',
            followed: true,
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            name: 'Sergey S',
            imgUrl: 'https://lh3.googleusercontent.com/proxy/RMbjOPjLUVO6WP_4st2jNjOMPGg2k-aLwiylwJAxgxQyjZ2SNoFk4-hVSM85a9OrD14CUJaIV-kBTaT9J1dnjXAbs7z0H8WLJomBNmXk8Spa5JCBKrUfRmy94ap7Z5zDK-UDirQ',
            status: 'i like football',
            followed: false,
            location: {city: 'Kiev', country: 'Ukrane'}
        }
    ]
}

const usersReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW': {
            let stateCopy = {...state}
            return stateCopy.users.map((u) => {
                u.id === action.id ? alert('true') : alert('false')
            })
        }
        default:
            return state
    }
}


export default usersReducer