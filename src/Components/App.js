import React, { Fragment } from 'react';
import TodoFormAdd from '../Containers/TodoFormAdd';
import TodoListAdd from '../Containers/TodoListAdd';
import TodoSorting from '../Containers/TodoSorting';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import TodoFilterering from '../Containers/TodoFilterering';
import TodoSaver from '../Containers/TodoSaver';
import preventclicks from '../Modules/PreventClicks'

class App extends React.Component {
    handleUpdate = (buttonCount) => {
        preventclicks(buttonCount);
    }

    render() {
        return(
            <Fragment>
                <Header/>
                <TodoFormAdd />
                <TodoListAdd handleUpdate={this.handleUpdate}/>
                <TodoFilterering />
                <TodoSorting />
                <TodoSaver/>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
