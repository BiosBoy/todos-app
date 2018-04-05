import { connect } from 'react-redux';
import { FilterChange } from '../Actions/AddTodo'
import TodoFilter from '../Components/TodoFilter/TodoFilter';

const mapStatetoProps = state => ({
    tempFilter: state.tempFilter
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (value, status, tempFilter) => dispatch(FilterChange(value, status, tempFilter))
});

export default connect(
    mapStatetoProps,
    mapDispatchToProps)(TodoFilter);