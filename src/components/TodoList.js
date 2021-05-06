import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.list.map(item => (
                <Todo toggledCompleted={props.toggledCompleted}
                    key={item.id}
                    item={item} />
            ))}
        </div>
    )
}

export default TodoList