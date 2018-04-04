import { connect } from 'react-redux';
import { FilterTodoUp, FilterTodoDown } from '../Actions/AddTodo'
import TodoSort from '../Components/TodoSort/TodoSort'

const mapDispatchToProps = dispatch => ({
    todoFilterUp: () => dispatch(FilterTodoUp()),
    todoFilterDown: () => dispatch(FilterTodoDown())
  });

export default connect(
  null,
  mapDispatchToProps)(TodoSort);