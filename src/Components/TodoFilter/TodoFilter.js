import React from 'react'

class TodoFilter extends React.Component {
    render() {
        return (
            <div className='row justify-content-center mb-3'>
                <button onClick={(e) => {this.props.onClick('', e.target.name, 'active')}} 
                    name={'VISIBLE_TODO_ALL'} className='btn btn-outline-info ml-1 mr-1'>View All</button>
                <button onClick={(e) => {this.props.onClick('', e.target.name, 'active')}} 
                    name={'VISIBLE_TODO_ACTIVE'} className='btn btn-outline-info ml-1 mr-1'>View Active</button>
                <button onClick={(e) => {this.props.onClick('', e.target.name, 'done')}} 
                    name={'VISIBLE_TODO_DONED'} className='btn btn-outline-info ml-1 mr-1'>View Completed</button>
                <input onChange={(e) => {this.props.onClick(e.target.value, e.target.name, this.props.tempFilter)}} 
                    name={'VISIBLE_TODO_SEARCH'} type="text" placeholder='Search...' className="form-control col-lg-2 ml-1 mr-1"/>
            </div>
        )
    }
}

export default TodoFilter;