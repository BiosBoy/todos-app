import React from 'react';
import addTodo from '../../Modules/AddTodo'
import DOMClassNames from '../../Variables/DOMClassNames'

class TodoForm extends React.Component{   
    handleSubmit = (e) => {
        e.preventDefault();
        addTodo(e, this.props.todoFormAdd);
    }

    render() {
        return (
                <form id="tp" onSubmit={this.handleSubmit} className={DOMClassNames().todoForm}>
                    <input type="text" placeholder="Your text" className={DOMClassNames().todoForminput}/>
                    <div className={DOMClassNames().todoFormButtonContainer}>
                        <button type="submit" className={DOMClassNames().todoFormButton}>Add your task</button>
                    </div>
                </form>
        );  
    }
}
export default TodoForm;
