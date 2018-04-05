let EditTodo = (state, closestEdit, index, status, todoFormEdit, todoFormChangeStatus) => {
    this.closestEdit = closestEdit;
    this.index = index;
    this.status = status;

    if (this.closestEdit.innerHTML === 'Edit') {
        let p = this.closestEdit.previousElementSibling.previousElementSibling;
        p.className = '';
        p.style.display = "none";

        todoFormEdit(this.index, p.innerHTML, state.value, state.filter);

        let textarea = document.createElement('textarea');
        textarea.value = p.innerHTML;
        textarea.className = 'd-flex align-items-center';
        textarea.style.cssText = ' width: 52%; height: 38px; padding: .375rem 1.35rem; font-size: 1rem; line-height: 1.5; color: #495057; background-color: #fff; background-clip: padding-box; border: 1px solid #ced4da; border-radius: .25rem; transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;';
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
        p.className ="d-flex align-items-center col col-lg-6";

        todoFormEdit(this.index, textarea.value, state.value, state.filter);
    }
}

export default EditTodo;