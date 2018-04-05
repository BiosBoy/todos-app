import React from 'react';

class TodoFormFilter extends React.Component{   
    // handleClickUp = (e) => {
    //     this.props.todoFilterUp('FILTER_TODO_UP'); 
    // }

    // handleClickDown = (e) => {
    //     this.props.todoFilterDown('FILTER_TODO_DOWN'); 
    // }

    render() {
        return (
            <div className="row justify-content-center">
                <button onClick={() => {this.props.onClick(this.props.value, 'FILTER_TODO_UP', this.props.tempFilter)}} className="btn btn-outline-success border border-white ml-1 mr-1">Sort by Newest</button>
                <button onClick={() => {this.props.onClick(this.props.value, 'FILTER_TODO_DOWN', this.props.tempFilter)}} className="btn btn-outline-danger border border-white ml-1 mr-1">Sort by Oldest</button>
            </div>
        );  
    }
}
export default TodoFormFilter;
