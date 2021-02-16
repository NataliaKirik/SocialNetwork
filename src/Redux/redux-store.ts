import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages_Reducer";
import mainReducer from "./main_Reducer";
import usersReducer from "./users_Reduser";
import {profileReducer} from "./profileReducer";

export type RootState = ReturnType<typeof reducers>
export type StoreReduxType = typeof store

const reducers = combineReducers({
    messagePage: messagesReducer,
    mainPage: mainReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
});


let store = createStore(reducers);


export default store;
