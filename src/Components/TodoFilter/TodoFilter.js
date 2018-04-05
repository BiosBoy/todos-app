import React from 'react'
import DOMClassNames from '../../Variables/DOMClassNames'

class TodoFilter extends React.Component {
    render() {
        return (
            <div className={DOMClassNames().todosFilterContainer}>
                <button onClick={(e) => {this.props.onClick('', e.target.name, 'all')}} 
                    name={'VISIBLE_TODO_ALL'} className={DOMClassNames().todosFilterAll}>View All</button>
                <button onClick={(e) => {this.props.onClick('', e.target.name, 'active')}} 
                    name={'VISIBLE_TODO_ACTIVE'} className={DOMClassNames().todosFilterActive}>View Active</button>
                <button onClick={(e) => {this.props.onClick('', e.target.name, 'done')}} 
                    name={'VISIBLE_TODO_DONED'} className={DOMClassNames().todosFilterDoned}>View Completed</button>
                <input onChange={(e) => {this.props.onClick(e.target.value, e.target.name, this.props.tempFilter), console.log('this.props.tempFilter', this.props.tempFilter)}}
                    name={'VISIBLE_TODO_SEARCH'} type="text" placeholder='Search...' className={DOMClassNames().todosFilterSearch}/>
            </div>
        )
    }
}

export default TodoFilter;