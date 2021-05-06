import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todo.map(item => (
                <Todo toggledCompleted={props.toggledCompleted}
                    key={item.id}
                    item={item} />
            ))}
            <button onClick={() => props.clearTodo()} className='clear-btn'>
                Clear completed
                </button>
        </div>
    )
}

export default TodoList