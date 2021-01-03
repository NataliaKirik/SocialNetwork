import {friendsLittlePageType} from "./store";

let InitialState: friendsLittlePageType = {
    friends: [
        {id: 1, title: 'Borys Sidorov'},
        {id: 2, title: 'Ivan Golubev'}
    ]
}

const friendsLittlePageReducer = (state = InitialState, action: any) => {
    return state
}
export default friendsLittlePageReducer