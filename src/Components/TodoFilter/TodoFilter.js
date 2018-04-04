import React from 'react'

class TodoFilter extends React.Component {
    render() {
        return (
            <div className='row justify-content-center'>
                <button onClick={(e) => {this.props.onClick(null, e.target.name)}} 
                    name={'VISIBLE_TODO_ALL'} className='btn btn-outline-info'>View All</button>
                <button onClick={(e) => {this.props.onClick(null, e.target.name)}} 
                    name={'VISIBLE_TODO_ACTIVE'} className='btn btn-outline-info'>View Active</button>
                <button onClick={(e) => {this.props.onClick(null, e.target.name)}} 
                    name={'VISIBLE_TODO_DONED'} className='btn btn-outline-info'>View Completed</button>
                <input onChange={(e) => {this.props.onClick(e.target.value, e.target.name)}} 
                    name={'VISIBLE_TODO_SEARCH'} type="text" placeholder='Type to search...' className="row form-control"/>
            </div>
        )
    }
}

export default TodoFilter;