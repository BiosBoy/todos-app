import { connect } from 'react-redux';
import TodoSave from '../Components/TodoSave/TodoSave'

const mapStateToProps = (state) => ({
    save: state
});

export default connect(
    mapStateToProps,
    null)(TodoSave)