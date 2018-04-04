import { connect } from 'react-redux';
import { FilterChange } from '../Actions/AddTodo'
import TodoFilter from '../Components/TodoFilter/TodoFilter';

const mapDispatchToProps = (dispatch) => ({
    onClick: (value, status) => dispatch(FilterChange(value, status))
});

export default connect(
    null,
    mapDispatchToProps)(TodoFilter);