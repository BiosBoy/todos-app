import {ADD_TODO, 
        ADDED_BUTTON, 
        TOGGLE_BUTTON, 
        EDIT_TODO, 
        DELETE_TODO, 
        FILTER_TODO_UP, 
        FILTER_TODO_DOWN, 
        FORK_TODO,
        CHANGE_STATUS,
        FILTER_CHANGE,
        VISIBLE_TODO_ALL,
        VISIBLE_TODO_ACTIVE,
        VISIBLE_TODO_DONED } from '../Variables/Variables'

let nextTodoId = 0;

function AddTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text,
        status: 'active',
        done: false
    }
};

function AddedButton(id, text) {
    return {
        type: ADDED_BUTTON,
        id: nextTodoId++,
        text
    }
};

function ToggleButton(id, text) {
    return {
        type: TOGGLE_BUTTON,
        text
    }
};


function EditTodo(id, text, value, filter) {
    return {
        type: FORK_TODO,
        id,
        text,
        value,
        filter
    }
};

function DeleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
};

function FilterTodoUp(id) {
    return {
        type: FILTER_TODO_UP
    }
};

function FilterTodoDown(id) {
    return {
        type: FILTER_TODO_DOWN
    }
};

function ChangeStatus(id, status, value, filter) {
    return {
        type: CHANGE_STATUS,
        id,
        status,
        value,
        filter
    }
}

function FilterChange(value, filter) {
    return {
        type: FILTER_CHANGE,
        value,
        filter
    }
}

function VisibleTodoAll(id, filter) {
    return {
        type: VISIBLE_TODO_ALL,
        id,
        filter
    }
};

function VisibleTodoActive(id, filter) {
    return {
        type: VISIBLE_TODO_ACTIVE,
        id,
        filter
    }
};

function VisibleTodoDoned(id, filter) {
    return {
        type: VISIBLE_TODO_DONED,
        id,
        filter
    }
};

export {AddTodo,
        EditTodo, 
        DeleteTodo, 
        FilterTodoUp, 
        FilterTodoDown, 
        AddedButton, 
        ToggleButton, 
        ChangeStatus,
        FilterChange,
        VisibleTodoAll, 
        VisibleTodoActive, 
        VisibleTodoDoned}