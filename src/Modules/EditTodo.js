import DOMVariables from '../Variables/DOMVariables'
import DOMClassNames from '../Variables/DOMClassNames'

let EditTodo = (state, closestEdit, index, status, 
                todoFormEdit, todoFormChangeStatus) => {
    this.closestEdit = closestEdit;
    this.index = index;
    this.status = status;

    let p = DOMVariables(this.closestEdit).closestEdit();
    let time = DOMVariables(this.closestEdit).closestEditTime();
    let parent = DOMVariables(this.closestEdit).closestEditParent();
    let text = DOMVariables(this.closestEdit).closestEditText();
    let textarea = DOMVariables(this.closestEdit).closestEditTextarea();
    let dateOptions = {hour: '2-digit', minute: '2-digit', second: '2-digit'};

    if (this.closestEdit.innerHTML === 'Edit') {
        p.className = '';
        p.style.display = "none";

        todoFormEdit(this.index, p.innerHTML, state.value, state.filter);

        let textarea = document.createElement('textarea');
        textarea.value = p.innerHTML;

        time.innerHTML = new Date().toLocaleString('ru', dateOptions);

        textarea.className = DOMClassNames().closestEditTextarea;
        parent.insertBefore(textarea, time);
        textarea.focus();
    } else if (this.closestEdit.innerHTML === 'Done') {
        let status = parent.getAttribute('status');

        if (status === 'done') {
            todoFormChangeStatus(this.index, 'active', state.value, state.filter);
        }

        text.className = DOMClassNames().todoText;
        text.innerHTML = textarea.value;
        textarea.remove();

        let newTime = new Date().toLocaleString('ru', dateOptions);
        todoFormEdit(this.index, textarea.value, newTime, state.value, state.filter);
    }
}

export default EditTodo;