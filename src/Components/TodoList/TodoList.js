import React from 'react';
import TodoIteam from '../TodoIteam/TodoIteam'
import editTodosList from '../../Modules/EditTodosList'

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

        return ( 
            <div onClick={this.handleDelete} className="column justify-content-center" >
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