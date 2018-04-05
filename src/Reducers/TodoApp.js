import {ADD_TODO, 
        FORK_TODO, 
        DELETE_TODO, 
        CHANGE_STATUS,
        FILTER_CHANGE,
        DOWNLOAD_TODOS } from '../Variables/Variables'

const initialState = {
    iteams: {
        todos:[],
        buttons:[]
    },
    value: '',
    filter: '',
    tempFilter: 'all'
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
                            text: action.text,
                            status: action.status,
                            timestamp: action.timestamp
                        }
                    ],
                    buttons: [
                        ...state.iteams.buttons, 
                        {
                            id: action.id,
                            done: false,
                            text: action.text,
                            status: action.status
                        }
                    ]
                },
                value: '',
                filter: 'all',
                tempFilter: 'all'
            });
        case FORK_TODO:
            console.log('FORK_TODO Action', action.newTime);
            return {
                iteams: {
                    todos: [
                        ...state.iteams.todos.map(todo => {
                            return (todo.id === parseInt(action.id, 0) 
                                    && todo.text !== action.text) 
                                ? {...state.iteams.todo, 
                                    id: todo.id,
                                    text: action.text,
                                    status: todo.status,
                                    timestamp: action.newTime
                                } : todo
                            })
                    ],
                    buttons: [
                        ...state.iteams.buttons.map(button => {
                            return (button.id === parseInt(action.id, 0)) ?
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
                filter: action.filter,
                tempFilter: action.tempFilter
            }; 
        case DELETE_TODO:
            return Object.assign({}, {
                iteams: {
                    todos: state.iteams.todos.filter(iteam => 
                        iteam.id !== parseInt(action.id, 0)
                    ),
                    buttons: state.iteams.buttons.filter(button => 
                        button.id !== parseInt(action.id, 0)
                    )
                }
            });
        case CHANGE_STATUS:
            return {
                iteams: {
                    todos: [
                        ...state.iteams.todos.map(todo => {
                            return (todo.id === parseInt(action.id, 0) 
                                    && todo.status !== action.status) 
                                ? {...state.iteams.todo, 
                                    id: todo.id,
                                    text: todo.text,
                                    status: action.status,
                                    timestamp: todo.timestamp
                                } : todo
                            })
                    ],
                    buttons: [
                        ...state.iteams.buttons.map(button => {
                            return (button.id === parseInt(action.id, 0) 
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
                filter: action.filter,
                tempFilter: action.tempFilter
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
                filter: action.filter,
                tempFilter: action.tempFilter
            };
        case DOWNLOAD_TODOS:
            return state;
        default: 
            return state;
    }
}

export default TodoApp