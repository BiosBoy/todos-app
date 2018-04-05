import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer footer col text-center justify-content-center mb-3 mt-5">
                <p>------------------------------</p>
                <p>Simple Todo App. v.1.0</p>
                <p>Powered by <a href="https://reactjs.org/" style={{color: "#61dafb"}}>React</a> & <a href="https://redux.js.org/" style={{color: "#6F45BA"}}>Redux</a>. Styled on <a href="https://getbootstrap.com/" style={{color: "#563d7c"}}>Bootstrap 4 Dev</a></p> 
                <p><a href="https://sviatkuzh.top/">by Sviatoslav Kuzhelev. 2018</a></p>
                <p>All right Reserved</p>
            </div>
        )
    }
}

export default Footer;