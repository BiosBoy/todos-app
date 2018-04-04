import { connect } from 'react-redux';
import { AddTodo, FilterTodoUp, FilterTodoDown } from '../Actions/AddTodo'
import TodoFormFilter from '../Components/TodoFormFilter/TodoFormFilter'


const mapDispatchToProps = dispatch => ({
    todoFilterUp: () => dispatch(FilterTodoUp()),
    todoFilterDown: () => dispatch(FilterTodoDown())
  });

export default connect(null,
  mapDispatchToProps)(TodoFormFilter);