import React, {Fragment} from 'react';
import TodoIteam from '../TodoIteam/TodoIteam'

class TodoList extends React.Component {
    handleDelete = (e) => {
        let target = e.target;
        let closestDelete = target.closest('span[name="delete"]');
        let closestStatus = target.closest('span[name="status"]');
        let closestEdit = target.closest('button');

        if (closestDelete) {
            let index = closestDelete.parentNode.getAttribute('index');
            this.props.todoFormDelete(parseInt(index));
        } else if (closestEdit) {
            let index = closestEdit.parentNode.getAttribute('index');
            let status = closestEdit.parentNode.getAttribute('status');
            if (closestEdit.innerHTML === 'Edit') {
                let p = closestEdit.previousElementSibling.previousElementSibling;
                p.style.display = 'none';
                this.props.todoFormEdit(index, p.innerHTML, this.props.state.value, this.props.state.filter);
                let textarea = document.createElement('textarea');
                textarea.value = p.innerHTML;
                closestEdit.parentNode.insertBefore(textarea, closestEdit.previousElementSibling);
            } else if (closestEdit.innerHTML === 'Done') {
                let status = closestEdit.parentNode.getAttribute('status');
                if (status == 'done') {
                    this.props.todoFormChangeStatus(index, 'active', this.props.state.value, this.props.state.filter);
                }
                let textarea = closestEdit.previousElementSibling.previousElementSibling;
                let p = closestEdit.previousElementSibling.previousElementSibling.previousElementSibling;
                textarea.style.display = "none";
                p.style.display = "inline-block";
                this.props.todoFormEdit(index, textarea.value, this.props.state.value, this.props.state.filter);
            }
        } else if (closestStatus) {
            let index = closestStatus.parentNode.getAttribute('index');
            let status = closestStatus.parentNode.getAttribute('status');
            if (status == 'done') {
                this.props.todoFormChangeStatus(index, 'active', this.props.state.value, this.props.state.filter);
            } else {
                this.props.todoFormChangeStatus(index, 'done', this.props.state.value, this.props.state.filter);
            }
            
        } else { 
            return 
        }
    }

    render(props) {
        console.log('Hi', this.props.state.iteams.buttons);
        this.props.handleUpdate(this.props.state.iteams.buttons);
        return ( 
            <Fragment>
                <div onClick={this.handleDelete} className="todo__container" >
                    {this.props.state.iteams.todos.map((iteam, index) => {
                        return <TodoIteam iteams={this.props.state.iteams.todos} buttons={this.props.state.iteams.buttons[index]} key={index} {...iteam} />
                    })}
                </div>
            </Fragment>
        );
    }
}

export default TodoList;