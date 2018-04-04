import { connect } from 'react-redux';
import { AddTodo, FilterTodoUp, FilterTodoDown } from '../Actions/AddTodo'
import TodoForm from '../Components/TodoForm/TodoForm'

const mapPropsToDispatch = dispatch => {
    return {
      todoFormAdd: text => dispatch(AddTodo(text))
    }
}

export default connect(null, mapPropsToDispatch)(TodoForm);