import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages_Reducer";
import mainReducer from "./main_Reducer";
export type AppDispatchType = typeof store.dispatch


let reducers = combineReducers({
    messagePage: messagesReducer,
    mainPage: mainReducer
});
let store = createStore(reducers);



export default store;
