import React, { Fragment } from 'react'
import DOMClassNames from '../../Variables/DOMClassNames'

class Header extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={DOMClassNames().todosHeader}>
                    <h1>Simple Todo App</h1>
                    <h2> --- never miss your tasks ---</h2> 
                    
                </div>
                <p>What'll be your next task? Type it:</p>
            </Fragment> 
        )
    }
}

export default Header;