import EditTodo from './EditTodo'
import DOMVariables from '../Variables/DOMVariables'

let editTodosList = (e, state, todoFormEdit, todoFormDelete, todoFormChangeStatus) => {
    let target = e.target;
    let closestDelete = target.closest('span[name="delete"]');
    let closestStatus = target.closest('span[name="status"]');
    let closestEdit = target.closest('button');
         
    if (closestDelete) {
        let closestDeleteIndex = DOMVariables(closestDelete).closestDeleteIndex();

        todoFormDelete(parseInt(closestDeleteIndex, 0));
    } else if (closestEdit) {
        let closestEditIndex = DOMVariables(closestEdit).closestEditIndex();
        let closestEditStatus = DOMVariables(closestEdit).closestEditStatus();

        EditTodo(state, closestEdit, closestEditIndex, closestEditStatus, todoFormEdit, todoFormChangeStatus);
    } else if (closestStatus) {        
        let closestStatusIndex = DOMVariables(closestStatus).closestStatusIndex();
        let closestStatusStatus = DOMVariables(closestStatus).closestStatusStatus();
        if (closestStatusStatus === 'done') {
            todoFormChangeStatus(closestStatusIndex, 'active', state.value, state.filter);
        } else {

            todoFormChangeStatus(closestStatusIndex, 'done', state.value, state.filter);
        }
    } else { 
        return 
    }
}

export default editTodosList;