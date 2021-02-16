import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages_Reducer";
import mainReducer from "./main_Reducer";
import usersReducer from "./users_Reduser";


let reducers = combineReducers({
    messagePage: messagesReducer,
    mainPage: mainReducer,
    usersPage: usersReducer
});

export type RootStore = ReturnType<typeof reducers>

let store = createStore(reducers);


export default store;
