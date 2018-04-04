import React, { Fragment } from 'react'

class TodoFilter extends React.Component {
    render() {
        return (
            <div>
                <button onClick={(e) => {this.props.onClick(null, e.target.name)}} name={'VISIBLE_TODO_ALL'}>View All</button>
                <button onClick={(e) => {this.props.onClick(null, e.target.name)}} name={'VISIBLE_TODO_ACTIVE'}>View Active</button>
                <button onClick={(e) => {this.props.onClick(null, e.target.name)}} name={'VISIBLE_TODO_DONED'}>View Completed</button>
                <input onChange={(e) => {this.props.onClick(e.target.value, e.target.name)}} name={'VISIBLE_TODO_SEARCH'} type="text" placeholder='Type to search...'/>
            </div>
        )
    }
}

export default TodoFilter;