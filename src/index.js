import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TodoApp from './Reducers/TodoApp'
import App from './Components/App';
import './Styles/style.css';

const store = createStore(TodoApp);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);