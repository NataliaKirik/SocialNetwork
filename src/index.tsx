import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dataUsersMessages = [
    {id: 1, title: 'Igor Petrov'},
    {id: 2, title: 'Ilya Sergeev'},
    {id: 3, title: 'George Ivanov'},
    {id: 4, title: 'Maria Sokolova'},
    {id: 5, title: 'Mike Sidorov'}
]
let dataMessages = [
    {id: 1, title: 'Hello'},
    {id: 2, title: 'How are you?'},
    {id: 3, title: 'Hi'},
    {id: 4, title: 'YO'},
    {id: 5, title: 'I\'m fine'}
]
let dataMain = [
    {title: 'Hello', likesCount: 15, name: 'Igor Petrov'},
    {title: 'What are you doing?', likesCount: 20, name: 'George Ivanov'},
    {title: 'Yo', likesCount: 10, name: 'Mike Sidorov'}
]


ReactDOM.render(
  <React.StrictMode>
    <App dataUsersMessages={dataUsersMessages} dataMessages={dataMessages} dataMain={dataMain}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
