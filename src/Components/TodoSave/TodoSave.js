import React from 'react'
import TodoSaver from '../../Modules/TodoSaver'
import DOMClassNames from '../../Variables/DOMClassNames'

class TodoSave extends React.Component {
    handlerSave = () => {
        TodoSaver(this.props.save);
};

    render() {
        return (
            <div className={DOMClassNames().buttonSaverContainer}>
                <button onClick={this.handlerSave} className={DOMClassNames().buttonSaver}>Download your tasks</button>
                <p>Want to save your own tasks? Do not be shy, just download it! ;)</p>
            </div>
        )
    }
}

export default TodoSave;