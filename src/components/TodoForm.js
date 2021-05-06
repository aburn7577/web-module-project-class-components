import React from 'react'

const TodoForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <input
                value={props.newTask}
                type='text' name='task'
                onChange={props.handleChanges} />
            <button>Add</button>
            <div className='btn'>

                <button onClick={props.clearCompleted} >
                    Clear completed
                </button>
            </div>
        </form>
    )
}


export default TodoForm