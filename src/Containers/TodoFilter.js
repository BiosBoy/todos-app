import { connect } from 'react-redux';
import { VISIBLE_TODO_ALL, VISIBLE_TODO_ACTIVE, VISIBLE_TODO_DONED } from '../Variables/Variables'
import { VisibleTodoAll, VisibleTodoActive, VisibleTodoDoned, FilterChange } from '../Actions/AddTodo'
// import TodoFilter from '../Components/TodoFilter/TodoFilter'
import TodoFilter from '../Components/TodoFilter/TodoFilter';

const mapDispatchToProps = (dispatch) => ({
    onClick: (value, status) => dispatch(FilterChange(value, status))
});

export default connect(null,
    // mapStateToProps,
    mapDispatchToProps
)(TodoFilter);