import React from 'react';

class TodoIteam extends React.Component {
    render(props) {
        let status = this.props.status;
        return (
            <div index={this.props.id} status={this.props.status}>
                <span name={'status'} style={{display:"inline-block", padding: "0px 20px 0px 20px"}}>{status === "active" ? "✔" : "↶" }</span>
                <p style={{display:"inline-block", textDecoration: status === 'done' ? 'line-through' : 'none' }}>
                    {this.props.text}
                </p>
                <span name={'delete'} style={{display:"inline-block", padding: "0px 20px 0px 20px"}}> x </span> 
                <button>{this.props.buttons.done === true ? 'Done' : 'Edit'}</button>
            </div>
        );
    }
}

export default TodoIteam;