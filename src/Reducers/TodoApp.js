import { combineReducers } from 'redux'
import {ADD_TODO, 
        FORK_TODO, 
        ADDED_BUTTON, 
        TOGGLE_BUTTON,
        EDIT_TODO, 
        DELETE_TODO, 
        FILTER_TODO_UP, 
        FILTER_TODO_DOWN,
        CHANGE_STATUS,
        FILTER_CHANGE,
        VISIBLE_TODO_ALL,
        VISIBLE_TODO_ACTIVE,
        VISIBLE_TODO_DONED } from '../Variables/Variables'

const initialState = {
    iteams: {
        todos:[],
        buttons:[]
    },
    value: '',
    filter: ''
}

function TodoApp(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                iteams: {
                    todos: [
                        ...state.iteams.todos, 
                        {
                            id: action.id,
                            text: action.text + '___' + action.id,
                            status: action.status
                        }
                    ],
                    buttons: [
                        ...state.iteams.buttons, 
                        {
                            id: action.id,
                            done: false,
                            text: action.text + '___' + action.id,
                            status: action.status
                        }
                    ]
                }
            });
        case FORK_TODO:
            return {
                iteams: {
                    todos: [
                        ...state.iteams.todos.map(todo => {
                            return (todo.id === parseInt(action.id) 
                                    && todo.text !== action.text) 
                                ? {...state.iteams.todo, 
                                    id: todo.id,
                                    text: action.text,
                                    status: todo.status
                                } : todo
                            })
                    ],
                    buttons: [
                        ...state.iteams.buttons.map(button => {
                            return (button.id === parseInt(action.id)) ?
                                {...state.iteams.button, 
                                    id: button.id,
                                    done: !button.done,
                                    text: action.text,
                                    status: button.status
                                } : button
                        })
                    ]
                },
                value: action.value,
                filter: action.filter
            }; 
        case DELETE_TODO:
            return Object.assign({}, {
                iteams: {
                    todos: state.iteams.todos.filter(iteam => 
                        iteam.id !== parseInt(action.id)
                    ),
                    buttons: state.iteams.buttons.filter(button => 
                        button.id !== parseInt(action.id)
                    )
                }
            });
        case FILTER_TODO_UP:
            return Object.assign({}, state, {
                iteams: {
                    todos: [
                        ...state.iteams.todos.sort((a, b) => 
                        a.id - b.id
                    )],
                    buttons: [
                        ...state.iteams.buttons.sort((a, b) => 
                        a.id - b.id
                    )]
                }
            });
        case FILTER_TODO_DOWN:
            return Object.assign({}, {
                iteams: {
                    todos: [
                        ...state.iteams.todos.sort((a, b) => 
                        b.id - a.id
                    )],
                    buttons: [
                        ...state.iteams.buttons.sort((a, b) => 
                        b.id - a.id
                    )]
                }
            });
        case CHANGE_STATUS:
            return {
                iteams: {
                    todos: [
                        ...state.iteams.todos.map(todo => {
                            return (todo.id === parseInt(action.id) 
                                    && todo.status !== action.status) 
                                ? {...state.iteams.todo, 
                                    id: todo.id,
                                    text: todo.text,
                                    status: action.status
                                } : todo
                            })
                    ],
                    buttons: [
                        ...state.iteams.buttons.map(button => {
                            return (button.id === parseInt(action.id) 
                                    && button.status !== action.status) ?
                                {...state.iteams.button, 
                                    id: button.id,
                                    done: button.done,
                                    text: button.text,
                                    status: action.status
                                } : button
                        })
                    ]
                }, 
                value: action.value,
                filter: action.filter
            };
        case FILTER_CHANGE:
            return {
                iteams: {
                    todos: [
                        ...state.iteams.todos
                    ],
                     buttons: [
                        ...state.iteams.buttons
                    ]
                }, 
                value: action.value,
                filter: action.filter
            };
        default: 
            return state;
    }
}

export default TodoApp