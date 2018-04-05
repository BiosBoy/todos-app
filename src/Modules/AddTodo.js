import DOMVariables from '../Variables/DOMVariables'

let addTodo = (e, todoFormAdd) => {
    let input = DOMVariables().input;
    if (input.value !== '') {
        todoFormAdd(input.value); 
        input.value = '';
    }
}

export default addTodo;