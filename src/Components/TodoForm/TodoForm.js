import React from 'react';
import addTodo from '../../Modules/AddTodo'

class TodoForm extends React.Component{   
    handleSubmit = (e) => {
        e.preventDefault();
        addTodo(e, this.props.todoFormAdd);
    }

    render() {
        return (
                <form id="tp" onSubmit={this.handleSubmit} 
                    className="input-group mb-3"
                >
                    <input type="text" placeholder="Your text" class="form-control"/>
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-outline-secondary">Add todos</button>
                    </div>
                </form>
        );  
    }
}
export default TodoForm;
