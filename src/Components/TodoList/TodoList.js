import React from 'react';
import TodoIteam from '../TodoIteam/TodoIteam'
import editTodosList from '../../Modules/EditTodosList'
import DOMClassNames from '../../Variables/DOMClassNames'

class TodoList extends React.Component {
    handleDelete = (e) => {
        editTodosList(
            e, 
            this.props.state, 
            this.props.todoFormEdit, 
            this.props.todoFormDelete, 
            this.props.todoFormChangeStatus
        );
    }

    render(props) {
        this.props.handleUpdate(this.props.state.iteams.buttons);
        console.log(this.props.state.iteams.todos);
        return ( 
            this.props.state.iteams.todos.length === 0 
                ? <p className={DOMClassNames().todosEmpty}>
                    Empty List. Write something and it will change! ;)</p> 
                : <div onClick={this.handleDelete} className={DOMClassNames().todosContainer}>
                    {this.props.state.iteams.todos.map((iteam, index) => {
                        return <TodoIteam 
                                    iteams={this.props.state.iteams.todos} 
                                    buttons={this.props.state.iteams.buttons[index]} 
                                    key={index} 
                                    {...iteam} 
                                />
                    })}
                </div>
        );
    }
}

export default TodoList;