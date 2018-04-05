import React from 'react';
import DOMClassNames from '../../Variables/DOMClassNames'

class TodoIteam extends React.Component {
    render(props) {
        console.log('this.props.timestamp', this.props.timestamp);
        return (
            <div index={this.props.id} status={this.props.status} className={DOMClassNames().todoContainer}>
                <span name={'status'}>
                    {this.props.status === "active" ? "☐" : "↶" }
                </span>
                    <p className={DOMClassNames().todoId}>
                        {this.props.id}.
                    </p>
                    <p className={DOMClassNames().todoText} style={{textDecoration: this.props.status === 'done' 
                                                                                    ? 'line-through' : 'none'}}
                    >
                        {this.props.text}
                    </p>
                    <p className={DOMClassNames().todoTime}>
                        {this.props.timestamp}
                    </p>
                <span name={'delete'}> 
                    x 
                </span> 
                <button name={this.props.buttons.done === true ? 'clicked' : ''} 
                        className={DOMClassNames().buttonEdit}>
                    {this.props.buttons.done === true ? 'Done' : 'Edit'}
                </button>
            </div>
        );
    }
}

export default TodoIteam;