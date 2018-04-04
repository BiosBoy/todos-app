import React, { Fragment } from 'react';

class TodoForm extends React.Component{   
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('l');

        let input = document.querySelector('input'); 
        if (input.value !== '') {
            this.props.todoFormAdd(input.value); 
            input.value = '';
        }
    }

    render() {
        return (
                <form id="tp" onSubmit={this.handleSubmit} style={{display:"inline-block"}}>
                    <input type="text" placeholder="Your text" />
                    <button type="submit">Add todos</button>
                </form>
        );  
    }
}
export default TodoForm;
