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
                    className="input-group mb-3 mt-2"
                >
                    <input type="text" placeholder="Your text" className="form-control"/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Add your task</button>
                    </div>
                </form>
        );  
    }
}
export default TodoForm;
