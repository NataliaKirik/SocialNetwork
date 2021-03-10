import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./messages_Reducer";
import mainReducer from "./main_Reducer";
import usersReducer from "./users_Reduser";
import {profileReducer} from "./profileReducer";
import {authReducer} from "./auth_reducer";
import thunkMiddleware from "redux-thunk";

export type RootState = ReturnType<typeof reducers>
export type StoreReduxType = typeof store

const reducers = combineReducers({
    messagePage: messagesReducer,
    mainPage: mainReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
