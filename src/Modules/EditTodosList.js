import EditTodo from './EditTodo'

let editTodosList = (e, state, todoFormEdit, todoFormDelete, todoFormChangeStatus) => {
    let target = e.target;
    let closestDelete = target.closest('span[name="delete"]');
    let closestStatus = target.closest('span[name="status"]');
    let closestEdit = target.closest('button');

    if (closestDelete) {
        let index = closestDelete.parentNode.getAttribute('index');
        
        todoFormDelete(parseInt(index, 0));
    } else if (closestEdit) {
        let index = closestEdit.parentNode.getAttribute('index');
        let status = closestEdit.parentNode.getAttribute('status');

        EditTodo(state, closestEdit, index, status, todoFormEdit, todoFormChangeStatus);
    } else if (closestStatus) {
        let index = closestStatus.parentNode.getAttribute('index');
        let status = closestStatus.parentNode.getAttribute('status');

        if (status === 'done') {
            todoFormChangeStatus(index, 'active', state.value, state.filter);
        } else {
            todoFormChangeStatus(index, 'done', state.value, state.filter);
        }
    } else { 
        return 
    }
}

export default editTodosList;