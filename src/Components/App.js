import React, { Fragment } from 'react';
import TodoFormAdd from '../Containers/TodoFormAdd';
import TodoListAdd from '../Containers/TodoListAdd';
import TodoSorting from '../Containers/TodoSorting';
import TodoFilterering from '../Containers/TodoFilterering';
import preventclicks from '../Modules/PreventClicks'

class App extends React.Component {
    handleUpdate = (buttonCount) => {
        console.log(buttonCount);
        preventclicks(buttonCount);
    }

    render() {
        return(
            <Fragment>
                <TodoFormAdd />
                <TodoListAdd handleUpdate={this.handleUpdate}/>
                <TodoFilterering />
                <TodoSorting />
            </Fragment>
        );
    }
}

export default App;
