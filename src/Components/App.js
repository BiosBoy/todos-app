import React, { Fragment } from 'react';
import TodoFormAdd from '../Containers/TodoFormAdd';
import TodoListAdd from '../Containers/TodoListAdd';
import TodoFormFilterAdd from '../Containers/TodoFormFilterAdd';
import TodoFilter from '../Containers/TodoFilter';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleUpdate = (buttonCount) => {
        buttonCount.forEach(button => {
            if (button.done === true) {
                document.documentElement.onclick = (e) => {console.log('Document click!!!'); e.preventDefault(); return false}
            }
        });
    }

    render() {
        return(
            <Fragment>
                <TodoFormAdd />
                <TodoListAdd handleUpdate={this.handleUpdate}/>
                <TodoFormFilterAdd />
                <TodoFilter />
            </Fragment>
        );
    }
}

export default App;
