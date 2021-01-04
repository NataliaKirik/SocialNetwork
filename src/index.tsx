import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/redux-store";


let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} store={store}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})



