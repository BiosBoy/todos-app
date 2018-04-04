let EditTodo = (state, closestEdit, index, status, todoFormEdit, todoFormChangeStatus) => {
    this.closestEdit = closestEdit;
    this.index = index;
    this.status = status;

    if (this.closestEdit.innerHTML === 'Edit') {
        let p = this.closestEdit.previousElementSibling.previousElementSibling;
        p.style.display = 'none';

        todoFormEdit(this.index, p.innerHTML, state.value, state.filter);

        let textarea = document.createElement('textarea');
        textarea.value = p.innerHTML;
        closestEdit.parentNode.insertBefore(textarea, this.closestEdit.previousElementSibling);
    } else if (this.closestEdit.innerHTML === 'Done') {
        let status = this.closestEdit.parentNode.getAttribute('status');

        if (status === 'done') {
            todoFormChangeStatus(this.index, 'active', state.value, state.filter);
        }

        let textarea = this.closestEdit.previousElementSibling.previousElementSibling;
        let p = this.closestEdit.previousElementSibling.previousElementSibling.previousElementSibling;
        textarea.remove();
        p.style.display = "inline-block";

        todoFormEdit(this.index, textarea.value, state.value, state.filter);
    }
}

export default EditTodo;