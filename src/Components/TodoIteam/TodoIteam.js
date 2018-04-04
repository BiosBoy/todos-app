import React from 'react';

class TodoIteam extends React.Component {
    render(props) {
        return (
            <div index={this.props.id} status={this.props.status} className='row justify-content-center'>
                <span name={'status'} style={{display:"inline-block", padding: "0px 20px 0px 20px"}}>
                    {this.props.status === "active" ? "✔" : "↶" }
                </span>
                <p style={{display:"inline-block", textDecoration: this.props.status === 'done' ? 'line-through' : 'none'}}>
                    {this.props.text}
                </p>
                <span name={'delete'} style={{display:"inline-block",  padding: "0px 20px 0px 20px"}}> 
                    x 
                </span> 
                <button name={this.props.buttons.done === true ? 'clicked' : ''}>
                    {this.props.buttons.done === true ? 'Done' : 'Edit'}
                </button>
            </div>
        );
    }
}

export default TodoIteam;