import React from 'react';

class TodoFormFilter extends React.Component{   
    handleClickUp = (e) => {
        this.props.todoFilterUp(); 
    }

    handleClickDown = (e) => {
        this.props.todoFilterDown(); 
    }

    render() {
        return (
            <div className="row justify-content-center">
                <button onClick={this.handleClickUp} className="btn btn-success">SortUp todos</button>
                <button onClick={this.handleClickDown} className="btn btn-danger">SortDown todos</button>
            </div>
        );  
    }
}
export default TodoFormFilter;
