import React from 'react'
import TodoSaver from '../../Modules/TodoSaver'

class TodoSave extends React.Component {
    handlerSave = () => {
        TodoSaver(this.props.save);
};

    render() {
        return (
            <div className='d-flex align-iteams-center justify-content-left mt-5 mb-3'>
                <button onClick={this.handlerSave} className='btn btn-info ml-1 mr-1'>Download your tasks</button>
                <p style={{margin: '0', marginLeft: '9px'}}>Want to save your own tasks? Do not be shy, just download it! ;)</p>
            </div>
        )
    }
}

export default TodoSave;