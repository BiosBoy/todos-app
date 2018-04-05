import React, { Fragment } from 'react'

class Header extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="header col text-center justify-content-center mb-5 mt-5">
                    <h1>Simple Todo App</h1>
                    <h2> --- never miss your tasks ---</h2> 
                    
                </div>
                <p>What'll be your next task? Type it:</p>
            </Fragment> 
        )
    }
}

export default Header;