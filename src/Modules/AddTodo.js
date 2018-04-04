let addTodo = (e, todoFormAdd) => {
    let input = document.querySelector('input'); 
    if (input.value !== '') {
        todoFormAdd(input.value); 
        input.value = '';
    }
}

export default addTodo;