import React from 'react';

class TodoIteam extends React.Component {
    render(props) {
        return (
            <div index={this.props.id} status={this.props.status} className='row align-items-center justify-content-between border border-black rounded mb-1'>
                <span name={'status'} style={{display:"inline-block", padding: "0px 20px 0px 20px"}}>
                    {this.props.status === "active" ? "☐" : "↶" }
                </span>
                    <p className="d-flex align-items-center col col-lg-6" style={{margin: 0, wordBreak: "break-word", textDecoration: this.props.status === 'done' ? 'line-through' : 'none'}}>
                        {this.props.text}
                    </p>
                <span name={'delete'} style={{display:"inline-block", padding: "0px 20px 0px 20px", fontWeight: "bold"}}> 
                    x 
                </span> 
                <button name={this.props.buttons.done === true ? 'clicked' : ''} className="btn btn-secondary">
                    {this.props.buttons.done === true ? 'Done' : 'Edit'}
                </button>
            </div>
        );
    }
}

export default TodoIteam;