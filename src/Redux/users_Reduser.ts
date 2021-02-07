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
            imgUrl: 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg',
            status: 'i am so pretty',
            followed: true,
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            name: 'Svetlana D',
            imgUrl: 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg',
            status: 'i am so pretty too',
            followed: true,
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            name: 'Sergey S',
            imgUrl: 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg',
            status: 'i like football',
            followed: false,
            location: {city: 'Kiev', country: 'Ukrane'}
        }
    ]
}

const usersReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
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