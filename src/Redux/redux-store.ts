import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages_Reducer";
import mainReducer from "./main_Reducer";
import friendsLittlePageReducer from "./friendsLittlePage_Reducer";


let reducers = combineReducers({
    messagePage: messagesReducer,
    mainPage: mainReducer,
    friendsLittlePage:friendsLittlePageReducer
});
let store = createStore(reducers);

export default store;