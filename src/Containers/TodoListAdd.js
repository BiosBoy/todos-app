import { connect } from 'react-redux';
import TodoList from '../Components/TodoList/TodoList';
import { VISIBLE_TODO_ALL, VISIBLE_TODO_ACTIVE, VISIBLE_TODO_DONED, VISIBLE_TODO_SEARCH, FILTER_TODO_UP, FILTER_TODO_DOWN } from '../Variables/Variables'
import { DeleteTodo, EditTodo, ChangeStatus } from '../Actions/AddTodo'

const getVisibleIteams = (state, value, filter, tempFilter) => {
    switch (filter) {
        case VISIBLE_TODO_ALL:
            return {
                iteams: {
                    todos: state.iteams.todos.filter(iteam => 
                        iteam.status === 'active' || iteam.status === 'done'
                    ),
                    buttons: state.iteams.buttons.filter(button => 
                        button.status === 'active' || button.status === 'done'
                    )
                },
                value: '',
                filter: filter,
                tempFilter: tempFilter
            }
        case VISIBLE_TODO_ACTIVE:
            return {
                iteams: {
                    todos: state.iteams.todos.filter(iteam => 
                        iteam.status === 'active'  
                    ),
                    buttons: state.iteams.buttons.filter(button => 
                        button.status === 'active'
                    )
                },
                value: '',
                filter: filter,
                tempFilter: tempFilter
            }
        case VISIBLE_TODO_DONED:
            return {
                iteams: {
                    todos: state.iteams.todos.filter(iteam => 
                        iteam.status === 'done'
                    ),
                    buttons: state.iteams.buttons.filter(button => 
                        button.status === 'done'
                    )
                },
                value: '',
                filter: filter,
                tempFilter: tempFilter
            };
        case VISIBLE_TODO_SEARCH:
            return {
                iteams: {
                    todos: state.iteams.todos.filter(iteam => {
                        return tempFilter === 'done' ? iteam.text.match(value) && iteam.status === 'done' 
                            : tempFilter === 'active' ? iteam.text.match(value) && iteam.status === 'active'
                            : tempFilter === 'all' ? iteam.text.match(value) && iteam.status === 'active' || iteam.status === 'done'
                            : iteam.text.match(value)
                    }),
                    buttons: state.iteams.buttons.filter(button => {
                        return tempFilter === 'done' ? button.text.match(value) && button.status === 'done' 
                            : tempFilter === 'active' ? button.text.match(value) && button.status === 'active'
                            : tempFilter === 'all' ? button.text.match(value) && button.status === 'active' || button.status === 'done' 
                            : button.text.match(value)
                    })
                },
                value: value,
                filter: filter,
                tempFilter: tempFilter
            };
        case FILTER_TODO_UP:
            let filteredTodosUp = state.iteams.todos.filter(iteam => {
                return tempFilter === 'done' && value === '' ? iteam.status === 'done' 
                    : tempFilter === 'active' && value === '' ? iteam.status === 'active'
                    : tempFilter === 'all' && value === '' ? iteam.status === 'active' || iteam.status === 'done'
                    : tempFilter === 'done' ? iteam.text.match(value) && iteam.status === 'done'
                    : tempFilter === 'active' ? iteam.text.match(value) && iteam.status === 'active'
                    : tempFilter === 'all' ? iteam.text.match(value) && iteam.status === 'active' || iteam.status === 'done'
                    : iteam
            });
            let filteredButtonsUp = state.iteams.buttons.filter(button => {
                return tempFilter === 'done' && value === '' ? button.status === 'done' 
                    : tempFilter === 'active' && value === '' ? button.status === 'active'
                    : tempFilter === 'all' && value === '' ? button.status === 'active' || button.status === 'done'
                    : tempFilter === 'done' ? button.text.match(value) && button.status === 'done'
                    : tempFilter === 'active' ? button.text.match(value) && button.status === 'active'
                    : tempFilter === 'all' ? button.text.match(value) && button.status === 'active' || button.status === 'done'
                    : button
            });

            return {
                iteams: {
                    todos: filteredTodosUp.sort((a, b) => a.id - b.id),
                    buttons: filteredButtonsUp.sort((a, b) => a.id - b.id)
                },
                value: value,
                filter: filter,
                tempFilter: tempFilter
            };
        case FILTER_TODO_DOWN:
            let filteredTodosDown = state.iteams.todos.filter(iteam => {
                return tempFilter === 'done' && value === '' ? iteam.status === 'done' 
                    : tempFilter === 'active' && value === '' ? iteam.status === 'active'
                    : tempFilter === 'all' && value === '' ? iteam.status === 'active' || iteam.status === 'done'
                    : tempFilter === 'done' ? iteam.text.match(value) && iteam.status === 'done'
                    : tempFilter === 'active' ? iteam.text.match(value) && iteam.status === 'active'
                    : tempFilter === 'all' ? iteam.text.match(value) && iteam.status === 'active' || iteam.status === 'done'
                    : iteam
            });
            let filteredButtonsDown = state.iteams.buttons.filter(button => {
                return tempFilter === 'done' && value === '' ? button.status === 'done' 
                    : tempFilter === 'active' && value === '' ? button.status === 'active'
                    : tempFilter === 'all' && value === '' ? button.status === 'active' || button.status === 'done'
                    : tempFilter === 'done' ? button.text.match(value) && button.status === 'done'
                    : tempFilter === 'active' ? button.text.match(value) && button.status === 'active'
                    : tempFilter === 'all' ? button.text.match(value) && button.status === 'active' || button.status === 'done'
                    : button
            });

            return{
                iteams: {
                    todos: filteredTodosDown.sort((a, b) => b.id - a.id),
                    buttons: filteredButtonsDown.sort((a, b) => b.id - a.id)
                },
                value: value,
                filter: filter,
                tempFilter: tempFilter
            };
        default: 
           return state;
    }
} 

const mapStateToProps = (state) => ({
    state: getVisibleIteams(state, state.value, state.filter, state.tempFilter)
});

const mapDispatchToProps = dispatch => ({
      todoFormDelete: todo => dispatch(DeleteTodo(todo)),
      todoFormEdit: (id, text, value, filter) => dispatch(EditTodo(id, text, value, filter)),
      todoFormChangeStatus: (id, status, value, filter) => dispatch(ChangeStatus(id, status, value, filter)),
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(TodoList)