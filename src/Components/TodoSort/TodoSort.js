import React from 'react';
import DOMClassNames from '../../Variables/DOMClassNames'

class TodoFormFilter extends React.Component{   
    render() {
        return (
            <div className="row justify-content-center">
                <button onClick={() => {this.props.onClick(
                                            this.props.value, 
                                            'FILTER_TODO_UP', 
                                            this.props.tempFilter)}} 
                                            className={DOMClassNames().buttonFilterUp}>
                    Sort by Newest
                </button>
                <button onClick={() => {this.props.onClick(
                                            this.props.value, 
                                            'FILTER_TODO_DOWN', 
                                            this.props.tempFilter)}} 
                                            className={DOMClassNames().buttonFilterDown}>
                    Sort by Oldest
                </button>
            </div>
        );  
    }
}
export default TodoFormFilter;
