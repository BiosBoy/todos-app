import {ADD_TODO, 
        DELETE_TODO, 
        FILTER_TODO_UP, 
        FILTER_TODO_DOWN, 
        FORK_TODO,
        CHANGE_STATUS,
        FILTER_CHANGE,
        VISIBLE_TODO_ALL,
        VISIBLE_TODO_ACTIVE,
        VISIBLE_TODO_DONED,
        DOWNLOAD_TODOS } from '../Variables/Variables'

let nextTodoId = 0;

function AddTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text,
        status: 'active',
        done: false,
        timestamp: new Date().toLocaleString('ru', {
                                                    hour: '2-digit', 
                                                    minute: '2-digit', 
                                                    second: '2-digit'})
    }
};

function EditTodo(id, text, newTime, value, filter) {
    console.log('EditTodo Action', newTime);
    return {
        type: FORK_TODO,
        id,
        text,
        newTime,
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

function FilterTodoUp(filter) {
    return {
        type: FILTER_TODO_UP,
        filter
    }
};

function FilterTodoDown(filter) {
    return {
        type: FILTER_TODO_DOWN,
        filter
    }
};

function ChangeStatus(id, status, value, filter) {
    console.log('ChangeStatus Action', id, status);
    return {
        type: CHANGE_STATUS,
        id,
        status,
        value,
        filter
    }
}

function FilterChange(value, filter, tempFilter) {
    return {
        type: FILTER_CHANGE,
        value,
        filter,
        tempFilter
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

function TodoSaver() {
    return {
        type: DOWNLOAD_TODOS
    }
};

export {AddTodo,
        EditTodo, 
        DeleteTodo, 
        FilterTodoUp, 
        FilterTodoDown, 
        ChangeStatus,
        FilterChange,
        VisibleTodoAll, 
        VisibleTodoActive, 
        VisibleTodoDoned,
        TodoSaver}