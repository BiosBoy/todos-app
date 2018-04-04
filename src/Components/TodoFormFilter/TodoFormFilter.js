import React, { Fragment } from 'react';

class TodoFormFilter extends React.Component{   
    handleClickUp = (e) => {
        // console.log(e.target);
        this.props.todoFilterUp(); 
    }

    handleClickDown = (e) => {
        // console.log(e.target);
        this.props.todoFilterDown(); 
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickUp} style={{display:"inline-block"}}>SortUp todos</button>
                <button onClick={this.handleClickDown} style={{display:"inline-block"}}>SortDown todos</button>
            </div>
        );  
    }
}
export default TodoFormFilter;
