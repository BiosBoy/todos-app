import { connect } from 'react-redux';
import TodoList from '../Components/TodoList/TodoList';
import { VISIBLE_TODO_ALL, VISIBLE_TODO_ACTIVE, VISIBLE_TODO_DONED, VISIBLE_TODO_SEARCH } from '../Variables/Variables'
import { DeleteTodo, EditTodo, ChangeStatus } from '../Actions/AddTodo'

const getVisibleIteams = (state, value, filter) => {
    switch (filter) {
        case VISIBLE_TODO_ALL:
            return state;
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
                filter: filter
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
                filter: filter
            };
        case VISIBLE_TODO_SEARCH:
            return {
                iteams: {
                    todos: state.iteams.todos.filter(iteam => 
                        iteam.text.match(value)
                    ),
                    buttons: state.iteams.buttons.filter(button => 
                        button.text.match(value)
                    )
                },
                value: value,
                filter: filter
            };
        default: 
           return state;
    }
} 

const mapStateToProps = (state) => ({
    state: getVisibleIteams(state, state.value, state.filter)
});

const mapDispatchToProps = dispatch => ({
      todoFormDelete: todo => dispatch(DeleteTodo(todo)),
      todoFormEdit: (id, text, value, filter) => dispatch(EditTodo(id, text, value, filter)),
      todoFormChangeStatus: (id, status, value, filter) => dispatch(ChangeStatus(id, status, value, filter)),
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(TodoList)