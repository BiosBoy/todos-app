import { connect } from 'react-redux';
import { AddTodo } from '../Actions/AddTodo'
import TodoForm from '../Components/TodoForm/TodoForm'

const mapPropsToDispatch = (dispatch) => ({
      todoFormAdd: text => dispatch(AddTodo(text))
});

export default connect(
    null, 
    mapPropsToDispatch)(TodoForm);