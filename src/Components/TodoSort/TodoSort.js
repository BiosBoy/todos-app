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
                <button onClick={this.handleClickUp} style={{display:"inline-block"}}>SortUp todos</button>
                <button onClick={this.handleClickDown} style={{display:"inline-block"}}>SortDown todos</button>
            </div>
        );  
    }
}
export default TodoFormFilter;
