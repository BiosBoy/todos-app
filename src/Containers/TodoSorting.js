import { connect } from 'react-redux';
import { FilterChange } from '../Actions/AddTodo'
import TodoSort from '../Components/TodoSort/TodoSort'

const mapStatetoProps = state => ({
  value: state.value,
  tempFilter: state.tempFilter
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (value, status, tempFilter) => dispatch(FilterChange(value, status, tempFilter))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps)(TodoSort);